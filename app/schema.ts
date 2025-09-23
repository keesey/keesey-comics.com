import type { Organization } from "schema-dts"
export const KEESEY_COMICS: Organization = {
  "@id": "https://www.keesey-comics.com",
  "@type": "Organization",
  description: "Comics about prehistory and disaster. Sometimes both.",
  email: "keesey+comics@gmail.com",
  logo: "https://www.keesey-comics.com/social/1200x1200.png",
  name: "Keesey Comics",
  subjectOf: [
    { "@id": "https://www.keesey-comics.com/contact" },
    { "@id": "https://www.keesey-comics.com/newsletter" },
  ],
  url: "https://www.keesey-comics.com/",
}
