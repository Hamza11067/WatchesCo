import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
// import { fetchCart } from "../utils/cartSlice";
import userImage from "/user.png";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const user = useSelector((state) => state.user);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleUser = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

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
          <Link to="/orders" className="hover:border-b-2 border-white pb-1">
            Orders
          </Link>
        </li>
        {user?.role === "admin" && (
          <li>
            <Link
              to="/addproduct"
              className="hover:border-b-2 border-white pb-1"
            >
              Add Product
            </Link>
          </li>
        )}

        <li>
          {user && user.firstName ? (
            <div>
              <Link
                className="hover:border-b-2 border-white pb-1 flex gap-2"
                onClick={handleUser}
              >
                Welcome, {user.firstName}
                <img
                  src={userImage}
                  alt=""
                  className="w-8 -mt-2 rounded-full"
                />
              </Link>
              {isUserMenuOpen && (
                <div className="absolute bg-gray-600 p-4">
                  <p
                    className="hover:underline cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </p>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="hover:border-b-2 border-white pb-1">
              Login
            </Link>
          )}
        </li>
        <li className="relative text-xl border-b-2 border-transparent hover:border-b-2 hover:border-white pb-1">
          <Link to="/cart" className="">
            <FaCartShopping className="" />
            <span className="absolute -top-4 -right-2 bg-red-500 px-1 text-sm rounded">
              {cartCount}
            </span>
          </Link>
        </li>
      </ul>

      {/* Mobile Menu with animation */}
      <Link
        to="/cart"
        className="absolute right-16 top-9 md:hidden "
      >
        <FaCartShopping className="" />
        <span className="absolute -top-4 -right-2 bg-red-500 px-1 text-sm rounded">
          {cartCount}
        </span>
      </Link>
      <div
        className={`absolute top-16 left-0 w-full bg-black md:hidden transform transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col space-y-8 font-semibold py-6 px-4">
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
