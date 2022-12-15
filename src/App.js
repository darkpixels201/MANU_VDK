import "./App.css";
import { icons } from "./Assets/Icons";
import React, { Image, Text } from "react";
import Home from "./Screens/Home";
import { bold, Poppins } from "./utils/Fonts";
import Cart from "./Screens/Cart/Cart";
import { colors } from "./utils/Colors";

function App() {
  return (
    <div>
      {/* <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
      }
    `}</style> */}
      <Home />
      {/* <Cart/> */}
    </div>
  );
}

export default App;
