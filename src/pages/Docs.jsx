import SectionHeader from "../components/SectionHeader";
import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Docs = () => {
    return (
        <>
        <Header />
            <section className="bg-muted">
                <Container>
                        <SectionHeader title={"Everything you need to build beautiful hero sections."} subtitle={"Get started by reading the docs"} theme="muted"/>

                </Container>
            </section>
        <Footer />
        </>
    );
}

export default Docs;