import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="my-3 flex flex-col md:flex-row bg-blue-500 rounded-lg px-6 md:px-10 overflow-hidden">
      {/* Left side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10">
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
          Book Appointment <br />
          With Trusted Doctors
        </p>

        {/* Profile group image and description */}
        <div className="flext flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img className="w-28" src={assets.group_profiles} alt="group-photo" />
          <p className="mt-2 text-white text-sm">
            Simply browse through our extensive list of trusted doctors,
            <br className="hidden sm:block" />
          </p>
        </div>

        {/* CTA Button */}
        <a
          href="#speciality"
          className="mt-4 inline-flex items-center gap-2 bg-white text-blue-600 font-medium px-5 py-2 rounded-full hover:scale-105 transition"
        >
          Book Appointment
          <img src={assets.arrow_icon} alt="arrow" className="w-4 h-4" />
        </a>
      </div>

      {/* Right side - Header Image */}
      <div className="md:w-1/2 flex justify-center items-end">
        <img
          className="w-full max-w-md md:max-w-none object-cover self-end"
          src={assets.header_img}
          alt="header"
        />
      </div>
    </div>
  );
};

export default Header;
