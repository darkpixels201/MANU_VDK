import React, { useEffect } from "react";
import { icons } from "../Assets/Icons";

const MoveToTop = () => {
  useEffect(() => {
    //  scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignContent: "flex-end",
          bottom: 30,
          zIndex: 101,
          position: "fixed",
          cursor: "pointer",
        }}
      >
        <div style={{ height: 60, width: 60, paddingLeft: 40 }}>
          <img
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            src={icons.upArrowCircle}
            height={"100%"}
            width={"100%"}
          />
        </div>
        <div style={{ height: 60, width: 60, paddingRight: 40 }}>
          <img src={icons.whatsApp} height={"100%"} width={"100%"} />
        </div>
      </div>
    </div>
  );
};

export default MoveToTop;
