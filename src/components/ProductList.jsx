import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../utils/constants";
import { addProducts } from "../utils/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const productsFromStore = useSelector((store) => store.product);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    if (!productsFromStore) {
      const fetchProducts = async () => {
        const res = await axios.get(`${API_BASE_URL}/products`);
        setProducts(res.data.data);
        dispatch(addProducts(res.data.data));
      };
      fetchProducts();
    } else {
      setProducts(productsFromStore);
    }
  }, [productsFromStore, dispatch]);

  const handleAddToCart = () => {
    if (!user) {
      alert("Please login to add items to cart.");
      return;
    }
    dispatch(
      addToCart({ userId: user?._id, productId: products[0]?._id, quantity: 1 })
    );
  };

  const deleteProduct = async (product) => {
    const confirmDelete = window.confirm("Are you sure?");
    if (!confirmDelete) return;
    try {
      await axios.delete(`${API_BASE_URL}/deleteproduct/${product._id}`);
      alert("Product deleted successfully");
      setProducts(products.filter((p) => p._id !== product._id));

    } catch (error) {
      alert("Error deleting product");
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4">
      {products &&
        products.map((product) => (
          <div
            key={product?._id}
            className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer"
          >
            <Link to={`/product/${product._id}`}>
              <img
                src={product.photoUrl}
                alt={product.name}
                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <div className="text-black px-3 py-2 space-y-2">
              <h2 className="text-lg font-bold mt-2">{product.name}</h2>
              <div className="flex justify-items-start items-center gap-2">
                <p className="font-semibold text-xl">Rs.{product.price}</p>
                <p className="font-semibold text-xl text-red-600 line-through">
                  Rs.{(product.price * 1.2).toFixed(0)}
                </p>
                {user?.role === "admin" && (
                  <>
                    <span className="text-white bg-green-500 hover:bg-green-600 p-1 rounded">
                      <MdEdit />
                    </span>
                    <span
                      className="text-white bg-red-500 hover:bg-red-600 p-1 rounded"
                      onClick={() => deleteProduct(product)}
                    >
                      <FaTrash />
                    </span>
                  </>
                )}
              </div>
              <button
                onClick={handleAddToCart}
                className="bg-black text-white text-lg font-semibold  w-full p-3 rounded-lg cursor-pointer hover:bg-red-600 hover:text-black transition-colors duration-300"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
