import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Top from "./components/top/Top";

function App() {
  return (
    <div className="navbarContainer">
      <Header />
      <Top />
      <Main />
    </div>
  );
}

export default App;
