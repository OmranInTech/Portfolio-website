import React, { useState, useEffect, useRef } from "react";
import CardProject from "../components/CardProject";
import Certificate from "../components/Certificate";
import TechStack from "../components/TechStack";
import { Code, Award, Boxes } from "lucide-react";

import mymirathImg from "../assets/images/mymirath.png";

/* ================= CERTIFICATE IMAGES ================= */

import metafrontend from "../assets/images/certificatespics/metafrontend.png";
import metabackend from "../assets/images/certificatespics/metabackend.png";
import ibmdevops from "../assets/images/certificatespics/ibmdevops.png";
import dsa from "../assets/images/certificatespics/dsa.png";
import appsecruity from "../assets/images/certificatespics/appsecruity.png";
import aiwithflask from "../assets/images/certificatespics/aiwithfalsk.png";
import advancedreact from "../assets/images/certificatespics/advancedreact.png";

/* ================= PROJECT DATA ================= */

const sampleProjects = [
  {
    id: 1,
    Img: mymirathImg,
    Title: "MyMirath",
    Description: "Islamic inheritance calculator assistance",
    DemoLink: "#",
    GithubLink: "#",
  },
  {
    id: 2,
    Img: "https://via.placeholder.com/400x250",
    Title: "Portfolio Website",
    Description: "React + Tailwind + Animations",
    DemoLink: "#",
    GithubLink: "#",
  },
  {
    id: 3,
    Img: "https://via.placeholder.com/400x250",
    Title: "E-commerce App",
    Description: "Fullstack Node.js & MongoDB",
    DemoLink: "#",
    GithubLink: "#",
  },
  {
    id: 4,
    Img: "https://via.placeholder.com/400x250",
    Title: "Blog Platform",
    Description: "React + Firebase + Tailwind",
    DemoLink: "#",
    GithubLink: "#",
  },
  {
    id: 5,
    Img: "https://via.placeholder.com/400x250",
    Title: "Task Manager",
    Description: "React Context API project",
    DemoLink: "#",
    GithubLink: "#",
  },
  {
    id: 6,
    Img: "https://via.placeholder.com/400x250",
    Title: "Weather App",
    Description: "JavaScript + Weather API",
    DemoLink: "#",
    GithubLink: "#",
  },
];

/* ================= CERTIFICATE DATA ================= */

const certificateData = [
  { id: 1, Img: metafrontend },
  { id: 2, Img: metabackend },
  { id: 3, Img: ibmdevops },
  { id: 4, Img: dsa },
  { id: 5, Img: appsecruity },
  { id: 6, Img: aiwithflask },
  { id: 7, Img: advancedreact },
  { id: 8, Img: metafrontend },
];

/* ================= TECH STACK DATA ================= */

const techStackData = [
  { id: 1, name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { id: 2, name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { id: 3, name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { id: 4, name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { id: 5, name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { id: 6, name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { id: 7, name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { id: 8, name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { id: 9, name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { id: 10, name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { id: 11, name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { id: 12, name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { id: 13, name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { id: 14, name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { id: 15, name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { id: 16, name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { id: 17, name: "Vercel", icon: "https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico" },
];

/* ================= ANIMATION HOOK ================= */

const AnimatedItem = ({ children }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

/* ================= MAIN ================= */

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="md:px-[10%] px-[5%] w-full bg-[#02030a] text-white" id="Portfolio">
      {/* HEADER */}
      <div className="text-center pb-12">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
          Portfolio Showcase
        </h2>
        <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
          Explore my journey through projects, certifications, and technical expertise.
        </p>
      </div>

      {/* TABS */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {[
          { name: "Projects", icon: Code },
          { name: "Certificates", icon: Award },
          { name: "Tech Stack", icon: Boxes },
        ].map((tab, i) => {
          const Icon = tab.icon;
          return (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 ${
                activeTab === i
                  ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-black scale-105"
                  : "bg-white/5 hover:bg-white/10 text-gray-300"
              }`}
            >
              <Icon className="w-5 h-5" />
              {tab.name}
            </button>
          );
        })}
      </div>

      {/* PROJECTS */}
      {activeTab === 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {sampleProjects.map((project) => (
            <AnimatedItem key={project.id}>
              <CardProject {...project} />
            </AnimatedItem>
          ))}
        </div>
      )}

      {/* CERTIFICATES */}
      {activeTab === 1 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {certificateData.map((cert) => (
            <AnimatedItem key={cert.id}>
              <Certificate ImgSertif={cert.Img} />
            </AnimatedItem>
          ))}
        </div>
      )}

      {/* TECH STACK */}
      {activeTab === 2 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-7">
          {techStackData.map((tech) => (
            <AnimatedItem key={tech.id}>
              <TechStack TechStackIcon={tech.icon} Language={tech.name} />
            </AnimatedItem>
          ))}
        </div>
      )}
    </div>
  );
}