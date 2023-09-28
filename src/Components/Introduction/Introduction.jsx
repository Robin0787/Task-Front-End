import { BsFolder2 } from 'react-icons/bs';
import { CiClock2 } from 'react-icons/ci';
import img1 from "../../assets/img-1.jpg";
import man from "../../assets/man.png";

const Introduction = () => {
    return (
        <section className="text-white">
            <h1 className="text-[50px] leading-[59px] font-bold font-Themify mb-4">Things to Know When Choosing Foods</h1>
            <div className="flex justify-start items-center gap-5 border-b border-[#a0abb446] pb-10">
                <div className="flex justify-start items-center gap-3">
                    <img src={man} alt="man" className="w-5 h-5 object-cover object-center rounded-full"/>
                    <a href="#" className="menu-link text-muted text-[15px]">Restont</a>
                </div>
                <div className="flex justify-start items-center gap-3">
                    <CiClock2 size={20} className="text-[#c59d5f]"/>
                    <a href="#" className="menu-link text-muted text-[15px]">April 19, 2022</a>
                </div>
                <div className="flex justify-start items-center gap-3">
                    <BsFolder2 size={20} className="text-[#c59d5f]"/>
                    <a href="#" className="menu-link text-muted text-[15px]">Daily Menu</a>
                </div>
            </div>
            <section className='mt-10 space-y-6'>
                    <img src={img1} alt="img" className='object-cover h-full w-full md:w-[700px] mx-auto'/>
                    <p className='text-muted text-justify leading-[27px] w-full'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p className='text-muted text-justify leading-[27px] w-full'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p className='text-muted text-justify leading-[27px] w-full'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution {" "}
                    <span className='text-[#c59d5f] underline'>letraset sheets</span>{" "}
                    of letters, as opposed to using ‘Content here, content here’, point of using Lorem Ipsum is that it has a more-or-less making it look like readable English.</p>
            </section>
            <section className='mt-10'>
                <section className='w-full py-5 bg-lightBg'>
                    <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.</h2>
                </section>
            </section>
        </section>
    );
};

export default Introduction;