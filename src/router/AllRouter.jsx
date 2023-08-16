import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import IndexPage from '../pages/home';
import About from '../pages/About';
import NavBar from '../components/navbar';
import Contact from '../pages/Contact';
import Footer from '../components/footer';
import Login from '../pages/login';
import SignUp from '../pages/SignUp';
import Profile from '../pages/profile';
import AdPage from '../pages/adpage';

function AllRouter() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route index path='/' element={<IndexPage />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/login' element={<Login />} />
                <Route path='/adpage' element={<AdPage />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default AllRouter;
