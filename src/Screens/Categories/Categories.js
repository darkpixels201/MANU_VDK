import React, { useState } from "react";
import CategoryMobile from "../../Components/CatergoryComponents/CategoryMobile";
import "./style.css";
import "../../Assets/Style/font.css";
import { CartWeb } from "../../Components/CatergoryComponents/CatWeb/CatWeb";

export const Categories = () => {
  const [open, setOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  return (
    <div>
      {window.innerWidth <= 480 ? (
        <CategoryMobile />
      ) : (
        <CartWeb
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
        />
      )}
    </div>
  );
};
