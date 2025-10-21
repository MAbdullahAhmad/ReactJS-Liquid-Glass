import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Long_press_toggle from './long_press_toggle.jsx'

export default function Glass_navbar() {
  const location = useLocation()
  const app_name = import.meta.env.VITE_APP_NAME || 'App'

  return (
    <nav className="glass_navbar navbar navbar-dark navbar-expand-lg fixed-top py-2">
      <div className="container">
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
              <Link className={`nav-link ${location.pathname === '/other' ? 'active' : ''}`} to="/other">Other</Link>
            </li>
            <li className="nav-item d-flex align-items-center">
              <Long_press_toggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
