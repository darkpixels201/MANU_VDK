import React from "react";
import Body from "../../Components/Body/Body";
import Navbar from "../../Components/Navbar";
import Testing from "../Testing";
import BestSeller from "./Molecules/BestSeller";


function Home() {
  return (
    <div>
      {/* <Testing /> */}
      <Navbar />
      <Body />
      <BestSeller />
    </div>
  );
}

export default Home;
