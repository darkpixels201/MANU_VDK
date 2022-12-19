import "./App.css";
import { icons } from "./Assets/Icons";
import React, { Image, Text, useEffect, useState, Suspense } from "react";
// import Home from "./Screens/Home";
import { bold, Poppins } from "./utils/Fonts";
// import Cart from "./Screens/Cart/Cart";
import { HashRouter, Route, Routes } from "react-router-dom";
import { colors } from "./utils/Colors";
import CartNav from "./Components/CartComponents/CartNav";
import { Categories } from "./Screens/Categories/Categories";
import CategoryMobile from "./Components/CatergoryComponents/CategoryMobile";

// import CompareProducts from "./Screens/CompareProducts/CompareProducts";
// import { Categories } from "./Screens/Categories/Categories";
// import CategoryMobile from "./Components/CatergoryComponents/CategoryMobile";
const Home = React.lazy(() => import("./Screens/Home/Home"));
const Cart = React.lazy(() => import("./Screens/Cart/Cart"));
const CompareProducts = React.lazy(() => import("./Screens/CompareProducts/CompareProducts"));
// const Categories = React.lazy(() => import("./Screens/Categories/Categories"));

function App() {
  return (
    <div>
      <HashRouter>
        <Suspense>
          <Routes>
            <Route exact path="/" name="Home" element={<Home />} />
            <Route exact path="/cart" name="Cart" element={<Cart />} />
            <Route exact path="/categories" name="categories" element={<Categories />} />
            <Route exact path="/compareproducts" name="categories" element={<CompareProducts />} />
            {/* <Route exact path="/CategoryMobile" name="categoties" element={<CategoryMobile />} /> */}
            
          </Routes>
        </Suspense>
      </HashRouter>
    </div>
  );
}

export default App;
