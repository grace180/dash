import React from "react";

function Card({ title, value, gradient, padding = "p-5", width = "w-50", customClass = "" }) {
  return (
    <div className={`relative bg-[#b6d9f0] rounded-xl shadow-sm ${padding} ${width} overflow-hidden ${customClass}`}>

      <div
        className="absolute left-0 top-0 h-full w-2 rounded-l-xl"
        style={{ backgroundColor: gradient }}
      ></div>

      <h3 className="font-semibold text-gray-800">{title}</h3>
      <p className="text-2xl font-bold text-black mt-2">{value}</p>
    </div>
  );
}

export default Card;