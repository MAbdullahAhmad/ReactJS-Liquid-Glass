import React from 'react'
import Liquid_Glass from '../components/liquid_glass.jsx'

function Section({ title, children }) {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="mb-3">{title}</h2>
        {children}
      </div>
    </section>
  )
}

function Home_Page() {
  return (
    <>
      <div className="hero_banner py-5">
        <div className="container py-5">
          <Liquid_Glass class_name="p-4 p-md-5">
            <h1 className="display-5 fw-bold mb-3">Liquid Glass Header</h1>
            <p className="lead mb-4">
              A reusable container with a liquid-like glow under a glassy surface. Resize and scroll to see the fixed glass navbar.
            </p>
            <div className="d-flex gap-2">
              <a className="btn btn-primary" href="#features">Explore Features</a>
              <a className="btn btn-outline-secondary" href="#examples">See Examples</a>
            </div>
          </Liquid_Glass>
        </div>
      </div>

      <Section title="Features" id="features">
        <div className="row g-4">
          {[1, 2, 3].map((i) => (
            <div className="col-md-4" key={`f_${i}`}>
              <Liquid_Glass class_name="p-4 h-100">
                <h5 className="mb-2">Feature {i}</h5>
                <p className="mb-0">Build liquid glass cards with CSS and React components.</p>
              </Liquid_Glass>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Examples" id="examples">
        <div className="row g-4">
          <div className="col-lg-8">
            <Liquid_Glass class_name="p-4 p-md-5">
              <h4 className="mb-3">Large Example</h4>
              <p className="mb-0">A wider container to showcase the effect on bigger surfaces.</p>
            </Liquid_Glass>
          </div>
          <div className="col-lg-4">
            <Liquid_Glass class_name="p-4">
              <h4 className="mb-3">Compact</h4>
              <p className="mb-0">A compact card using the same component.</p>
            </Liquid_Glass>
          </div>
        </div>
      </Section>
    </>
  )
}

export default Home_Page

