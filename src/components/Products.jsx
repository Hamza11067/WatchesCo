import ProductList from "../components/ProductList";

export default function Products() {
  return (
    <div className="bg-gray-900 text-white py-10 px-4 sm:px-8 md:px-16 min-h-screen">
      <div className="py-10 space-y-2 text-center md:text-left">
        <p className="text-yellow-700 text-sm md:text-base tracking-wide">
          TIMELESS CREATIONS
        </p>
        <h1 className="text-3xl md:text-5xl ">
          DISCOVER WATCHES THAT
        </h1>
        <h1 className="text-3xl md:text-5xl ">
          SPEAK YOUR STYLE
        </h1>
      </div>
      <ProductList />
    </div>
  );
}
