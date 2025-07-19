/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    redirects: () => [
        {
            source: "/mailinglist",
            destination: "/newsletter",
            permanent: true,
        },
    ],
}
