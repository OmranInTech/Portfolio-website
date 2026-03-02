import React, { useEffect, useState, memo } from "react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

//////////////// CTA BUTTON //////////////////
const CTAButton = memo(({ href, text, icon: Icon }) => (
  <a
    href={href}
    className="w-full sm:w-auto"
    onClick={(e) => {
      e.preventDefault();
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: "smooth" });
    }}
  >
    <button className="group relative w-full sm:w-[180px] overflow-hidden">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl opacity-70 blur-md group-hover:opacity-100 transition"></div>
      <div className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition duration-700 bg-white/10 skew-x-12"></div>
      <div className="relative h-14 sm:h-14 bg-[#02030a] rounded-lg border border-white/10 flex items-center justify-center gap-2 text-[16px] sm:text-[17px] text-gray-200 group-hover:scale-[1.05] transition">
        {text} <Icon className="w-[18px] h-[18px]" />
      </div>
    </button>
  </a>
));

//////////////// FLOATING SYMBOLS //////////////////
const FloatingSymbols = () => {
  const symbols = ["{ }", "< />", "( )", "=>", "[ ]"];
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {symbols.map((s, i) => (
        <div
          key={i}
          className="absolute text-indigo-400/15 text-2xl sm:text-3xl animate-floatSlow"
          style={{
            left: `${10 + i * 18}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 1.5}s`,
          }}
        >
          {s}
        </div>
      ))}
    </div>
  );
};

//////////////// MAIN //////////////////
const Home = () => {
  const beforeName = 'const dev = { name: "';
  const name = "Omran Ahmadzai";
  const roleText = "Full Stack Web Dev";
  const afterName = `", role: "${roleText}" }`;

  const full = beforeName + name + afterName;
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setTyped(full.slice(0, i));
      i++;
      if (i > full.length) clearInterval(t);
    }, 28);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    AOS.init({ once: true, duration: 900, easing: "ease-out-cubic" });
  }, []);

  const nameStart = typed.indexOf(name);
  const roleStart = typed.indexOf(roleText);
  const hasName = nameStart !== -1;

  return (
    <div
      id="Home"
      className="min-h-screen bg-[#02030a] flex items-start sm:items-center justify-center px-4 relative overflow-hidden"
    >
      {/* bg glow */}
      <div className="absolute w-[480px] sm:w-[580px] h-[480px] sm:h-[580px] rounded-full blur-3xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 opacity-50 animate-pulse" />

      {/* grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]" />

      <FloatingSymbols />

      {/* HERO CONTENT */}
      <div className="w-full max-w-6xl text-center space-y-8 relative z-10 pt-28 sm:pt-24 pb-16">
        {/* CODE BOX */}
        <div
          data-aos="zoom-in"
          data-aos-delay="150"
          className="mx-auto w-full max-w-[100%] sm:max-w-[720px]"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl blur opacity-70 group-hover:opacity-100 transition"></div>

            <div
              className="relative bg-[#05060f] border border-white/10 rounded-xl
                            px-8 sm:px-10
                            py-[22px] sm:py-[22px]
                            font-mono
                            text-[16px] sm:text-[18px]
                            text-left
                            hover:scale-[1.03] transition
                            break-words"
            >
              {!hasName && <span className="text-gray-300">{typed}</span>}

              {hasName && (
                <>
                  <span className="text-gray-400">{typed.slice(0, nameStart)}</span>

                  <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400
                                   bg-[length:200%]
                                   animate-gradientShift
                                   bg-clip-text text-transparent
                                   font-semibold
                                   drop-shadow-[0_0_10px_rgba(99,102,241,0.8)]
                                   text-[20px] sm:text-[24px]">
                    {name}
                  </span>

                  <span className="text-gray-400">{typed.slice(nameStart + name.length, roleStart)}</span>

                  <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400
                                   bg-[length:200%]
                                   animate-gradientShift
                                   bg-clip-text text-transparent
                                   font-semibold
                                   drop-shadow-[0_0_10px_rgba(163,94,255,0.6)]
                                   text-[18px] sm:text-[22px]">
                    {roleText}
                  </span>

                  <span className="text-gray-300">{typed.slice(roleStart + roleText.length)}</span>
                </>
              )}

              <span className="ml-1 animate-pulse text-indigo-400">▌</span>
            </div>
          </div>
        </div>

        {/* description */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-gray-400 text-[16px] sm:text-[17px] max-w-xl mx-auto"
        >
          Building scalable, high-performance web applications using modern full-stack technologies.
        </p>

        {/* STACK */}
        <div
          data-aos="fade-up"
          data-aos-delay="450"
          className="flex flex-wrap gap-4 justify-center"
        >
          {["React", "Node", "Django", "MongoDB", "Tailwind"].map((s) => (
            <span
              key={s}
              className="relative px-5 py-3 text-[15px] sm:text-[16px] rounded-full bg-white/5 border border-white/10 text-gray-300 hover:scale-110 transition overflow-hidden group"
            >
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-white/10 transition duration-700"></span>
              {s}
            </span>
          ))}
        </div>

        {/* ICONS */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="flex justify-center gap-8 pt-3"
        >
          <a
            href="https://github.com/OmranInTech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-10 h-10 sm:w-9 sm:h-9 text-gray-400 hover:text-white hover:scale-125 transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/omran-ahmadzai-68a5b6351/"
          >
            <Linkedin className="w-10 h-10 sm:w-9 sm:h-9 text-gray-400 hover:text-white hover:scale-125 transition" />
          </a>
          <a
            href="mailto:ahmadzai.omran12@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="w-10 h-10 sm:w-9 sm:h-9 text-gray-400 hover:text-white hover:scale-125 transition" />
          </a>
        </div>

        {/* BUTTONS */}
        <div
          data-aos="fade-up"
          data-aos-delay="750"
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4 w-full sm:w-auto"
        >
          <CTAButton href="#Portfolio" text="Projects" icon={ExternalLink} />
          <CTAButton href="#Contact" text="Contact" icon={Mail} />
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="900"
          className="pt-6 text-gray-500 text-sm animate-bounce"
        >
          ↓ Scroll to explore
        </div>
      </div>

      <style>{`
        @keyframes gradientShift {
          0%{background-position:0%}
          100%{background-position:200%}
        }
        .animate-gradientShift{
          animation:gradientShift 6s linear infinite;
        }
        @keyframes floatSlow{
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(-20px)}
        }
        .animate-floatSlow{
          animation:floatSlow 12s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default memo(Home);