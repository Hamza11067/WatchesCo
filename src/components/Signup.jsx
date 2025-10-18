import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }
    try {
      setIsLoading(true);
      await axios.post(`${API_BASE_URL}/signup`, {
        firstName,
        lastName,
        email,
        password,
      });
      toast.success("Sign Up Successful!");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      toast.error("Sign Up Failed! Please try again.");
      console.error("Sign Up error:", error);
      return;
    } finally {
      setIsLoading(false);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    }

  };
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Sign Up</h1>

      <div className="bg-gray-900 shadow-lg rounded-2xl p-8 w-full max-w-2xl">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              placeholder="John"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Doe"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="jhon@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="text"
              placeholder="John@123"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <p className="text-sm text-gray-500">
            Already registered!{" "}
            <span className="text-white font-semibold">
              <Link to="/login">Login</Link>
            </span>
          </p>
          <p className="text-red-500">{errorMessage}</p>
          <Toaster />
          <button
            type="submit"
            className="w-full active:scale-95 bg-black text-white rounded-lg py-3 text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
            onClick={handleSignup}
          >
           {isLoading? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
