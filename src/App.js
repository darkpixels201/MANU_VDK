import "./App.css";
import { icons } from "./Assets/Icons";
import React, { Image, Text } from "react";
import Home from "./Screens/Home";
import { bold, Poppins } from "./utils/Fonts";

function App() {
  return (
    <div>
      <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
      }
    `}</style>
      <Home />
    </div>
  );
}

export default App;
