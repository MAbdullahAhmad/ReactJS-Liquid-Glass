import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Glass_navbar from './components/glass_navbar.jsx'
import Floating_theme_toggle from './components/floating_theme_toggle.jsx'
import Home_Page from './pages/home_page.jsx'
import About_Page from './pages/about_page.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Glass_navbar />
      <Floating_theme_toggle />
      <Routes>
        <Route path="/" element={<Home_Page />} />
        <Route path="/about" element={<About_Page />} />
      </Routes>
    </BrowserRouter>
  )
}
