import React from 'react'
import OmranImg from '../../../src/assets/images/omran.jpeg'

const fakeProjects = [
  { id: 1, title: 'Portfolio Website', desc: 'Personal portfolio built with React + Tailwind', color: 'from-indigo-500 to-purple-500' },
  { id: 2, title: 'Chat App', desc: 'Realtime chat using Supabase', color: 'from-green-400 to-teal-400' },
  { id: 3, title: 'E-commerce UI', desc: 'Shop UI with animations', color: 'from-pink-400 to-red-400' },
]

export default function Projects() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold text-white">Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {fakeProjects.map((p) => (
          <article
            key={p.id}
            className={`relative overflow-hidden rounded-2xl p-5 bg-gradient-to-b ${p.color} bg-opacity-10 border border-white/6 transition-transform transform hover:-translate-y-2`}
          >
            <div className="flex items-start gap-4">
              <img src={OmranImg} alt="thumb" className="w-16 h-16 rounded-lg object-cover shadow-lg" />
              <div>
                <h2 className="text-lg font-semibold text-white">{p.title}</h2>
                <p className="text-sm text-gray-300 mt-1">{p.desc}</p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-indigo-200/80">UI / Frontend</span>
              <button className="px-3 py-1 rounded-lg bg-white/6 text-white text-sm hover:bg-white/10 transition">View</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
