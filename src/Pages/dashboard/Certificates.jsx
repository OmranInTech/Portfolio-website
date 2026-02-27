import React from 'react'
import CertificateCard from '../../components/Certificate'

export default function Certificates() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold text-white">Certificates</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
      </div>
    </section>
  )
}
