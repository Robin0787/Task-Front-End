import { BsFolder2 } from 'react-icons/bs';
import { CiClock2 } from 'react-icons/ci';
import img1 from "../../assets/img-1.jpg";
import img2 from "../../assets/img-2.jpg";
import img3 from "../../assets/img-3.jpg";
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
            <section className='my-10'>
                <section className='w-full bg-lightBg py-[40px] md:p-[30px] pl-6  md:pl-[92px] rounded-none relative'>
                    <h2 className="quote pt-6 md:pt-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.</h2>
                    <p className="quote-author">Mark Johnson</p>
                </section>
                <div className="mt-7">
                    <p className='text-muted text-justify leading-[27px] w-full'>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always true generator on the Internet free from repetition, injected humour, etc.</p>
                </div>
            </section>
            <section className="flex flex-col md:flex-row justify-between items-center w-full gap-5">
                <div className="w-full md:w-1/2 relative group cursor-pointer">
                    <img src={img2} alt="" className="w-full object-cover h-full "/>
                    <div className="absolute top-0 left-0 h-full w-full bg-[#111111] bg-opacity-0 group-hover:bg-opacity-40 duration-500"></div>
                </div>
                <div className="w-full md:w-1/2 relative group cursor-pointer">
                   <img src={img3} alt="" className="w-full object-cover h-full"/>
                   <div className="absolute top-0 left-0 h-full w-full bg-[#111111] bg-opacity-0 group-hover:bg-opacity-40 duration-500"></div>
                </div>
            </section>
            <section className='mt-10 flex flex-col md:flex-row justify-start items-start md:justify-between md:items-center gap-5'>
                <div className="flex justify-start items-center gap-[10px]">
                    <button className="px-5 py-[6px] text-[15px] text-muted hover:text-white bg-[#2c3238] hover:bg-btnBg duration-300">daily</button>
                    <button className="px-5 py-[6px] text-[15px] text-muted hover:text-white bg-[#2c3238] hover:bg-btnBg duration-300">desserts</button>
                    <button className="px-5 py-[6px] text-[15px] text-muted hover:text-white bg-[#2c3238] hover:bg-btnBg duration-300">food</button>
                </div>
                <div>
                    <p className="text-muted">Comments (0)</p>
                </div>
            </section>
            <section className="mt-10">
                <section className="">

                </section>
            </section>
        </section>
    );
};

export default Introduction;