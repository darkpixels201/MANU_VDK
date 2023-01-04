import React, { useEffect, useState } from "react";
import Body from "../../Components/Body/Body";
import BottomBarNavigation from "../../Components/BottomNavigation";
import Footer from "../../Components/Footer";
import BestSeller from "../../Components/HomeComponents/BestSeller";
import Navbar from "../../Components/HomeComponents/Navbar";
import NewArrivals from "../../Components/NewArrivals/NewArrivals";
import Pratice from "../Pratice";
// import BestSeller from "./Molecules/BestSeller";

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
    <div>
      {/* <Pratice /> */}
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
