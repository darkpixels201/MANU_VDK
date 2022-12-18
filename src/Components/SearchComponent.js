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
    {
      id: 5,
      image: images.banner,
      name: "Brasier de Banda Ancha  para Soporte en Espalda",
      price: "$95.00",
    },
    {
      id: 6,
      image: images.banner,
      name: "Brasier de Banda Ancha  para Soporte en Espalda",
      price: "$95.00",
    },
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
            <div
              style={{
                height: 300,
                overflowX: "hidden",
                overflowY: "auto",
                textAlign: "justify",
              }}
            >
              {SearchArray.map((item, index) => (
                <div key={index}>
                  <DropdownItem
                    text={item.name}
                    img={item.image}
                    price={item.price}
                  />
                </div>
              ))}
            </div>
            <Footer />
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
        <div style={{ width: 80 }}>
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

function Footer() {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: colors.grey,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 30,
      }}
    >
      <CustomText
        title={"VER TODOS LOS RESULTADOS  (25)"}
        fontSize={7}
        color={colors.white}
      />
    </div>
  );
}

export default SearchComponent;
