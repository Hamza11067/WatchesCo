import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="text-white flex justify-between items-center py-6 px-4 bg-black relative">
      <div className="logo font-semibold text-lg">WATCHES&CO</div>

      {/* Hamburger for small screens */}
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Desktop Menu */}
      <ul className="space-x-8 hidden md:flex">
        <li>
          <Link to="/" className="hover:border-b-2 border-white pb-1">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="hover:border-b-2 border-white pb-1">
            Products
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:border-b-2 border-white pb-1">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:border-b-2 border-white pb-1">
            About
          </Link>
        </li>
         <li>
          <Link to="/about" className="hover:border-b-2 border-white pb-1">
            Cart
          </Link>
        </li>
        <li>
          {user ? (
            "Welcome, " + user.firstName
          ) : (
            <Link to="/login" className="hover:border-b-2 border-white pb-1">
              Login
            </Link>
          )}
        </li>
      </ul>

      {/* Mobile Menu with animation */}
      <div
        className={`absolute top-16 left-0 w-full bg-black md:hidden transform transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col space-y-4 py-6 px-4">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={() => setMenuOpen(false)}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            {user ? (
              "Welcome, " + user.firstName
            ) : (
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
