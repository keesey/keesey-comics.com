import { GetServerSideProps, NextPage } from "next";
import RedirectPage from "~/components/RedirectPage";
export const getServerSideProps: GetServerSideProps = async () => ({
    redirect: {
        destination: "//gumroad.com/keesey",
        permanent: false,
    },
})
const Redirect: NextPage = () => (
    <RedirectPage href="//gumroad.com/keesey" title="Gumroad" />
)
export default Redirect
