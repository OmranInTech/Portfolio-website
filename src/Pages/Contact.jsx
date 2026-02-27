import React, { useRef, useState, useEffect } from "react";
import { Share2, Phone, Mail, Github, Linkedin, Twitter } from "lucide-react";

const AnimatedItem = ({ children, delay = 0 }) => {
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
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
      }`}
    >
      {children}
    </div>
  );
};

export default function Contact() {
  return (
    <div className="w-full min-h-screen bg-[#02030a] text-white px-5 md:px-[10%] lg:px-[12%] xl:px-[15%] py-20">
      {/* HEADER */}
      <div className="text-center pb-12">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
          Contact Me
        </h2>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          Feel free to reach out! I’m always open for new opportunities, collaborations, or a friendly chat.
        </p>
      </div>

      {/* LEFT SIDE - LET'S CONNECT */}
      <div className="flex justify-center">
        <AnimatedItem delay={100}>
          <div className="w-full max-w-2xl bg-white/5 p-10 sm:p-12 md:p-16 rounded-2xl backdrop-blur-md border border-white/10 transform transition-all duration-500 hover:scale-105">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-4xl sm:text-5xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                  Let's Connect
                </h3>
                <p className="text-lg sm:text-xl text-slate-400">
                  Reach me through the details below or click the button to connect!
                </p>
              </div>
              <Share2 className="w-10 h-10 text-[#6366f1] opacity-50" />
            </div>

            {/* CONTACT INFO */}
            <div className="flex flex-col gap-3 mb-8 text-lg">
              <p className="font-medium">Name: <span className="text-slate-300">Omran Ahmadzai</span></p>
              <p className="font-medium">Email: <span className="text-slate-300">omran@example.com</span></p>
              <p className="font-medium">Phone: <span className="text-slate-300">+93 700 000 000</span></p>
            </div>

            <button className="w-full text-xl sm:text-2xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-black font-bold px-8 py-4 rounded-xl hover:scale-105 transition-all mb-8">
              Let's Connect
            </button>

            {/* SOCIAL MEDIA */}
            <div className="flex gap-6 mt-2 justify-center text-2xl sm:text-3xl">
              <a href="#" className="hover:text-purple-400 transition-colors"><Github className="w-8 h-8" /></a>
              <a href="#" className="hover:text-blue-500 transition-colors"><Linkedin className="w-8 h-8" /></a>
              <a href="#" className="hover:text-sky-400 transition-colors"><Twitter className="w-8 h-8" /></a>
              <a href="mailto:omran@example.com" className="hover:text-green-400 transition-colors"><Mail className="w-8 h-8" /></a>
              <a href="tel:+93700000000" className="hover:text-orange-400 transition-colors"><Phone className="w-8 h-8" /></a>
            </div>
          </div>
        </AnimatedItem>
      </div>
    </div>
  );
}