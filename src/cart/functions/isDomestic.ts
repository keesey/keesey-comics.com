const isDomestic = (country: string) =>
    country === "United States" ||
    country === "Guam" ||
    country === "Koror (Palau)" ||
    country === "Palau" ||
    country === "Puerto Rico" ||
    country === "Samoa, American" ||
    country === "United Nations, New York" ||
    country === "Virgin Islands (US)" ||
    /American Samoa/.test(country) ||
    /Marshall Islands/.test(country) ||
    /Micronesia/.test(country) ||
    /Northern Mariana Islands/.test(country) ||
    /US Virgin Islands$/.test(country)
export default isDomestic
