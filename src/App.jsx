import React from "react";
import Home from "./pages/Home/Home";
import Nav from "./containers/navbar/Nav";
import "./App.css";

const App = () => {
  return (
    <div>
      <Nav />
      <Home />
    </div>
  );
};
export default App;
