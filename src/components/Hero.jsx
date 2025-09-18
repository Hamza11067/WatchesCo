import watch from "/watch.png";
import man from "/man.png";
import { FiWatch } from "react-icons/fi";
import customer1 from "/customer1.jpg";
import customer2 from "/customer2.jpg";
import video from "/video.mp4";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="text-white flex justify-between items-center">
        <div className="left w-1/2">
          <p className="text-yellow-700">TIMELESS ELEGANCE</p>
          <h1 className="text-7xl tracking-tight py-1">DISCOVER</h1>
          <h1 className="text-7xl tracking-tight py-1">WATCHES THAT</h1>
          <h1 className="text-7xl tracking-tight py-1">DEFINE YOUR</h1>
          <h1 className="text-7xl tracking-tight py-1">STYLE</h1>
          <div className="buttons py-4 space-x-6">
            <button className="px-4 py-2 bg-white text-black font-semibold cursor-pointer hover:bg-black hover:text-white transition-all border-[1px] border-transparent hover:border-white duration-500 ease-in-out">
              <Link to="/products">SHOP NOW</Link>
            </button>
            <button className="px-4 py-2 bg-gray-600 font-semibold cursor-pointer  hover:bg-white hover:text-black duration-500 ease-in-out">
              <Link to="/about">LEARN MORE</Link>
            </button>
          </div>
        </div>
        <div className="right">
          <img src={watch} alt="watch" className="h-[30rem]" />
        </div>
      </div>
      {/* customers section */}
      <div className="text-white flex justify-between items-center py-16">
        <div className="left w-96 h-60 bg-[#181818] p-10 space-y-8 relative">
          <FiWatch className="text-2xl text-white" />
          <div className="space-y-1 text-gray-500">
            <p>1-YEAR WARRANTY</p>
            <p>ON ALL PRODUCTS</p>
          </div>
          <a
            href="#"
            className="pb-1 border-b-2 border-transparent hover:border-white"
          >
            LEARN MORE
          </a>
          <img
            src={man}
            alt=""
            className="scale-x-[-1] absolute right-0 bottom-0 h-64"
          />
        </div>
        <div className="">
          <div className="flex justify-between items-center ">
            <div className="h-16 w-16 rounded-full border-4 border-black overflow-hidden">
              <img
                src={customer1}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="h-16 w-16 rounded-full -translate-x-6 border-4 border-black overflow-hidden">
              <img
                src={customer2}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <div className="text-center">
            <p className="text-4xl font-semibold py-3">1000+</p>
            <div className="text-gray-500 text-sm">
              <p>SATISFIED</p>
              <p>CUSTOMERS</p>
            </div>
            <div className="flex flex-col justify-center items-center -mt-15  translate-y-18">
              <div className="w-2 h-2 rounded-full bg-white" />
              <div className="w-[1px] h-26 violet-gradient bg-white" />
            </div>
          </div>
        </div>
        <video autoplay muted loop class="h-60">
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Hero;
