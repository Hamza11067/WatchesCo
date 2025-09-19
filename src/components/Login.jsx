import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const ContactUs = () => {
  const [email, setEmail] = useState("hamza@gmail.com");
  const [password, setPassword] = useState("Hamza@123");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = await axios.post( `${API_BASE_URL}/login`, {
      email,
      password,
    }, {withCredentials: true});

    console.log(user.data.data);
    dispatch(addUser(user.data.data));

    if (!user) {
      alert("Login Failed! Please try again.");
      return;
    }


    setEmail("");
    setPassword("");
    alert("Login Successful!");
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Login</h1>
      <div className="bg-gray-900 shadow-lg rounded-2xl p-8 w-1/2 max-w-2xl">
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
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
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <p className="text-sm text-gray-500">
            Haven't registered yet!{" "}
            <span className="text-yellow-700 font-semibold">
              <Link to="/signup"> Sign Up</Link>
            </span>
          </p>

          <button
            type="submit"
            className="w-full bg-black text-white rounded-lg py-3 text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
