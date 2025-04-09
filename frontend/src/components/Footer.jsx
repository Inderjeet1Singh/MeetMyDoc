import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16">
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-xs text-gray-400"></div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Column 1: Logo + Description */}
        <div className="flex flex-col gap-4 md:max-w-sm">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-6 h-6" />
            <span className="text-xl font-semibold text-blue-400">
              MeetMyDoc
            </span>
          </div>
          <p className="text-gray-300 text-sm">
            MeetMyDoc connects you with trusted healthcare professionals,
            offering seamless appointment booking and expert care whenever you
            need it.
          </p>
        </div>

        {/* Column 2: Company Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-white">COMPANY</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-300">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact us
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-white">GET IN TOUCH</h3>
          <ul className="text-sm text-gray-300">
            <li>+1-212-456-7890</li>
            <li>greatstackdev@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-xs text-gray-400">
        Copyright © 2024 MeetMyDoc - All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
