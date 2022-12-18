import "./App.css";
import { icons } from "./Assets/Icons";
import React, { Image, Text, useEffect, useState } from "react";
import Home from "./Screens/Home";
import { bold, Poppins } from "./utils/Fonts";
import Cart from "./Screens/Cart/Cart";

import { colors } from "./utils/Colors";

import CompareProducts from "./Screens/CompareProducts/CompareProducts";
import { Categories } from "./Screens/Categories/Categories";
import CategoryMobile from "./Components/CatergoryComponents/CategoryMobile";


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
      {/* <Categories/> */}
      {/* <CategoryMobile /> */}
{/* <Cart/> */}
      {/* <CompareProducts/> */}

    </div>
  );
}

export default App;
