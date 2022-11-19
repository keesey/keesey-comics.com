import type { Organization } from "schema-dts"
const KEESEY_COMICS: Organization = {
    "@id": "http://keesey-comics.com",
    "@type": "Project",
    description: "Comics by Mike Keesey, set in prehistoric epochs.",
    email: "keesey+comics@gmail.com",
    logo: "http://keesey-comics.com/social/1200x1200.png",
    name: "Keesey Comics",
    sameAs: ["http://instagram.com/keesey.comics"],
    subjectOf: [{ "@id": "http://keesey-comics.com/contact" }, { "@id": "http://keesey-comics.com/mailinglist" }],
    url: "https://www.keesey-comics.com/",
}
export default KEESEY_COMICS
