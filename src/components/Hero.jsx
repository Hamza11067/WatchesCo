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
      {/* Hero Section */}
      <div className="text-white flex flex-col md:flex-row justify-between items-center px-4 ">
        {/* Left text */}
        <div className="left w-full md:w-1/2 text-center md:text-left">
          <p className="text-yellow-700 text-sm md:text-base">TIMELESS ELEGANCE</p>
          <h1 className="text-3xl md:text-7xl tracking-tight py-1">DISCOVER</h1>
          <h1 className="text-3xl md:text-7xl tracking-tight py-1">WATCHES THAT</h1>
          <h1 className="text-3xl md:text-7xl tracking-tight py-1">DEFINE YOUR</h1>
          <h1 className="text-3xl md:text-7xl tracking-tight py-1">STYLE</h1>
          <div className="buttons py-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/products">
              <button className="px-4 py-2 cursor-pointer bg-white text-black font-semibold hover:bg-black hover:text-white transition-all border border-transparent hover:border-white duration-500 ease-in-out w-full sm:w-auto">
                SHOP NOW
              </button>
            </Link>
            <Link to="/about">
              <button className="px-4 py-2 cursor-pointer bg-gray-600 font-semibold hover:bg-white hover:text-black duration-500 ease-in-out w-full sm:w-auto">
                LEARN MORE
              </button>
            </Link>
          </div>
        </div>

        {/* Right image */}
        <div className="right w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img src={watch} alt="watch" className="h-64 md:h-[30rem] object-contain" />
        </div>
      </div>

      {/* Customers Section */}
      <div className="text-white flex flex-col md:flex-row justify-between items-center py-16 gap-8 px-4">
        {/* Warranty card */}
        <div className="left w-full md:w-96 h-60 bg-[#181818] p-10 space-y-8 relative">
          <FiWatch className="text-2xl text-white" />
          <div className="space-y-1 text-gray-500 text-sm md:text-base">
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
            className="scale-x-[-1] absolute right-0 bottom-0 h-32 md:h-64"
          />
        </div>

        {/* Customers count */}
        <div className="text-center">
          <div className="flex justify-center items-center">
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
          <p className="text-2xl md:text-4xl font-semibold py-3">1000+</p>
          <div className="text-gray-500 text-xs md:text-sm">
            <p>SATISFIED</p>
            <p>CUSTOMERS</p>
          </div>
        </div>

        {/* Video */}
        <video
          autoPlay
          muted
          loop
          className="h-40 md:h-60 rounded-md object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Hero;
