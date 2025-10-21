import React from 'react'

// A reusable liquid glass container inspired by MAbdullahAhmad/ReactJS-Liquid-Glass
// Usage: <Liquid_glass className="p-4"> ... </Liquid_glass>
export default function Liquid_glass({ children, className = '' }) {
  return (
    <div className={`liquid_glass ${className}`}>
      <div className="liquid_glass_backdrop" />
      <div className="liquid_glass_content position-relative">{children}</div>
    </div>
  )
}

