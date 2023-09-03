import React from "react";
import AppLogo from "./components/AppLogo";
import "./App.css";
import Pomotask from "./components/Pomotask";

const App = () => {
  return (
    <>
      <div className="container">
        <AppLogo />
        <Pomotask />
      </div>
    </>
  );
};

export default App;
