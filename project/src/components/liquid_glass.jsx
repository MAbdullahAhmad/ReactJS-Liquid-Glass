import React from 'react'

// Single parent component to apply the liquid glass effect.
// Important minimal configs with sensible defaults:
// - intensity: 'low' | 'medium' | 'high' (default 'medium')
// - radius: number in px (default 16)
// - border: boolean (default true)
// - tone: 'auto' | 'light' | 'dark' (default 'auto')
export default function Liquid_Glass({
  children,
  class_name = '',
  className, // also allow React conventional prop, but prefer snake_case
  intensity = 'medium',
  radius = 16,
  border = true,
  tone = 'auto',
}) {
  const classes = `liquid_glass ${tone === 'light' ? 'lg_tone_light' : ''} ${tone === 'dark' ? 'lg_tone_dark' : ''} ${class_name || className || ''}`

  const intensity_map = {
    low: { blur: '8px', saturate: '1.2', glow: '0.25' },
    medium: { blur: '12px', saturate: '1.4', glow: '0.35' },
    high: { blur: '16px', saturate: '1.6', glow: '0.45' },
  }
  const picked = intensity_map[intensity] || intensity_map.medium

  const style = {
    '--lg-blur': picked.blur,
    '--lg-saturate': picked.saturate,
    '--lg-glow': picked.glow,
    '--lg-radius': `${radius}px`,
    '--lg-border-opacity': border ? '0.16' : '0',
  }

  return (
    <div className={classes} style={style}>
      <div className="liquid_glass_backdrop" />
      <div className="liquid_glass_content position-relative">{children}</div>
    </div>
  )
}
