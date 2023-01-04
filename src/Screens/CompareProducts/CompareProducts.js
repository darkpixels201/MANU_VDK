import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "../../Assets/Style/font.css";
import styled from "styled-components";
import { WebCompareProducts } from "../../Components/CompareProductsComponents/CompareWeb/WebCompareProducts";
import { MobileCompareProducts } from "../../Components/CompareProductsComponents/CompareMobile/MobileCompareProducts";

const CompareProducts = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  return (
    <div style={{}} >
      {/* {window.innerWidth <= 480 ?   <MobileCompareProducts /> : <WebCompareProducts 
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
        />} */}
      <MobileDiv>
        <MobileCompareProducts />
      </MobileDiv>
      <WebDiv>
        <WebCompareProducts
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
        />
      </WebDiv>
    </div>
  );
};

export default CompareProducts;

const MobileDiv = styled.div`
  @media only screen and (min-width: 480px) {
    display: none;
  }
`;
const WebDiv = styled.div`
  @media only screen and (max-width: 400px) {
    display: none;
  }
`;
