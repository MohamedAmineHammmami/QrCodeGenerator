import React from "react";
import appStyle from "./App.module.css";
import Top from "./components/top/Top";
import Left from "./components/left/Left";
import Middle from "./components/middle/Middle";
import Right from "./components/right/Right";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <Top />
      <Navbar />
      <div className={appStyle.container}>
        <Left />
        <Middle />
        <Right />
      </div>
    </div>
  );
}

export default App;
