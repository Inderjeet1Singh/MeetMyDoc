import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <section className="px-6 md:px-20 py-16 bg-black text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-wide">
          About <span className="text-blue-500">Us</span>
        </h2>
        <p className="text-gray-400 mt-2 text-sm">
          Connecting patients with trusted doctors for better, faster
          healthcare.
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center gap-12 max-w-7xl mx-auto">
        {/* Text Section */}
        <div className="md:flex-1 space-y-6 text-gray-200">
          <p>
            Our platform helps patients find and book appointments with
            qualified and experienced doctors near them. We aim to simplify the
            process of scheduling in-person consultations with the right
            healthcare professionals.
          </p>

          <p>
            With a wide network of verified doctors across various specialties,
            we ensure you get the care you need — quickly, conveniently, and
            confidently.
          </p>

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Our Vision
            </h3>
            <p>
              To make quality healthcare more accessible by streamlining the
              appointment booking process and helping patients connect with the
              right doctors for their needs. We’re building a future where
              healthcare is simpler, smarter, and stress-free.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:flex-1 w-full">
          <img
            src={assets.about_img}
            alt="About Us"
            className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
