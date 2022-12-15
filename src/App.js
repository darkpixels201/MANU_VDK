import "./App.css";
import { icons } from "./Assets/Icons";
import React, { Image, Text } from "react";
import Home from "./Screens/Home";
import { bold, Poppins } from "./utils/Fonts";
import Cart from "./Screens/Cart/Cart";
import CompareProducts from "./Screens/CompareProducts/CompareProducts";
import { Categories } from "./Screens/Categories/Categories";

function App() {
  return (
    <div>
      {/* <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
      }
    `}</style>
      {/* <Home /> */}
      <Categories/>
    </div>
  );
}

export default App;
