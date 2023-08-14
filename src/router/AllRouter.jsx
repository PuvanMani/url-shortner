import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import IndexPage from '../pages/Index';
import About from '../pages/About';
import NavBar from '../components/navbar';
import Contact from '../pages/Contact';
import Footer from '../components/footer';
import Login from '../pages/login';
import SignUp from '../pages/SignUp';

function AllRouter() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route index path='/' element={<IndexPage />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/login' element={<Login />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default AllRouter;
