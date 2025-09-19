import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="text-white flex justify-between items-center py-6">
      <div className="logo font-semibold">WATCHES&CO</div>
      <ul className="flex space-x-8">
        <li className="cursor-pointer pb-1 border-transparent border-b-2 hover:border-white transition-all duration-300 ease-in-out ">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer pb-1 border-transparent border-b-2 hover:border-white transition-all duration-300 ease-in-out">
          <Link to="/products">Products</Link>
        </li>
        <li className="cursor-pointer pb-1 border-transparent border-b-2 hover:border-white transition-all duration-300 ease-in-out">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="cursor-pointer pb-1 border-transparent border-b-2 hover:border-white transition-all duration-300 ease-in-out">
          <Link to="/about">About</Link>
        </li>
        <li className="cursor-pointer pb-1 border-transparent border-b-2 hover:border-white transition-all duration-300 ease-in-out">
          {user ? "Welcome, " + user.firstName : <Link to="/login">Login</Link>}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
