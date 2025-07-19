// src/components/ProductList.jsx
import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/mens-watches")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-[#181818] rounded-lg p-4 shadow-md cursor-pointer"
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full py-2 h-60 object-cover rounded hover:scale-105 transition-transform duration-300"
          />
          <div className="flex justify-between items-center text-white">
            <div>
              <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
              <p className="text-green-600 font-semibold">${product.price}</p>
            </div>
            <FaCartShopping />
          </div>
        </div>
      ))}
    </div>
  );
}
