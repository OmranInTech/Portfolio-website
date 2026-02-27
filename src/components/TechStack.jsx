import React from "react";

export default function TechStack({ TechStackIcon, Language }) {
  return (
    <div className="group relative w-full">
      {/* glass card */}
      <div className="
        relative overflow-hidden rounded-2xl
        bg-gradient-to-br from-slate-900/90 to-slate-800/90
        backdrop-blur-lg border border-white/10
        shadow-xl
        transition-all duration-300
        hover:shadow-purple-500/20
        hover:-translate-y-1
      ">
        {/* glow overlay */}
        <div className="
          absolute inset-0
          bg-gradient-to-br from-[#6366f1]/10 via-[#a855f7]/10 to-[#ec4899]/10
          opacity-50 group-hover:opacity-80
          transition duration-300
        " />

        {/* content */}
        <div className="relative z-10 flex flex-col items-center justify-center p-6">
          <img
            src={TechStackIcon}
            alt={Language}
            className="
              w-14 h-14 object-contain
              transition-transform duration-500
              group-hover:scale-110
            "
          />

          <span className="mt-3 text-sm font-medium text-gray-300 group-hover:text-white transition">
            {Language}
          </span>
        </div>

        {/* border glow */}
        <div className="
          absolute inset-0 rounded-2xl
          border border-white/0
          group-hover:border-purple-500/40
          transition-all duration-300
        " />
      </div>
    </div>
  );
}