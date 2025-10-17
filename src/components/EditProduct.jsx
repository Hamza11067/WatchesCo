import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  // Fetch existing product details when page loads
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/product/${id}`);
        const product = res.data.data;
        setName(product.name);
        setPrice(product.price);
        setDescription(product.description);
        setPhotoUrl(product.photoUrl); // string URL
      } catch (err) {
        console.error(err);
        alert("Failed to load product details");
      }
    };
    fetchProduct();
  }, [id]);

  // Handle update
  const updateProduct = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("description", description);
      if (photoUrl instanceof File) {
        formData.append("photo", photoUrl);
      }

      const res = await axios.patch(`${API_BASE_URL}/editproduct/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(res.data.data);
      alert("Product updated successfully!");
      navigate("/");
      
    } catch (error) {
      console.error(error);
      alert("Error updating product");
    }
  };

  return (
    <div className="flex justify-around items-start gap-10 py-4">
      <div className="min-h-screen w-2/3 bg-black text-white flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-8">Edit Product</h1>

        <div className="bg-gray-900 shadow-lg rounded-2xl p-8 w-full max-w-2xl">
          <form className="space-y-6" onSubmit={updateProduct}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Tomi"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price
              </label>
              <input
                type="number"
                placeholder="3000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                rows="4"
                placeholder="Write detail about the product..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-black"
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Image
              </label>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={(e) => setPhotoUrl(e.target.files[0])}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white rounded-lg py-3 text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
            >
              Update Product
            </button>
          </form>
        </div>
      </div>

      {/* Product Preview */}
      <div className="w-1/3">
        <h1 className="text-4xl font-bold text-center mb-8">Preview</h1>
        <div className="w-72 bg-white rounded-lg overflow-hidden shadow-md cursor-pointer">
          <img
            src={
              photoUrl
                ? photoUrl instanceof File
                  ? URL.createObjectURL(photoUrl)
                  : photoUrl
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtW0E3itYQnQDbmonHfcbJ5Kvfi_Ke7QOG_w&s"
            }
            alt={name}
            className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="text-black px-3 py-2 space-y-2">
            <h2 className="text-lg font-bold mt-2">{name || "Product Name"}</h2>
            <div className="flex justify-items-start items-center gap-2">
              <p className="font-semibold text-xl">Rs.{price}</p>
              {price && (
                <p className="font-semibold text-xl text-red-600 line-through">
                  Rs.{(price * 1.2).toFixed(0)}
                </p>
              )}
            </div>
            <button className="bg-black text-white text-lg font-semibold w-full p-3 rounded-lg cursor-pointer hover:bg-red-600 hover:text-black transition-colors duration-300">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
