import React from 'react'
import Liquid_Glass from './liquid_glass.jsx'
import Long_press_toggle from './long_press_toggle.jsx'

export default function Floating_theme_toggle() {
  return (
    <div className="floating_theme_toggle">
      <Liquid_Glass class_name="p-2" intensity="low" radius={12} border={true}>
        <Long_press_toggle />
      </Liquid_Glass>
    </div>
  )
}

