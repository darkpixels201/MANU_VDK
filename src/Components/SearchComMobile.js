import { display } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { icons } from "../Assets/Icons";
import { images } from "../Assets/Images";
import "../Assets/Style/DropDown.css";
import CustomText from "../Components/CustomText";
import Spacer from "../Components/Spacer";
import { colors } from "../utils/Colors";

const SearchComMobile = () => {
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
    <div
      style={{
        backgroundColor: colors.lightestGrey,
        height: window.innerHeight,
      }}
    >
      <div
        className="App"
        ref={menuRef}
        style={{
          height: 100,
          backgroundColor: colors.black,
          width: "100%",
          // display: "flex",
          justifyContent: "center",
        }}
      >
        <Spacer height={40} />
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
            // setOpen(!open);
          }}
        />
        <input
          placeholder="DIANE & GEORI"
          style={{
            height: 20,
            width: window.innerWidth <= 700 ? 150 : 120,
            alignSelf: "center",
            borderRadius: 10,
            borderColor: colors.lightGray,
            borderStyle: "solid",
            fontFamily: "ClashDisplay-regular",
            paddingLeft: 25,
            borderWidth: open ? 1 : 0,
            backgroundColor:
              window.innerWidth <= 700 ? colors.lightestGrey : "",
            outline: "none",
          }}
          type="text"
          id="floatingInput"
          onClick={() => {
            // setOpen(!open);
          }}
        />
        {/* <Spacer height={10} /> */}

        
      </div>
      {/* {
      id: 1,
      image: images.slide8,
      name1: "Brasier de Banda Ancha ",
      name2: " para ",
      name3: " Soporte en Espalda",
      price: "$95.00",
    }, */}
      <div style={{ padding: 30 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <CustomText
            title={"RESULT TABOS"}
            fontSize={18}
            textAlign="left"
            fontFamily="ClashDisplay-regular"
            maxLines={1}
          />
          <CustomText
            title={"Mostrando 3 de 25"}
            fontSize={14}
            textAlign="left"
            fontFamily="ClashDisplay-regular"
            maxLines={1}
          />
        </div>
        <Spacer height={30} />
        {[images.slide8, images.slide6, images.slide7].map((image) => (
          <>
            <div style={{ display: "flex" }}>
              <div>
                <img
                  src={image}
                  style={{
                    height: 130,
                    width: 130,
                    backgroundColor: colors.white,
                  }}
                ></img>
                <Spacer height={10} />
              </div>
              <Spacer width={30} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  paddingBottom: 20,
                  width: 160,
                }}
              >
                <p style={{ fontFamily: "ClashDisplay-regular", fontSize: 16 }}>
                  <span style={{ fontFamily: "ClashDisplay-SemiBold" }}>
                    BRASIER DE BANDA ANCHA
                  </span>
                  &nbsp; PARA SOPORTE EN ESPALDA
                </p>

                <CustomText
                  title={"$95.00"}
                  fontSize={14}
                  textAlign="left"
                  fontFamily="ClashDisplay-semibold"
                  maxLines={1}
                />
              </div>
            </div>
            <Spacer height={30} />
          </>
        ))}
      </div>
      {Footer()}
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
        backgroundColor: colors.colorC,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        position: "fixed",
        bottom: 0,
      }}
    >
      <CustomText
        title={"VER TODOS LOS RESULTADOS  (25)"}
        fontSize={12}
        color={colors.white}
      />
    </div>
  );
}

export default SearchComMobile;
