import React, { useEffect, useRef, useState } from 'react'

const LONG_PRESS_MS = 600

export default function Long_press_toggle() {
  const [theme, set_theme] = use_state_with_storage('theme', import.meta.env.VITE_THEME_DEFAULT || 'light')
  const timer_ref = useRef(null)
  const [pressing, set_pressing] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
  }, [theme])

  const start_press = () => {
    set_pressing(true)
    clearTimeout(timer_ref.current)
    timer_ref.current = setTimeout(() => {
      set_theme(prev => (prev === 'dark' ? 'light' : 'dark'))
      set_pressing(false)
    }, LONG_PRESS_MS)
  }

  const end_press = () => {
    set_pressing(false)
    clearTimeout(timer_ref.current)
  }

  return (
    <button
      className={`btn btn-sm ${theme === 'dark' ? 'btn-light' : 'btn-dark'}`}
      onMouseDown={start_press}
      onMouseUp={end_press}
      onMouseLeave={end_press}
      onTouchStart={start_press}
      onTouchEnd={end_press}
      aria-pressed={pressing}
      title="Long press to toggle theme"
    >
      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}

function use_state_with_storage(key, initial_value) {
  const [value, set_value] = useState(() => {
    try {
      const raw = localStorage.getItem(key)
      return raw ? JSON.parse(raw) : initial_value
    } catch {
      return initial_value
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {}
  }, [key, value])

  return [value, set_value]
}

