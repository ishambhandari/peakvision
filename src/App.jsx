import React from "react";
import Home from "./pages/Home/Home";
import NavSmall from "./containers/navbar/NavSmall";
import Nav from "./containers/navbar/Nav";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import "./App.css";

const App = () => {
    return (
        <div className="app-root">
            <div>
                <Nav className="nav-b" />
            </div>
            <Home />
            <About />
            <Contact />
        </div>
    );
};
export default App;
