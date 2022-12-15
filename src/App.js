import "./App.css";
import { icons } from "./Assets/Icons";
import React, { Image, Text } from "react";
import Home from "./Screens/Home";
import { bold, Poppins } from "./utils/Fonts";
import Cart from "./Screens/Cart/Cart";
<<<<<<< HEAD
import { colors } from "./utils/Colors";
=======
import CompareProducts from "./Screens/CompareProducts/CompareProducts";
import { Categories } from "./Screens/Categories/Categories";
>>>>>>> 4400227e207014d6e094f23fbd8e2f04b3cbab84

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
