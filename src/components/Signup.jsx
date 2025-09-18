import { useState } from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [firstName, setFirstName] = useState("Tom");
  const [lastName, setLastName] = useState("Cruise");
  const [email, setEmail] = useState("tom@gmail.com");
  const [password, setPassword] = useState("Tom@123");

  const handleSignup = (e) => {
    e.preventDefault();
    
  }
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
            Already registered!{" "}
            <span className="text-yellow-700 font-semibold">
              <Link to="/login">Login In</Link>
            </span>
          </p>

          <button
            type="submit"
            className="w-full bg-black text-white rounded-lg py-3 text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
            onClick={handleSignup}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
