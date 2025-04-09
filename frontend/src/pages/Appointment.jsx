import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const fetchDocInfo = () => {
    const info = doctors.find((doctor) => doctor._id === docId);
    setDocInfo(info);
  };

  const getAvailableSlots = () => {
    const slots = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      const endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (i === 0) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      const timeSlots = [];
      while (currentDate < endTime) {
        const formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        timeSlots.push({
          dateTime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      slots.push(timeSlots);
    }

    setDocSlots(slots);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [docId, doctors]);

  useEffect(() => {
    if (docInfo) getAvailableSlots();
  }, [docInfo]);

  if (!docInfo)
    return <div className="text-center py-10 text-white">Loading...</div>;

  return (
    <div className="min-h-screen py-10 px-4 md:px-16 bg-black">
      {/* Doctor Info Card */}
      <div className="border border-gray-800 rounded-2xl overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row gap-6 p-6 bg-gray-900">
        <div className="flex-shrink-0 flex justify-center items-start">
          <img
            src={docInfo.image}
            alt={docInfo.name}
            className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full border-4 border-blue-500 shadow-md"
          />
        </div>

        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-white">{docInfo.name}</h2>
            <img
              src={assets.verified_icon}
              alt="Verified"
              className="w-5 h-5"
            />
          </div>

          <p className="text-white text-md">
            <span className="font-medium">{docInfo.degree}</span> -{" "}
            {docInfo.speciality}
          </p>

          <button className="bg-blue-100 text-blue-700 text-sm px-4 py-1 rounded-full font-medium shadow">
            {docInfo.experience}
          </button>

          <div className="mt-4">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-semibold text-white">About</h3>
              <img src={assets.info_icon} alt="Info" className="w-4 h-4" />
            </div>
            <p className="text-sm text-white leading-relaxed">
              {docInfo.about}
            </p>
          </div>

          <div className="pt-4 text-sm text-white">
            <p>
              <strong>Address:</strong> {docInfo.address?.line1},{" "}
              {docInfo.address?.line2}
            </p>
            <p>
              <strong>Consultation Fees:</strong> ₹{docInfo.fees}
            </p>
          </div>
        </div>
      </div>

      {/* Appointment Slots */}
      <div className="sm:ml-72 sm:pl-4 mt-10 font-medium text-white">
        <h3 className="text-xl font-semibold mb-4">Booking Slots</h3>

        {/* Date Slots */}
        <div className="flex gap-3 items-center overflow-x-auto py-2">
          {docSlots.map((item, index) => (
            <div
              key={index}
              onClick={() => setSlotIndex(index)}
              className={`text-center px-4 py-3 min-w-[60px] rounded-xl cursor-pointer border 
                transition-all duration-200 ${
                  slotIndex === index
                    ? "bg-blue-600 border-blue-500 text-white"
                    : "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700"
                }`}
            >
              <p className="text-sm font-medium">
                {daysOfWeek[item[0].dateTime.getDay()]}
              </p>
              <p className="text-sm">{item[0].dateTime.getDate()}</p>
            </div>
          ))}
        </div>

        {/* Time Slots */}
        <div className="flex flex-wrap gap-3 mt-5">
          {docSlots[slotIndex]?.map((item, index) => (
            <div
              key={index}
              onClick={() => setSlotTime(item.time)}
              className={`px-5 py-2 rounded-full text-sm border cursor-pointer transition-all duration-150 
                ${
                  item.time === slotTime
                    ? "bg-blue-600 border-blue-500 text-white"
                    : "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700"
                }`}
            >
              {item.time.toLowerCase()}
            </div>
          ))}
        </div>

        <button className="bg-blue-600 text-white px-6 py-2 rounded-full mt-6 font-semibold shadow hover:bg-blue-700 transition-all duration-300">
          Book an Appointment
        </button>
      </div>

      <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
    </div>
  );
};

export default Appointment;
