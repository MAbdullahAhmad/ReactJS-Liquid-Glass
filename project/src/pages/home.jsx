import React from 'react'
import Liquid_glass from '../components/liquid_glass.jsx'

export default function Home() {
  return (
    <main className="pt-5">
      <section className="container" style={{ paddingTop: '5rem' }}>
        <div className="row g-4">
          <div className="col-12">
            <Liquid_glass className="p-4 p-md-5">
              <h1 className="display-5 mb-3">Liquid Glass Header</h1>
              <p className="lead mb-0">
                This header sits inside a reusable liquid glass container. Scroll to see the fixed glass navbar.
              </p>
            </Liquid_glass>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="row g-4">
          {[...Array(6)].map((_, i) => (
            <div className="col-md-6" key={i}>
              <Liquid_glass className="p-4">
                <h2 className="h4 mb-2">Section {i + 1}</h2>
                <p className="mb-0">
                  Inter + Bootstrap for quick layout. This block is for testing the glass header over content.
                </p>
              </Liquid_glass>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

