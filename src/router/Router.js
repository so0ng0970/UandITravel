import React from "react";
import MainPage from "../pages/MainPage";
import TravelDetailPage from "../pages/TravelDetailPage";
import TravelEditPage from "../pages/TravelEditPage";

import TravelListPage from "../pages/TravelListPage";
import TravelReviewPage from "../pages/TravelReviewPage";

import {Route, Routes } from "react-router-dom";
import Form from "../components/travelform/Form";
import TravelFormPage from "../pages/TravelFormPage";
import LoginPage from "../pages/LoginPage";

function Router () {
    return (
        
            <Routes>
                <Route path="/" element={<MainPage />} /> 
                 <Route path="/form" element={<TravelFormPage/>}></Route>
                 <Route path="/form" element={<LoginPage/>}></Route>
                <Route path="/detail" element={<TravelDetailPage />} />
                <Route path="/edit" element={<TravelEditPage />} />
               
                <Route path="/list" element={<TravelListPage />} />
                <Route path="/review" element={<TravelReviewPage />} />
            </Routes>

    );
};

export default Router;
