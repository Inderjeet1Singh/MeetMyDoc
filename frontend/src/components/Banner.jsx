import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="my-3 flex flex-col md:flex-row rounded-2xl px-6 md:px-10 overflow-hidden">
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          One account. 100+ trusted doctors. Get started in seconds.
        </h1>

        <p className="text-gray-200 text-sm md:text-base font-light">
          "Seamless appointments, trusted specialists, and care that fits your
          schedule."
        </p>

        <button
          onClick={() => {
            navigate("/signup");
            scrollTo(0, 0);
          }}
          className="mt-4 inline-flex items-center gap-2 bg-blue-500 text-white font-semibold px-5 py-2 rounded-full hover:scale-105 transition"
        >
          Create Account
        </button>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 flex justify-end items-end pr-10 md:pr-12">
        <img
          className="w-full max-w-md md:max-w-none object-cover self-end"
          src={assets.appointment_img}
          alt="appointment"
        />
      </div>
    </div>
  );
};

export default Banner;
