import axios from "axios"
import xmldoc from "xmldoc"
import OUNCES_PER_POUND from "../constants/OUNCES_PER_POUND"
import { ServiceOption } from "../models/ServiceOption"
import { Shipment } from "../models/Shipment"
import isDomestic from "./isDomestic"
const MIN_LARGE_DIMENSION = 12
const REVISION_NODE = "<Revision>2</Revision>"
const PACKAGE_OPENING_TAG = '<Package ID="1">'
const SHIPPING_API_ENDPOINT = "http://production.shippingapis.com/ShippingAPI.dll"
const createOrderDocument = (order: Shipment) => {
    const pkg = order.package
    const dimensions = [...pkg.dimensions].sort()
    const size = dimensions.some(x => x > MIN_LARGE_DIMENSION) ? "LARGE" : "REGULAR"
    const [width, length, height] = pkg.dimensions
    const girth = 2 * (width + height)
    const dimensionNodes = `<Size>${size}</Size><Width>${width}</Width><Length>${length}</Length><Height>${height}</Height><Girth>${girth}</Girth>`
    const pounds = Math.floor(pkg.ounces / OUNCES_PER_POUND)
    const ounces = Math.ceil(pkg.ounces - pounds * OUNCES_PER_POUND)
    const weightNodes = `<Pounds>${pounds}</Pounds><Ounces>${ounces}</Ounces>`
    return isDomestic(order.address.country)
        ? `<RateV4Request USERID="${process.env.USPS_USER_ID}">${REVISION_NODE}${PACKAGE_OPENING_TAG}<Service>MEDIA</Service><ZipOrigination>${process.env.ORIGIN_ZIP_CODE}</ZipOrigination><ZipDestination>${order.address.postalCode}</ZipDestination>${weightNodes}<Container>VARIABLE</Container>${dimensionNodes}<Value>${pkg.value}</Value></Package></RateV4Request>`
        : `<IntlRateV2Request USERID="${process.env.USPS_USER_ID}">${REVISION_NODE}${PACKAGE_OPENING_TAG}${weightNodes}<MailType>PACKAGE</MailType><ValueOfContents>${pkg.value}</ValueOfContents><Country>${order.address.country}</Country><Container>RECTANGULAR</Container>${dimensionNodes}<OriginZip>${process.env.ORIGIN_ZIP_CODE}</OriginZip></Package></IntlRateV2Request>`
}
const createShippingRequestURL = (order: Shipment): URL => {
    const api = isDomestic(order.address.country) ? "RateV4" : "IntlRateV2"
    const xml = createOrderDocument(order)
    const query = `api=${api}&xml=${encodeURIComponent(xml)}`
    return new URL(`${SHIPPING_API_ENDPOINT}?${query}`)
}
const getServiceOptionFromXML = (xml: string): ServiceOption => {
    const responseDoc = new xmldoc.XmlDocument(xml)
    if (responseDoc.name !== "RateV4Response" && responseDoc.name !== "IntlRateV2Response") {
        throw new Error(`Unrecognized response type from USPS: "${responseDoc.name}"`)
    }
    const pkg = responseDoc.childrenNamed("Package").filter(element => element.attr.ID === "1")[0]
    if (!pkg) {
        throw new Error("Unexpected response from USPS.")
    }
    const error = pkg.childNamed("Error")
    if (error) {
        throw new Error(error.childNamed("Description")?.val ?? "Unknown error in USPS response.")
    }
    const [postageElementName, rateElementName, serviceElementName] =
        responseDoc.name === "IntlRateV2Response"
            ? ["Service", "Postage", "SvcDescription"]
            : ["Postage", "Rate", "MailService"]
    const postage = pkg
        .childrenNamed(postageElementName)
        .map<ServiceOption>(element => ({
            rate: Number(element.childNamed(rateElementName)?.val),
            serviceName: element.childNamed(serviceElementName)?.val ?? "",
        }))
        .filter(({ rate, serviceName }) => isFinite(rate) && rate >= 0 && serviceName)
        .reduce<ServiceOption | undefined>((prev, current) => {
            if (!prev || current.rate < prev.rate) {
                return current
            }
            return prev
        }, undefined)
    if (!postage) {
        throw new Error("Could not determine service.")
    }
    return postage
}
const calculateShipping = async (shipment: Shipment): Promise<ServiceOption> => {
    const requestURL = createShippingRequestURL(shipment)
    const response = await axios.get(requestURL.toString())
    return getServiceOptionFromXML(String(response.data))
}
export default calculateShipping
