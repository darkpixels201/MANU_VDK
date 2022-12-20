import React from "react";

import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";
import { MobileCart } from "../../Components/CartComponents/MobileCart";
import { WebCart } from "../../Components/CartComponents/WebCart";

const Cart = () => {
  return (
    <div>
      <MobileDiv>
        <MobileCart />
      </MobileDiv>
      <WebDiv>
        <WebCart />
      </WebDiv>
      {/* {window.innerWidth <= 400 ? <MobileCart /> : <WebCart />} */}
    </div>
  );
};

export default Cart;

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
