import type { Organization } from "schema-dts"
const KEESEY_COMICS: Organization = {
    "@id": "https://www.keesey-comics.com",
    "@type": "Organization",
    description: "Comics about prehistory and disaster. Sometimes both.",
    email: "keesey+comics@gmail.com",
    logo: "https://www.keesey-comics.com/social/1200x1200.png",
    name: "Keesey Comics",
    sameAs: ["https://www.instagram.com/keesey.comics/"],
    subjectOf: [
        { "@id": "https://www.keesey-comics.com/contact" },
        { "@id": "https://www.keesey-comics.com/mailinglist" },
    ],
    url: "https://www.keesey-comics.com/",
}
export default KEESEY_COMICS
