import React from 'react'
function Home_Page() {
  return (
    <>
      <div className="py-5" style={{ paddingTop: '5rem' }}>
        <div className="container py-5">
          <h1 className="display-5 fw-bold mb-3">Liquid Glass Demo</h1>
          <p className="lead mb-4">
            Only the fixed header and the bottom-left theme toggle use the glass effect. The sections below alternate light and dark.
          </p>
          <div className="d-flex gap-2">
            <a className="btn btn-primary" href="#s1">Jump to Sections</a>
          </div>
        </div>
      </div>

      {[...Array(13)].map((_, idx) => {
        const even = idx % 2 === 0
        const id = `s${idx + 1}`
        return (
          <section key={id} id={id} className={`${even ? 'section_light' : 'section_dark'} py-5`}>
            <div className="container">
              <div className="row align-items-center g-4">
                <div className={even ? 'col-lg-6 order-lg-1' : 'col-lg-6 order-lg-2'}>
                  <h2 className="h3 mb-3">Section {idx + 1}</h2>
                  <p className="mb-0">
                    {even
                      ? 'A light section with text content using Bootstrap utilities and Inter font.'
                      : 'A dark section variant to provide visual rhythm and contrast.'}
                  </p>
                </div>
                <div className={even ? 'col-lg-6 order-lg-2' : 'col-lg-6 order-lg-1'}>
                  {(idx + 1) % 3 === 0 ? (
                    <svg className="w-100 diagonal_svg" viewBox="0 0 600 300" preserveAspectRatio="none" aria-hidden="true">
                      <defs>
                        <linearGradient id={`grad_${id}`} x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#00a0ff" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#ff00b8" stopOpacity="0.25" />
                        </linearGradient>
                      </defs>
                      <polygon points="0,0 600,0 0,300" fill={`url(#grad_${id})`} />
                    </svg>
                  ) : (
                    <div className="ratio ratio-16x9 bg-body-secondary rounded"></div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )
      })}
    </>
  )
}

export default Home_Page
