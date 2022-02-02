import React from "react";
import Home from "./pages/Home/Home";
import Nav from "./containers/navbar/Nav";
import About from "./pages/About/About";
import "./App.css";

const App = () => {
  return (
    <div className="app-root">
      <Nav />
      <Home />
      <About />
    </div>
  );
};
export default App;
