import axios from "axios";
import { useState } from "react";
import { API_BASE_URL } from "../utils/constants";

const ContactUs = () => {
  const [name, setName] = useState("Tomi");
  const [price, setPrice] = useState("3000");
  const [description, setDescription] = useState("Lo gay to pta chal jaye ga");
  const [photoUrl, setPhotoUrl] = useState(
    "https://tomiwatches.pk/cdn/shop/files/IMG-7645.jpg?v=1750676699"
  );

  const addProduct = async (e) => {
    e.preventDefault();

    try {
      const product = await axios.post(`${API_BASE_URL}/addproduct`, {
        name,
        price,
        description,
        photoUrl,
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
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-10">
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
              type="text"
              placeholder="http://example.com/pic.jpg"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
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
  );
};

export default ContactUs;
