import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Liquid_Glass from './liquid_glass.jsx'

export default function Glass_navbar() {
  const location = useLocation()
  const app_name = import.meta.env.VITE_APP_NAME || 'App'

  return (
    <header className="site_header">
      <div className="container">
        <Liquid_Glass class_name="px-3 py-2" intensity="medium" radius={12} border={true}>
          <nav className="navbar navbar-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand fw-semibold text-decoration-none">
              {app_name}
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#nav_content"
              aria-controls="nav_content"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="nav_content">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname.startsWith('/about') ? 'active' : ''}`} to="/about">About</Link>
                </li>
              </ul>
            </div>
          </nav>
        </Liquid_Glass>
      </div>
    </header>
  )
}
