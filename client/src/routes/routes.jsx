import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '../modules/layout/Layout'
import {
  Home,
  AboutUs,
  ServicesPage,
  WhyChoosePage,
  ContactPage
} from './Pages'

const AppRoutes = () => {
  return (
    <div className="min-h-screen flex flex-col relative z-10">
       <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/why-choose-us" element={<WhyChoosePage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Route>
        </Routes>
    </div>
  )
}

export default AppRoutes
