import React from "react";
import Section from "./components/Section";
import "./App.css";
import Logo from "./assets/logo.png";
import data from "./assets/data.json";

function App() {
  return (
    <div className="page">
      <img alt="logo" src={Logo} />
      <Section data={data} />
    </div>
  );
}

export default App;
