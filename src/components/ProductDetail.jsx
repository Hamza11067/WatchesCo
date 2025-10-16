import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../utils/constants";


function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/product/${id}`);
        setProduct(response.data.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-100"></div>
      </div>
    );

  if (!product)
    return (
      <div className="text-center py-10 text-gray-600">
        Product not found.
      </div>
    );

  return (
    <div className="mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.photoUrl}
            alt={product.name}
            className="w-full rounded-2xl shadow-xl hover:scale-102 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-500 mb-6 leading-relaxed">
            {product.description}
          </p>

          <div className="flex items-center justify-between mb-6">
            <span className="text-3xl font-semibold text-emerald-600">
              Rs.{product.price}
            </span>
            {/* {product.inStock ? ( */}
              <span className="text-sm bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full">
                In Stock
              </span>
            {/* ) : (
              <span className="text-sm bg-red-100 text-red-600 px-3 py-1 rounded-full">
                Out of Stock
              </span>
            )} */}
          </div>

          <button
            className="w-full md:w-auto bg-emerald-600 cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition"
            disabled={!product.inStock}
          >
            Add to Cart
          </button>

          <div className="mt-8 border-t pt-6 text-sm text-gray-600 space-y-2">
            <p>• Free shipping on orders over Rs.10000</p>
            <p>• 7-days return policy</p>
            <p>• 1-month warranty included</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
