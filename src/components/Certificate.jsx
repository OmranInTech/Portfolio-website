// src/components/Certificate.jsx
import React from "react";

export default function Certificate({ ImgSertif }) {
  return (
    <div className="group w-full">
      {/* Card */}
      <div className="relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#0b1120]/90 to-[#111827]/90 backdrop-blur-xl border border-white/10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-purple-500/25">
        
        {/* Image wrapper */}
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={ImgSertif}
            alt="Certificate"
            className="w-full h-64 sm:h-72 lg:h-80 object-contain p-4 transform group-hover:scale-105 transition-transform duration-500"
          />

          {/* bottom gradient fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#02030a] via-transparent to-transparent opacity-60 pointer-events-none"></div>
        </div>

        {/* Hover border glow */}
        <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-purple-500/40 transition-colors duration-500 pointer-events-none"></div>
      </div>
    </div>
  );
}