import axios from "axios";
import OUNCES_PER_POUND from "../constants/OUNCES_PER_POUND";
import { ServiceOption } from "../models/ServiceOption";
import { Shipment } from "../models/Shipment";
const isDomestic = (country: string) =>
    country === 'United States'
    || country === 'Guam'
    || country === 'Koror (Palau)'
    || country === 'Palau'
    || country === 'Puerto Rico'
    || country === 'Samoa, American'
    || country === 'United Nations, New York'
    || country === 'Virgin Islands (US)'
    || /American Samoa/.test(country)
    || /Marshall Islands/.test(country)
    || /Micronesia/.test(country)
    || /Northern Mariana Islands/.test(country)
    || /US Virgin Islands$/.test(country)
    ;
const MIN_LARGE_DIMENSION = 12;
const REVISION_NODE = '<Revision>2</Revision>';
const PACKAGE_OPENING_TAG = '<Package ID="1">';
const SHIPPING_API_ENDPOINT = 'http://production.shippingapis.com/ShippingAPI.dll';
const createOrderDocument = (order: Shipment) => {
    const pkg = order.package;
    const dimensions = [...pkg.dimensions].sort();
    const size = dimensions.some(x => x > MIN_LARGE_DIMENSION) ? 'LARGE' : 'REGULAR';
    const [width, length, height] = pkg.dimensions;
    const girth = 2 * (width + height);
    const dimensionNodes = `<Size>${size}</Size><Width>${width}</Width><Length>${length}</Length><Height>${height}</Height><Girth>${girth}</Girth>`;
    const pounds = Math.floor(pkg.ounces / OUNCES_PER_POUND)
    const ounces = Math.ceil(pkg.ounces - pounds * OUNCES_PER_POUND)
    const weightNodes = `<Pounds>${pounds}</Pounds><Ounces>${ounces}</Ounces>`;
    return isDomestic(order.address.country)
        ? `<RateV4Request USERID="${process.env.USPS_USER_ID}">${REVISION_NODE}${PACKAGE_OPENING_TAG}<Service>MEDIA</Service><ZipOrigination>${process.env.ORIGIN_ZIP_CODE}</ZipOrigination><ZipDestination>${order.address.postalCode}</ZipDestination>${weightNodes}<Container>VARIABLE</Container>${dimensionNodes}<Value>${pkg.value}</Value></Package></RateV4Request>`
        : `<IntlRateV2Request USERID="${process.env.USPS_USER_ID}">${REVISION_NODE}${PACKAGE_OPENING_TAG}${weightNodes}<MailType>PACKAGE</MailType><ValueOfContents>${pkg.value}</ValueOfContents><Country>${order.address.country}</Country><Container>RECTANGULAR</Container>${dimensionNodes}<OriginZip>${process.env.ORIGIN_POSTAL_CODE}</OriginZip></Package></IntlRateV2Request>`;
};
const createShippingRequestURL = (order: Shipment): URL => {
    const api = isDomestic(order.address.country) ? 'RateV4' : 'IntlRateV2';
    const xml = createOrderDocument(order);
    const query = `api=${api}&xml=${encodeURIComponent(xml)}`;
    return new URL(`${SHIPPING_API_ENDPOINT}?${query}`);
};
const getServiceOptionFromXML = (xml: string): ServiceOption => {
    const responseDoc = new DOMParser().parseFromString(xml, 'text/xml');
    const errors = responseDoc.getElementsByTagName('Error');
    if (errors.length > 0) {
        throw new Error(errors.item(0)?.getElementsByTagName('Description')?.item(0)?.textContent || "Unknown error in USPS response.");
    }
    const responseName = responseDoc.documentElement.nodeName;
    switch (responseName) {
        case 'RateV4Response': {
            const rateList = responseDoc.getElementsByTagName('Rate');
            if (rateList.length !== 1) {
                throw new Error(`Unexpected number of shipping rates: ${rateList.length}.`);
            }
            const postageText = rateList.item(0)?.textContent;
            const postage = Number(postageText);
            if (isNaN(postage) || postage <= 0) {
                throw new Error(`Invalid shipping rate: "${postageText}".`);
            }
            return {
                postage,
                serviceName: 'Media Mail® Parcel',
            };
        }
        case 'IntlRateV2Response': {
            const serviceElements = responseDoc.getElementsByTagName('Service');
            const serviceOptions: ServiceOption[] = [];
            for (const serviceElement of serviceElements) {
                const postage = Number(serviceElement.getElementsByTagName('Postage').item(0)?.textContent);
                const serviceName = serviceElement.getElementsByTagName('SvcDescription').item(0)?.textContent;
                if (serviceName && postage > 0) {
                    const span = document.createElement('span');
                    span.innerHTML = serviceName;
                    serviceOptions.push({
                        postage,
                        serviceName: span.innerText,
                    });
                }
            }
            const service = serviceOptions.reduce<ServiceOption | undefined>(
                (prev, option) => {
                    if (!prev || option.postage < prev.postage) {
                        return option;
                    }
                    return prev;
                },
                undefined,
            );
            if (!service) {
                throw new Error('Could not determine service.');
            }
            return service;
        }
        default: {
            throw new Error(`Unknown shipping response: "${responseName}".`);
        }
    }
};
const calculateShipping = async (order: Shipment): Promise<ServiceOption> => {
    const requestURL = createShippingRequestURL(order);
    const response = await axios.get(requestURL.toString());
    return getServiceOptionFromXML(String(response.data));
};
export default calculateShipping;
