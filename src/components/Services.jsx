const Services = () => {
  return (
    <>
      <div className="py-10 space-y-2">
        <p className="text-yellow-700">YOUR WATCH, OUR EXPERTIES</p>
        <h1 className="text-5xl">DISCOVER THE PERFECT WATCH</h1>
        <h1 className="text-5xl">DESIGNED FOR YOU</h1>
      </div>
      <div className="py-10 space-y-16">
        <div className="flex justify-between items-center space-x-16">
          <div className="h-[30rem] w-[50%] ">
            <img
              src="/Services-1.jpg"
              alt="Service Image"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
          <div className="h-[30rem] w-[50%] ">
            <img
              src="/Services-2.jpg"
              alt="Service Image"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="flex justify-between items-center space-x-16">
          <div className="h-[30rem] w-[50%] ">
            <img
              src="/Services-3.jpg"
              alt="Service Image"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
          <div className="h-[30rem] w-[50%] ">
            <img
              src="/Services-4.jpg"
              alt="Service Image"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <button className="px-4 py-2 bg-white text-black font-semibold cursor-pointer hover:bg-black hover:text-white transition-all border-[1px] border-transparent hover:border-white duration-500 ease-in-out">
          Explore Our Services
        </button>
      </div>
    </>
  );
};

export default Services;
