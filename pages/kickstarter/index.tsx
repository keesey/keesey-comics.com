import { GetServerSideProps, NextPage } from "next";
import RedirectPage from "~/components/RedirectPage";
export const getServerSideProps: GetServerSideProps = async () => ({
    redirect: {
        destination: "//www.kickstarter.com/projects/keesey/paleocene-3-comic-book",
        permanent: true,
    },
})
const Redirect: NextPage = () => (
    <RedirectPage href="//www.kickstarter.com/projects/keesey/paleocene-3-comic-book" title="Kickstarter" />
)
export default Redirect
