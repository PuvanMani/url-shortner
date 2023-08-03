import React from 'react'
import { Route, Routes } from 'react-router-dom'
import IndexPage from '../pages/Index'
import About from '../pages/About'
import Project from '../pages/Project'
import NavBar from '../components/navbar'
import SvgStyle from '../components/svgStyle'
import Contact from '../pages/Contact'

function AllRouter() {
    return (
        <div className="header">
            <div style={{ width: '100%' }}>
                <NavBar />
                <Routes>
                    <Route index path='/' element={<IndexPage />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/project' element={<Project />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </div>
            <SvgStyle />
        </div>
    )
}

export default AllRouter;
