import ProductList from "../components/ProductList";

export default function Products() {
  return (
    <div className="bg-gray-900 text-white py-10 -mx-16 px-16 min-h-screen">
      <div className="py-10 space-y-2">
        <p className="text-yellow-700">TIMELESS CREATIONS</p>
        <h1 className="text-5xl">DISCOVER WATCHES THAT</h1>
        <h1 className="text-5xl">SPEAK YOUR STYLE</h1>
      </div>
      <ProductList />
      {/* <div className="text-center mt-10">
        <button className="px-4 py-2 bg-white text-black font-semibold cursor-pointer hover:bg-black hover:text-white transition-all border-[1px] border-transparent hover:border-white duration-500 ease-in-out">
          View All Products
        </button>
      </div> */}
    </div>
  );
}
