import React from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import Layout from '../pages/Static Pages/Layout';
import { Route, Routes } from 'react-router-dom';
import SignUp from "../pages/Auth Page/SignUp";
import Login from '../pages/Auth Page/login';
import MainDashboard from '../pages/Dashboard Page/DashbordLayout';

function AllRouter() {
    return (
        <div>
            {
                false ?
                    (<React.Fragment><NavBar />
                        <Layout />
                        <Footer /></React.Fragment>)
                    : (<React.Fragment>
                        {
                            false ?
                                <React.Fragment>
                                    <Routes>
                                        <Route path='/login' element={<Login />} />
                                        <Route path='/signup' element={<SignUp />} />
                                    </Routes>
                                </React.Fragment>
                                : (<React.Fragment>
                                    <MainDashboard />
                                </React.Fragment>)
                        }
                    </React.Fragment>)
            }
        </div>
    )
}

export default AllRouter;
