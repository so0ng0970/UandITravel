import React from "react";
import MainPage from "../pages/MainPage";
import TravelDetailPage from "../pages/TravelDetailPage";
import TravelEditPage from "../pages/TravelEditPage";
import TravelFormPage from "../pages/TravelFormPage";
import TravelListPage from "../pages/TravelListPage";
import TravelReviewPage from "../pages/TravelReviewPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignPage from "../pages/SignPage";
import LoginPage from "../pages/LoginPage";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
             
          <Route path="/" element={<MainPage />} />
          <Route path="/detail" element={<TravelDetailPage />} />
          <Route path="/edit" element={<TravelEditPage />} />  
          <Route path="/form" element={<TravelFormPage />} />
          <Route path="/list" element={<TravelListPage />} />
          <Route path="/review" element={<TravelReviewPage />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/sign" element={<SignPage />} />
        </Routes>
        </BrowserRouter>
    );
};

export default Router;