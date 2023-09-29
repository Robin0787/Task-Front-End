
import Banner from "../../Components/Banner/Banner";
import Container from "../../Components/Container/Container";
import Introduction from "../../Components/Introduction/Introduction";
import RightPart from "../../Components/RightPart/RightPart";


const Home = () => {
    return (
        <>
            <Banner />
            <section className="py-[100px] w-full">
                <Container>
                    <section className="w-full h-full flex flex-col lg:flex-row justify-between items-start gap-12">
                        <section className="w-full lg:w-[67%]">
                            <Introduction />
                        </section>
                        <section className="w-full lg:w-[33%]">
                            <RightPart />
                        </section>
                    </section>
                </Container>
            </section>
        </>
    );
};

export default Home;