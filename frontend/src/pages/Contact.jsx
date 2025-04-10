import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <section className="px-6 md:px-20 py-16 bg-black text-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-wide">
          Contact <span className="text-blue-500">Us</span>
        </h2>
        <p className="text-gray-400 mt-2 text-sm">
          We'd love to hear from you. Reach out with any questions or ideas!
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-4xl mx-auto">
        {/* Contact Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={assets.contact_image}
            alt="Contact Us"
            className="rounded-xl shadow-lg w-full max-w-[300px] mx-auto"
          />
        </div>

        {/* Office Info */}
        <div className="md:w-1/2 w-full text-left space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Our Office
            </h3>
            <p className="text-gray-300">
              763437 Wiillms Station <br /> Suite 353, Washington
            </p>
          </div>

          <div>
            <p className="text-gray-400">
              <strong className="text-white">Tel:</strong> (234) 6379-3528
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold">Careers at MeetMyDoc</h4>
            <p className="text-gray-400 text-sm">
              Want to join our mission to simplify healthcare? We’re always
              looking for great talent!
            </p>
          </div>

          <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow-md transition-all duration-300">
            Save Contact Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
