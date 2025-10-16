// import { Link } from "react-router-dom";

import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 md:px-8 pt-8 pb-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-2">WatchesCo</h2>
          <p className="text-sm text-gray-400">
            Premium wristwatches designed for timeless elegance.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-400">
            <li>
              <a href="#home" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#collection" className="hover:text-white">
                Collection
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-gray-400 text-xl">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebook />
            </a>
            <a
              href="https://wa.me/447405918231"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="md:text-center text-sm text-gray-500 mt-8">
        © {new Date().getFullYear()} WatchesCo. All rights reserved.
      </div>
      {/* Developer Info */}
      <div className="md:text-center text-sm text-gray-500 mt-2">
        Developed with ❤️ by &nbsp;
        <a
          className="text-green-500 font-semibold cursor-pointer hover:underline"
          href="https://www.linkedin.com/in/hamza-khalid-843781226/"
          target="_blank"
        >
          Hamza Khalid
        </a>
      </div>
    </footer>
  );
};

export default Footer;
