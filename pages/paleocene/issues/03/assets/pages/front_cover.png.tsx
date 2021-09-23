import { GetStaticProps } from "next";
export const getStaticProps: GetStaticProps = () => ({
    redirect: {
        destination: "/images/issues/paleocene/03/front_cover.png",
        permanent: true,
    },
})
const page = () => null
export default page
