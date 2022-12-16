import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <nav class="bg-white shadow-lg fixed w-full top-0">
        <div class="max-w-6xl mx-auto px-4">
          <div class="flex justify-between">
            <div class="flex space-x-7">
              <NavLink to="/" class="flex items-center py-4 px-2">
                <img
                  src="../public/img/zapatillas.png"
                  alt="Logo"
                  class="h-8 w-8 mr-2"
                />
                <span class="font-semibold text-gray-500 text-lg">SNKR</span>
              </NavLink>
            </div>
            <div class="hidden md:flex items-center space-x-1">
              <a
                href=""
                class="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300"
              >
                Home
              </a>
              <a
                href=""
                class="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300"
              >
                Sneaker
              </a>
              <a
                href=""
                class="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300"
              >
                Register
              </a>
              <NavLink
                to="/login"
                class="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300"
              >
                Login
              </NavLink>
            </div>

            <div class="md:hidden flex items-center">
              <button class="outline-none menu-button">
                <svg
                  class="w-6 h-6 text-gray-500"
                  x-show="! showMenu"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 00 24 24"
                  stroke="currentColor"
                >
                  <path d="m4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>

            <div class="hidden mobile-menu">
              <ul class="">
                <li class="active">
                  <a
                    href="nav.html"
                    class="block text-sm px-2 py-4 text-white bg-purple-500 font-semibold"
                  />
                  Home
                </li>
                <li>
                  <a
                    href="#services"
                    class="block.text-sm.px-2.py-4 hover:bg-purple-500 transition duration-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#About"
                    class="block.text-sm.px-2.py-4 hover:bg-purple-500 transition duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#Contact Us"
                    class="block.text-sm.px-2.py-4 hover:bg-purple-500 transition duration-300"
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
