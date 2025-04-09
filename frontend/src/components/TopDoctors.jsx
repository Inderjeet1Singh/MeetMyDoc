import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  return (
    <section className="flex flex-col items-center gap-6 my-20 px-6 md:px-12 text-white">
      <h2 className="text-4xl font-bold text-center leading-tight">
        Top Doctors to Book
      </h2>
      <p className="max-w-2xl text-center text-gray-300 text-base">
        Explore highly-rated professionals and book appointments with ease.
      </p>

      <div className="w-full grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 pt-10">
        {doctors.slice(0, 8).map((doctor, index) => (
          <div
            onClick={() =>{ navigate(`/appointment/${doctor._id}`); scrollTo(0, 0);}}
            key={index}
            className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-24 h-24 object-cover rounded-full border-4 border-blue-500 shadow-md"
              />
              <div className="flex items-center gap-2 text-green-400 text-sm font-medium ">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Available
              </div>
              <h3 className="text-lg font-semibold text-white">
                {doctor.name}
              </h3>
              <p className="text-sm text-gray-400">{doctor.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className="mt-12 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300"
      >
        View More Doctors
      </button>
    </section>
  );
};

export default TopDoctors;
