import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const RelatedDoctors = ({ docId, speciality }) => {
  const { doctors } = useContext(AppContext);
  const [relDoc, setRelDoc] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doctor) => doctor.speciality === speciality && doctor._id !== docId
      );
      setRelDoc(doctorsData);
    }
  }, [doctors, speciality, docId]);

  return (
    <section className="flex flex-col items-center gap-6 my-20 px-6 md:px-12 text-white">
      <h2 className="text-4xl font-bold text-center leading-tight">
        Related Doctors
      </h2>

      {/* Center wrapper */}
      <div className="w-full flex justify-center">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-2 pt-10">
          {relDoc.slice(0, 5).map((doctor, index) => (
            <div
              onClick={() => {
                navigate(`/appointment/${doctor._id}`);
                scrollTo(0, 0);
              }}
              key={index}
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

export default RelatedDoctors;
