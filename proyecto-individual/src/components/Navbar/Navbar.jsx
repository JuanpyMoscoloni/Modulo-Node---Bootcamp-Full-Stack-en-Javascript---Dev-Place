import { Link } from "react-router-dom";
import { useState } from "react";
export default function NavBar() {

  const [nav, setNav] = useState(true);
  

  return (
    <>
    {!nav && (
        <div className="absolute z-10 m-auto flex h-full w-full flex-col items-center justify-center gap-10 overflow-y-hidden bg-white text-5xl text-black">
          <Link  className="text-5xl font-semibold text-gray-700" to="/">
            Home
          </Link>
          <Link className="text-5xl font-semibold text-gray-700" to="/sneakers">
            Sneaker
          </Link>
          <Link className="text-5xl font-semibold text-gray-700" to="/register">
           Register
          </Link>
          <Link className="text-5xl font-semibold text-gray-700" to="/login">
            Login
          </Link>
        </div>
      )}
      <nav className="bg-white shadow-lg fixed w-full z-50 top-0 left-0">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <Link to="/" className="flex items-center py-4 px-2">
                <img
                  src="../public/img/zapatillas.png"
                  alt="Logo"
                  className="h-8 w-8 mr-2"
                />
                <span className="font-semibold text-gray-500 text-lg">SNKR</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-800 transition duration-100"
              >
                Home
              </Link>
              <Link
                to="/sneakers"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-800 transition duration-100"
              >
                Sneaker
              </Link>
              <Link
                to="/register"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-800  transition duration-100"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-800 transition duration-100"
              >
               
                Login
              </Link>
              <Link to="/cart" className="flex items-center py-4 px-2">
                <img
                  src="../public/img/cart.png"
                  alt="Logo"
                  className="h-6 w-6 mr-2"
                />
              </Link>
            </div>

            <div className="md:hidden flex items-center">
              <button className="outline-none menu-button">
                <svg
                onClick={() => setNav(!nav)}
                  className="w-6 h-6 text-gray-500"
                  x-show="! showMenu"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 00 24 24"
                  stroke="black"
                >
                  <path d="m4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>

            <div className="hidden mobile-menu">
              <ul className="">
                <li className="active">
                  <a
                    href="nav.html"
                    className="block text-sm px-2 py-4 text-white bg-purple-500 font-semibold"
                  />
                  Home
                </li>
                <li>
                  <a
                    href="#services"
                    className="block.text-sm.px-2.py-4 hover:bg-purple-500 transition duration-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#About"
                    className="block.text-sm.px-2.py-4 hover:bg-purple-500 transition duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#Contact Us"
                    className="block.text-sm.px-2.py-4 hover:bg-purple-500 transition duration-300"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
