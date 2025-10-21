import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Glass_navbar from './components/glass_navbar.jsx'
import Home from './pages/home.jsx'
import Other from './pages/other.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Glass_navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/other" element={<Other />} />
      </Routes>
    </BrowserRouter>
  )
}

