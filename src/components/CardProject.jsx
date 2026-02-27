// src/components/CardProject.jsx
import React from "react";

export default function CardProject({
  Img,
  Title,
  Description,
  DemoLink,
  GithubLink,
}) {
  return (
    <div className="group relative w-full">
      {/* Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0b1120]/90 to-[#111827]/90 backdrop-blur-xl border border-white/10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-purple-500/25">
        
        {/* TOP IMAGE */}
        <div className="relative overflow-hidden rounded-t-2xl">
          {Img && (
            <img
              src={Img}
              alt={Title}
              className="w-full h-52 object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
          )}

          {/* Image gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#02030a] via-transparent to-transparent opacity-80"></div>
        </div>

        {/* CONTENT */}
        <div className="p-5 space-y-3">
          {/* Title */}
          <h3 className="text-lg md:text-xl font-semibold bg-gradient-to-r from-[#60a5fa] via-[#a78bfa] to-[#f472b6] bg-clip-text text-transparent">
            {Title}
          </h3>

          {/* Description */}
          <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
            {Description}
          </p>

          {/* Buttons row */}
          <div className="pt-3 flex items-center justify-between">
            {/* Live Demo */}
            {DemoLink ? (
              <a
                href={DemoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300 flex items-center gap-1"
              >
                Live Demo ↗
              </a>
            ) : (
              <span className="text-gray-500 text-sm">
                Demo Not Available
              </span>
            )}

            {/* GitHub / Details */}
            {GithubLink ? (
              <a
                href={GithubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm transition-all duration-300 hover:scale-105"
              >
                Details →
              </a>
            ) : (
              <span className="text-gray-500 text-sm">
                Not Available
              </span>
            )}
          </div>
        </div>

        {/* Hover border glow */}
        <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-purple-500/40 transition-colors duration-500 pointer-events-none"></div>
      </div>
    </div>
  );
}