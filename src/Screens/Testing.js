import { useEffect, useRef, useState } from "react";
import { icons } from "../Assets/Icons";
import { images } from "../Assets/Images";
import "../Assets/Style/DropDown.css";
import CustomText from "../Components/CustomText";
import Spacer from "../Components/Spacer";

const Testing = () => {
  const SearchArray = [
    {
      id: 1,
      image: images.banner,
      name: "Brasier de Banda Ancha  para Soporte en Espalda",
      price: "$95.00",
    },
    {
      id: 2,
      image: images.banner,
      name: "Brasier de Banda Ancha  para Soporte en Espalda",
      price: "$95.00",
    },
    {
      id: 3,
      image: images.banner,
      name: "Brasier de Banda Ancha  para Soporte en Espalda",
      price: "$95.00",
    },
    {
      id: 4,
      image: images.banner,
      name: "Brasier de Banda Ancha  para Soporte en Espalda",
      price: "$95.00",
    },
  ];
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="App">
      <div ref={menuRef}>
        <div
          onClick={() => {
            setOpen(!open);
          }}
        >
          <input />
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
            <Spacer height={20} />
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <CustomText title="RESULTADOS" fontSize={10} />
              <CustomText
                title="Mostrando 3 de 25"
                fontSize={8}
                textAlign="center"
              />
            </div>
            <Spacer height={20} />
            <div>
              {SearchArray.map((item, index) => (
                <div key={index}>
                  <DropdownItem
                    text={item.name}
                    img={item.image}
                    price={item.price}
                  />
                </div>
              ))}

              {/* <DropdownItem text={"My Profile"} />
            <DropdownItem text={"Edit Profile"} />
            <DropdownItem  text={"Inbox"} />
            <DropdownItem  text={"Settings"} />
            <DropdownItem text={"Helps"} />
            <DropdownItem  text={"Logout"} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function DropdownItem(props) {
  return (
    <div className="dropdownItem">
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <img src={props.img} style={{ height: 60, width: 60 }}></img>
          <Spacer height={10} />
        </div>
        <div style={{ width: 70 }}>
          <CustomText
            title={props.text}
            fontSize={8}
            textAlign="left"
            fontFamily="ClashDisplay-SemiBold"
          />
          <Spacer height={10} />
          <CustomText title={props.price} fontSize={8} textAlign="left" />
        </div>
      </div>
    </div>
  );
}

export default Testing;
