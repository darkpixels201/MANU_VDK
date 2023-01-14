import "./App.css";
import React, { Suspense, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Categories } from "./Screens/Categories/Categories";
import { colors } from "./utils/Colors";

const Home = React.lazy(() => import("./Screens/Home/Home"));
const Cart = React.lazy(() => import("./Screens/Cart/Cart"));
const CompareProducts = React.lazy(() =>
  import("./Screens/CompareProducts/CompareProducts")
);

function App() {
  return (
    <div style={{backgroundColor:colors.white}} >
      <HashRouter>
        <Suspense>
          <Routes>
            <Route exact path="/" name="Home" element={<Home />} />
            <Route exact path="/cart" name="Cart" element={<Cart />} />
            <Route
              exact
              path="/categories"
              name="categories"
              element={<Categories />}
            />
            {/* <Route
              exact
              path="categories/compareproducts/:id"
              name="categories"
              element={<Categories />}
            /> */}
            <Route
              exact
              path="/compareproducts"
              name="categories"
              element={<CompareProducts />}
            />
            <Route
              exact
              path="/compareproducts/:id"
              name="categories"
              element={<CompareProducts />}
            />
             {/* <Route
              exact
              path="cart/compareproducts/:id"
              name="categories"
              element={<CompareProducts />}
            /> */}
          </Routes>
        </Suspense>
      </HashRouter>
    </div>
  );
}

export default App;
