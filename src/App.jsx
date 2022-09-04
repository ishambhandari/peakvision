import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adminlogin from "./pages/admin/Adminlogin.jsx";
import Adminsignup from "./pages/admin/Adminsignup.jsx";
import Landingpage from "./Landingpage.jsx";
import Works from "./pages/Works/Works.jsx";

import "./App.css";

const App = () => {
    return (
        <div className="app-root">
            <BrowserRouter>
                <Routes>
                    <Route path="/admin" element={<Adminlogin />} />
                    <Route path="/adminsignup" element={<Adminsignup />} />
                    <Route path="/" element={<Landingpage />} />
                    <Route path="/works" element={<Works />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};
export default App;
