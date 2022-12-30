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
      name1: "Brasier de Banda Ancha ",
      name2: " para ",
      name3: " Soporte en Espalda",
      price: "$95.00",
    },
    {
      id: 2,
      image: images.slide9,
      name1: "Brasier de Banda Ancha ",
      name2: " para ",
      name3: " Soporte en Espalda",
      price: "$95.00",
    },
    {
      id: 3,
      image: images.slide10,
      name1: "Brasier de Banda Ancha ",
      name2: " para ",
      name3: " Soporte en Espalda",
      price: "$95.00",
    },
    {
      id: 3,
      image: images.slide10,
      name1: "Brasier de Banda Ancha ",
      name2: " para ",
      name3: " Soporte en Espalda",
      price: "$95.00",
    },
    {
      id: 3,
      image: images.slide10,
      name1: "Brasier de Banda Ancha ",
      name2: " para ",
      name3: " Soporte en Espalda",
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
    <div className="App" ref={menuRef} >

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
            cursor: "pointer",
          }}
          onClick={() => {
            setOpen(!open);
          }}
        />
        <input
          style={{
            height: 20,
            width: window.innerWidth <= 700 ? 150 : 120,
            alignSelf: "center",
            borderRadius: 10,
            borderColor:colors.lightGray,
            borderStyle:"solid",
            paddingLeft: 25,
            borderWidth: open?1:0,
            backgroundColor:
              window.innerWidth <= 700 ? colors.lightestGrey : "",
            outline:"none",
              
          }}
          type="text"
          id="floatingInput"
          onClick={() => {
            setOpen(!open);
          }}
        />
        <Spacer height={10} />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            className={`dropdown-menu ${open? 'active' : 'inactive'}`}
            style={{ width: 300 }}
          >
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
                height: 250,
                overflowX: "hidden",
                overflowY: "auto",
                textAlign: "justify",
              }}
            >
              {SearchArray.map((item, index) => (
                <div key={index}>
                  <DropdownItem
                    text1={item.name1}
                    text2={item.name2}
                    text3={item.name3}
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
  );
};

function DropdownItem(props) {
  return (
    <div className="dropdownItem">
      <div
        style={{
          display: "flex",
          paddingLeft: 30,
          paddingRight: 30,
          justifyContent: "center",
        }}
      >
        <div>
          <img src={props.img} style={{ height: 60, width: 60 }}></img>
          <Spacer height={10} />
        </div>
        <Spacer width={10} />
        <div style={{}}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {/* <p><b>{props.text}</b>{props.text2}</p> */}

            <CustomText
              title={props.text1}
              fontSize={10}
              textAlign="left"
              fontFamily="ClashDisplay-SemiBold"
              maxLines={1}
            />
            <Spacer width={5} />
            <CustomText
              title={props.text2}
              fontSize={10}
              textAlign="left"
              // fontFamily="ClashDisplay-SemiBold"
              maxLines={1}
            />
          </div>
          <CustomText
            title={props.text3}
            fontSize={10}
            textAlign="left"
            // fontFamily="ClashDisplay-SemiBold"
            maxLines={1}
          />
          <Spacer height={26} />
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
        fontSize={9}
        color={colors.white}
      />
    </div>
  );
}

export default SearchComponent;
