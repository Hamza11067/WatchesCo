import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    try {
      setIsLoading(true);
      const user = await axios.post(
        `${API_BASE_URL}/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      toast.success("Login Successful!");
      dispatch(addUser(user.data.data));
      
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      toast.error("Login Failed! Please try again.");
      console.error("Login error:", error);
      return;
    } finally {
      setEmail("");
      setPassword("");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Login</h1>
      <div className="bg-gray-900 shadow-lg rounded-2xl p-8 md:w-1/2 max-w-2xl">
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
              type="text"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <p className="text-sm text-gray-500">
            Not a user!{" "}
            <span className="text-white font-semibold">
              <Link to="/signup"> Sign Up</Link>
            </span>
          </p>
          <p className="text-red-500">{errorMessage}</p>
          <Toaster />
          <button
            type="submit"
            className="w-full active:scale-95 bg-black text-white rounded-lg py-3 text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
            onClick={handleLogin}
          >
            {isLoading ? "Logging In..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
