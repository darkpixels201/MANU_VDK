import { useEffect, useRef, useState } from "react";
import { icons } from "../Assets/Icons";
import { images } from "../Assets/Images";
import "../Assets/Style/DropDown.css";
import CustomText from "../Components/CustomText";
import Spacer from "../Components/Spacer";
import { colors } from "../utils/Colors";

const SearchComponent = (props) => {
  const SearchArray = [
    {
      id: 1,
      image: images.slide8,
      name: "Brasier de Banda Ancha  para Soporte en Espalda",
      price: "$95.00",
    },
    {
      id: 2,
      image: images.slide9,
      name: "Brasier de Banda Ancha  para Soporte en Espalda",
      price: "$95.00",
    },
    {
      id: 3,
      image: images.slide10,
      name: "Brasier de Banda Ancha  para Soporte en Espalda",
      price: "$95.00",
    }
  ];
  const [open, setOpen] = useState(false);
  //   const [open, setOpen] = useState(false);

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
    <div className="App" ref={menuRef}>
      <div>
        <img
          src={icons.search}
          style={{
            height: 15,
            width: 15,
            alignSelf: "center",
            textAlign: "center",
            position: "absolute",
            marginTop: 3,
            paddingLeft: 5,
          }}
        />
        <input
          style={{
            height: 20,
            width: 120,
            border: "none",
            alignSelf: "center",
            // borderBlock: "white",
            borderRadius: 10,
            outlineColor: colors.lightGray,
            borderWidth: 0.1,
            paddingLeft: 25,
            borderWidth: 0.1,
            // outline:"none"
          }}
          onClick={() => {
            setOpen(!open);
          }}
          type="text"
          id="floatingInput"
        />
        <Spacer height={10} />

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

export default SearchComponent;
