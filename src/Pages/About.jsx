import React, { useEffect, memo, useMemo } from "react";
import { FileText, Code, Award, Globe, ArrowUpRight, Sparkles } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProfilePic from "../assets/images/omran.jpeg";
import ProfileCV from "../assets/omrancv.pdf";

// Memoized Header Component
const Header = memo(() => (
  <div className="text-center lg:mb-6  px-[5%]">
    <h1
      className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400"
      data-aos="zoom-in-up"
      data-aos-duration="600"
    >
      About Me
    </h1>
    <p
      className="mt-1 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base flex items-center justify-center gap-2"
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
      <Sparkles className="w-4 h-4 text-purple-400" />
      Turning ideas into digital experiences
      <Sparkles className="w-4 h-4 text-purple-400" />
    </p>
  </div>
));

// Profile Image Component
const ProfileImage = memo(() => (
  <div className="flex justify-center lg:justify-end items-center p-0 py-2 pb-2">
    <div className="relative group" data-aos="fade-up" data-aos-duration="1000">
      <div className="absolute -inset-5 opacity-[20%] z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600 rounded-full blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-purple-500 via-indigo-500 to-indigo-400 rounded-full blur-2xl animate-pulse-slow opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-30" />
      </div>

      <div className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-[0_0_30px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
        <div className="absolute inset-0 border-4 border-white/20 rounded-full transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" />
        <img
          src={ProfilePic}
          alt="Omran Ahmadzai"
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:rotate-1"
        />
      </div>
    </div>
  </div>
));

// Stat Card Component
const StatCard = memo(({ icon: Icon, color, value, label, description, animation }) => (
  <div data-aos={animation} data-aos-duration={1300} className="relative group">
    <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-xl p-4 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between">
      <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
      <div className="flex items-center justify-between mb-3">
        <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <span className="text-3xl font-bold text-white">{value}</span>
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-gray-300 mb-1">{label}</p>
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-400">{description}</p>
          <ArrowUpRight className="w-3 h-3 text-white/50 group-hover:text-white transition-colors" />
        </div>
      </div>
    </div>
  </div>
));

const AboutPage = () => {
  const statsData = useMemo(() => [
    { icon: Code, color: "from-indigo-400 to-purple-400", value: "10+", label: "Total Projects", description: "Innovative web solutions crafted", animation: "fade-right" },
    { icon: Award, color: "from-purple-400 to-indigo-400", value: "20+", label: "Certificates", description: "Skills validated professionally", animation: "fade-up" },
    { icon: Globe, color: "from-indigo-400 to-purple-400", value: "2+", label: "Years of Experience", description: "Continuous learning journey", animation: "fade-left" },
  ], []);

  useEffect(() => {
    AOS.init({ duration: 1000, mirror: true });
    AOS.refresh();
  }, []);

  return (
    <div className="min-h-screen bg-[#02030a] text-white pb-10 overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] sm-mt-0" id="About">
      <Header />
      <div className="w-full mx-auto pt-6 sm:pt-10 relative">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold" data-aos="fade-right">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Hello, I'm</span>
              <span className="block mt-1 text-gray-200">Omran Ahmadzai</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed text-justify pb-2 sm:pb-0" data-aos="fade-right">
              I am a Full Stack Web Developer with expertise in building modern, scalable web applications. I craft seamless digital experiences using React, Django, PostgreSQL, and APIs, while integrating DevOps practices for efficient deployment and maintenance. With professional certifications and a Bachelor’s degree in Computer Science, I combine technical knowledge and practical experience to deliver high-quality, production-ready solutions.           
            </p>

            {/* Quote Section */}
            <div className="relative bg-gradient-to-br from-indigo-400/10 via-transparent to-purple-400/10 border border-[#6366f1]/30 rounded-2xl p-3 my-4 backdrop-blur-md shadow-2xl overflow-hidden" data-aos="fade-up">
              <div className="absolute top-2 right-4 w-12 h-12 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-3 -left-2 w-10 h-10 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-full blur-lg"></div>
              <blockquote className="text-gray-300 text-center lg:text-left italic font-medium text-sm relative z-10 pl-4">
                "Transforming ideas into code and delivering professional web solutions."
              </blockquote>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3 lg:gap-4 w-full">
              <a href={ProfileCV} target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto">
                <button className="w-full lg:w-auto sm:px-4 py-1 sm:py-2 rounded-lg bg-gradient-to-r from-indigo-400 to-purple-400 text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl text-sm sm:text-base">
                  <FileText className="w-4 h-4 sm:w-4 sm:h-4" /> Download CV
                </button>
              </a>

              <a
                href="#Portfolio"
                className="w-full lg:w-auto"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector("#Portfolio");
                  target?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <button className="w-full lg:w-auto sm:px-4 py-1 sm:py-2 rounded-lg border border-purple-400/50 text-purple-400 font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 hover:bg-purple-400/10 text-sm sm:text-base">
                  <Code className="w-4 h-4 sm:w-4 sm:h-4" /> View Projects
                </button>
              </a>

              <a href="#Blog" className="w-full lg:w-auto">
                <button className="w-full lg:w-auto sm:px-4 py-1 sm:py-2 rounded-lg border border-purple-400/50 text-purple-400 font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 hover:bg-purple-400/10 text-sm sm:text-base">
                  <Globe className="w-4 h-4 sm:w-4 sm:h-4" /> Blog
                </button>
              </a>
            </div>
          </div>

          <ProfileImage />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 cursor-pointer">
          {statsData.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {0%,100%{transform:translateY(0);}50%{transform:translateY(-15px);}}
        @keyframes spin-slower {to{transform:rotate(360deg);}}
        .animate-pulse-slow {animation: pulse 3s infinite;}
        .animate-spin-slower {animation: spin-slower 8s linear infinite;}
        .animate-float {animation: float 12s ease-in-out infinite;}
      `}</style>
    </div>
  );
};

export default memo(AboutPage);