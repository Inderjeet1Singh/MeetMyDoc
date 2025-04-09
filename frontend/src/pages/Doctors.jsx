import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(
        doctors.filter((doctor) => doctor.speciality === speciality)
      );
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [speciality, doctors]);

  return (
    <div className="px-4 md:px-10 py-6 text-white">
      <p className="text-lg font-medium mb-6 text-white">
        Browse through specialist doctors and book appointments with ease.
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left: Hardcoded Filter Buttons */}
        <div className="md:w-1/4 flex flex-col gap-3">
          {[
            "General physician",
            "Gynecologist",
            "Dermatologist",
            "Pediatricians",
            "Neurologist",
            "Gastroenterologist",
          ].map((item, idx) => (
            <button
              key={idx}
              onClick={() => navigate(`/doctors/${item}`)}
              className={`border px-4 py-2 rounded-md text-sm text-left ${
                speciality === item
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-blue-50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Right: Doctor Cards */}
        <div className="md:w-3/4 w-full grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 pt-4">
          {filterDoc.map((doctor, index) => (
            <div
              key={index}
              onClick={() => navigate(`/appointment/${doctor._id}`)}
              className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-24 h-24 object-cover rounded-full border-4 border-blue-500 shadow-md"
                />
                <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
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
      </div>
    </div>
  );
};

export default Doctors;
