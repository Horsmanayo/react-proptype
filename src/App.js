import logo from "./logo.svg";
import "./App.css";
import ShowingFemi from "./components/ShowingFemi";
import Header from "./components/Header";
import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <ShowingFemi />
    </React.Fragment>
  );
}

export default App;
