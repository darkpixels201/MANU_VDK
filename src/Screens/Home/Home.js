import React, { useEffect, useState } from "react";
import Body from "../../Components/Body/Body";
import BottomBarNavigation from "../../Components/BottomNavigation";

import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import NewArrivals from "../../Components/NewArrivals/NewArrivals";
import BestSeller from "./Molecules/BestSeller";
import Testing from '../Testing'
import { colors } from "../../utils/Colors";
import { DropdownCom } from "../../Components/DropdownCom";


function Home() {
  const [on, setOn] = useState(false);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      console.log("updating height");
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);
  return (
    <div style={{overflowX:"hidden", overflowY:"scroll"}}>
      {/* <Testing /> */}
      <Navbar />
      <Body on={on} setOn={setOn} />
      <BestSeller />
      <NewArrivals on={on} setOn={setOn} />
      <Footer />
      {window.innerWidth <= 900 ? <BottomBarNavigation /> : ""}
      
    
    </div>
  );
}

export default Home;
