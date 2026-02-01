import React, { useEffect, useState, memo } from "react"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

//////////////// CTA BUTTON //////////////////

const CTAButton = memo(({ href, text, icon: Icon }) => (
  <a href={href} className="w-full sm:w-auto">
    <button className="group relative w-full sm:w-[180px] overflow-hidden">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl opacity-70 blur-md group-hover:opacity-100 transition"></div>

      <div className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition duration-700 bg-white/10 skew-x-12"></div>

      <div className="relative h-12 sm:h-11 bg-[#02030a] rounded-lg border border-white/10 flex items-center justify-center gap-2 text-[15px] sm:text-[15px] text-gray-200 group-hover:scale-[1.05] transition">
        {text} <Icon className="w-[18px] h-[18px]" />
      </div>
    </button>
  </a>
))

//////////////// FLOATING SYMBOLS //////////////////

const FloatingSymbols = () => {
  const symbols = ["{ }", "< />", "( )", "=>", "[ ]"]
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {symbols.map((s, i) => (
        <div
          key={i}
          className="absolute text-indigo-400/10 text-xl sm:text-2xl animate-floatSlow"
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
  )
}

//////////////// MAIN //////////////////

const Home = () => {

  const beforeName = 'const dev = { name: "'
  const name = 'Omran Ahmadzai'
  const afterName = '", role: "Full Stack Web Dev" }'

  const full = beforeName + name + afterName
  const [typed, setTyped] = useState("")

  useEffect(() => {
    let i = 0
    const t = setInterval(() => {
      setTyped(full.slice(0, i))
      i++
      if (i > full.length) clearInterval(t)
    }, 28)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    AOS.init({ once: true, duration: 900, easing: "ease-out-cubic" })
  }, [])

  const nameStart = typed.indexOf(name)
  const hasName = nameStart !== -1

  return (
    <div className="min-h-screen bg-[#02030a] flex items-start sm:items-center justify-center px-4 relative overflow-hidden">

      {/* bg glow */}
      <div className="absolute w-[420px] sm:w-[520px] h-[420px] sm:h-[520px] rounded-full blur-3xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 opacity-40 animate-pulse"/>

      {/* grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]" />

      <FloatingSymbols />

      {/* MOBILE: more vertical fill */}
      <div className="w-full max-w-3xl text-center space-y-7 sm:space-y-6 relative z-10 pt-28 sm:pt-24 pb-16">

        {/* TITLE — bigger on mobile */}
        <h1 className="text-[28px] sm:text-[26px] mt-5 md:text-[31px] font-bold" data-aos="fade-up">
          <span className="text-white">Full Stack </span>
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-[length:200%] animate-gradientShift bg-clip-text text-transparent">
            Web Developer
          </span>
        </h1>

        {/* CODE BOX — taller & clearer on mobile */}
        <div data-aos="zoom-in" data-aos-delay="150"
             className="mx-auto w-full max-w-[100%] sm:max-w-[460px]">

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl blur opacity-70 group-hover:opacity-100 transition"></div>

            <div className="relative bg-[#05060f] border border-white/10 rounded-xl
                            px-5 sm:px-6
                            py-[18px] sm:py-[18px]
                            font-mono
                            text-[14px] sm:text-[15px]
                            text-left
                            hover:scale-[1.02] transition
                            break-words">

              {!hasName && (
                <span className="text-gray-300">{typed}</span>
              )}

              {hasName && (
                <>
                  <span className="text-gray-400">
                    {typed.slice(0, nameStart)}
                  </span>

                  <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400
                                   bg-[length:200%]
                                   animate-gradientShift
                                   bg-clip-text text-transparent
                                   font-semibold
                                   drop-shadow-[0_0_8px_rgba(99,102,241,0.7)]">
                    {name}
                  </span>

                  <span className="text-gray-300">
                    {typed.slice(nameStart + name.length)}
                  </span>
                </>
              )}

              <span className="ml-1 animate-pulse text-indigo-400">▌</span>
            </div>
          </div>
        </div>

        {/* description — larger mobile */}
        <p data-aos="fade-up" data-aos-delay="300"
           className="text-gray-400 text-[15px] sm:text-[15px] max-w-xl mx-auto">
          Building scalable, high-performance web applications using modern full-stack technologies.
        </p>

        {/* STACK — bigger pills mobile */}
        <div data-aos="fade-up" data-aos-delay="450"
             className="flex flex-wrap gap-3 justify-center">

          {["React","Node","Django","MongoDB","Tailwind"].map(s => (
            <span key={s}
              className="relative px-4 py-2
                         text-[14px] sm:text-[15px]
                         rounded-full bg-white/5 border border-white/10
                         text-gray-300 hover:scale-110 transition overflow-hidden group">
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-white/10 transition duration-700"></span>
              {s}
            </span>
          ))}
        </div>

        {/* ICONS — larger mobile */}
        <div data-aos="fade-up" data-aos-delay="600"
             className="flex justify-center gap-7 pt-2">
          <a href="https://github.com/OmranInTech">
            <Github className="w-7 h-7 sm:w-6 sm:h-6 text-gray-400 hover:text-white hover:scale-125 transition"/>
          </a>
          <Linkedin className="w-7 h-7 sm:w-6 sm:h-6 text-gray-400 hover:text-white hover:scale-125 transition"/>
          <Mail className="w-7 h-7 sm:w-6 sm:h-6 text-gray-400 hover:text-white hover:scale-125 transition"/>
        </div>

        {/* BUTTONS — full width mobile */}
        <div data-aos="fade-up" data-aos-delay="750"
             className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 w-full sm:w-auto">
          <CTAButton href="#Portfolio" text="Projects" icon={ExternalLink}/>
          <CTAButton href="#Contact" text="Contact" icon={Mail}/>
        </div>

        <div data-aos="fade-up" data-aos-delay="900"
             className="pt-6 text-gray-500 text-sm animate-bounce">
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
  )
}

export default memo(Home)
