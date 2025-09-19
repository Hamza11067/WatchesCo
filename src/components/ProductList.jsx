import axios from "axios";
import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { API_BASE_URL } from "../utils/constants";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(`${API_BASE_URL}/products`);
      setProducts(res.data.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-4">
      {products &&
        products.map((product) => (
          <div
            key={product._id}
            className="bg-[#181818] rounded-lg p-4 shadow-md cursor-pointer"
          >
            <img
              src={product.photoUrl}
              alt={product.name}
              className="w-full py-2 h-60 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            />
            <div className="flex justify-between items-center text-white">
              <div>
                <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
                <p className="text-green-600 font-semibold">${product.price}</p>
              </div>
              <FaCartShopping />
            </div>
          </div>
        ))}
    </div>
  );
}
