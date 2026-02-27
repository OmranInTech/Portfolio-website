import React from 'react'

const fakeComments = [
  { id: 1, name: 'Alice', text: 'Great work!' },
  { id: 2, name: 'Bob', text: 'Loved your portfolio design.' },
]

export default function Comments() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold text-white">Comments</h1>
      <div className="space-y-3">
        {fakeComments.map((c) => (
          <div key={c.id} className="p-4 bg-white/3 rounded-lg border border-white/6">
            <div className="flex items-center justify-between">
              <strong className="text-white">{c.name}</strong>
              <span className="text-xs text-gray-400">Just now</span>
            </div>
            <p className="text-gray-200 mt-2">{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
