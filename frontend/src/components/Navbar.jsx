import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo/logo.jpg";
import { assets } from "../assets/assets";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [token, setToken] = useState(true);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-white px-4 py-3 border-b border-gray-300">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="logo" className="h-10 w-auto" />
          <span className="text-2xl font-bold text-red-600">MeetMyDoc</span>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Nav links on desktop */}
        <ul className="hidden md:flex items-center space-x-6 font-medium text-gray-700">
          <li>
            <NavLink to="/" className="hover:text-blue-600 transition">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/doctors" className="hover:text-blue-600 transition">
              Doctors
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-blue-600 transition">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-blue-600 transition">
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Sign Up Button on desktop */}
        <div className="hidden md:block">
          {token ? (
            <div className="flex items-center  gap-2 cursor-pointer group relative">
              <img
                className="w-8 rounded-full"
                src={assets.profile_pic}
                alt="user"
              />
              <img className="w-2.5" src={assets.dropdown_icon} alt="user" />
              <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block ">
                <div className="min-w-48 bg-stone-100 rounded-lg shadow-lg p-4 flex flex-col gap-2">
                  <p
                    onClick={() => navigate("/my-profile")}
                    className="hover:text-black cursor-pointer"
                  >
                    My Profile
                  </p>
                  <p
                    onClick={() => navigate("/my-appointments")}
                    className="hover:text-black cursor-pointer"
                  >
                    My Appointment
                  </p>
                  <p
                    onClick={() => setToken(false)}
                    className="hover:text-black cursor-pointer"
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-3 font-medium text-gray-700">
          <NavLink
            to="/"
            onClick={toggleMenu}
            className="hover:text-blue-600 transition"
          >
            Home
          </NavLink>
          <NavLink
            to="/doctors"
            onClick={toggleMenu}
            className="hover:text-blue-600 transition"
          >
            Doctors
          </NavLink>
          <NavLink
            to="/about"
            onClick={toggleMenu}
            className="hover:text-blue-600 transition"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={toggleMenu}
            className="hover:text-blue-600 transition"
          >
            Contact Us
          </NavLink>
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition w-fit"
          >
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
