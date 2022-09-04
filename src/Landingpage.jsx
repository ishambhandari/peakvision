import React from "react";
import Home from "./pages/Home/Home";
import Nav from "./containers/navbar/Nav";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Clients from "./pages/Clients/Clients";

const Landingpage = () => {
    return (
        <div>
            <div>
                <Nav className="nav-b" />
            </div>
            <Home />
            <About />
            <Clients />
            <Contact />
        </div>
    );
};

export default Landingpage;
