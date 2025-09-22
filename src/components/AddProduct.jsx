import axios from "axios";
import { useState } from "react";
import { API_BASE_URL } from "../utils/constants";
import { FaCartShopping } from "react-icons/fa6";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  const addProduct = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("photo", photoUrl);

      const product = await axios.post(`${API_BASE_URL}/addproduct`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(product.data.data);
    } catch (error) {
      console.log(error);
      alert("Error adding product");
      return;
    }

    setName("");
    setPrice("");
    setDescription("");
    setPhotoUrl("");
    alert("Product Added Successfully!");
  };

  return (
    <div className="flex justify-around items-start gap-10 py-4">
      <div className="min-h-screen w-2/3 bg-black text-white flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-8">Add Product</h1>

        <div className="bg-gray-900 shadow-lg rounded-2xl p-8 w-full max-w-2xl">
          <form className="space-y-6">
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
                Picture Url
              </label>
              <input
                type="file"
                accept="image/*"
                placeholder="http://example.com/pic.jpg"
                // value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.files[0])}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white rounded-lg py-3 text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
              onClick={addProduct}
            >
              Add Product
            </button>
          </form>
        </div>
      </div>

      {/* Product Preview */}
      <div className="w-1/3">
        <h1 className="text-4xl font-bold text-center mb-8">Preview</h1>
        <div className="bg-[#181818] rounded-lg p-4 shadow-md cursor-pointer">
          <img
    
            src={photoUrl ? URL.createObjectURL(photoUrl) : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtW0E3itYQnQDbmonHfcbJ5Kvfi_Ke7QOG_w&s"}
            alt={name}
            className="w-full py-2 h-60 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
          />
          <div className="flex justify-between items-center text-white">
            <div>
              <h2 className="text-lg font-semibold mt-2">{name}</h2>
              <p className="text-gray-100 font-bold">Rs.{price}</p>
            </div>
            <FaCartShopping />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
