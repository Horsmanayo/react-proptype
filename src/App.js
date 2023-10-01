import logo from "./logo.svg";
import "./App.css";
import ShowingFemi from "./components/ShowingFemi";
import Header from "./components/Header";
import React from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Quiz";
import Hooks from "./components/Hooks";
import RefExample from "./components/RefExample";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <RefExample />
      {/* <ShowingFemi /> */}
      {/* <Form /> */}
      <Hooks />
    </React.Fragment>
  );
}

export default App;
