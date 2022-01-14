import { GetServerSideProps } from "next"
export const getServerSideProps: GetServerSideProps = async () => ({
    redirect: {
        destination: "/images/issues/paleocene/03/front_cover.png",
        permanent: true,
    },
})
const page = () => null
export default page
