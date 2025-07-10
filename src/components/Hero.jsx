import watch from "/watch.png";
import { FiWatch } from "react-icons/fi";

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
            SHOP NOW
          </button>
          <button className="px-4 py-2 bg-gray-600 font-semibold cursor-pointer  hover:bg-white hover:text-black duration-500 ease-in-out">
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="right">
        <img src={watch} alt="watch" className="h-[30rem]" />
      </div>
    </div>
    {/* customers section */}
    <div className="text-white flex justify-between items-center py-16">
      <div className="left w-96 h-60 bg-gray-700 p-10 space-y-8">
          <FiWatch className="text-2xl text-white" />
          <div className="space-y-1">

          <p>1-YEAR WARRANTY</p>
          <p>ON ALL PRODUCTS</p>
          </div>
          <a href="">LEARN MORE</a>
      </div>
      <div className="right"></div>
    </div>
    </>
  );
};

export default Hero;
