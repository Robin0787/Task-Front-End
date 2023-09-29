import FooterBg from "../../assets/footer-bg.png";

const Footer = () => {
    return (
        <section className="bg-lightBg py-40" >
            <div className="h-[50vh]" style={{backgroundImage: `url(${FooterBg})`}}></div>
        </section>
    );
};

export default Footer;