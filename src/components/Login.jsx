import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
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
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
