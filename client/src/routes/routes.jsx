import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '../modules/layout/Layout'
import Homepages from '../routes/Homepages'
import Contact from '../modules/Homepages/Contact'

const routes = () => {
  return (
    <div className="min-h-screen flex flex-col relative z-10">
       <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<Homepages/>}/>
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>
    </div>
  )
}

export default routes
