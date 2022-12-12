import { CCardTitle } from "@coreui/react";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import CustomSearchFilter from "./CustomSearchFilter";

function CustomHeader(props, justifyContent) {
  console.log(window.innerWidth);
  return (
    // <Container >
      <div
      style={{
        padding: 15,
        display: "flex",
        // flexDirection:"row",
        justifyContent: props.justifyContent || "space-around",
        flexWrap:"wrap",

      }}>
        {/* <Row
          
        > */}
          <Col xs={"auto"} md={3} style={{ width:"auto", marginBottom: window.innerWidth <= 775 ? 10 : null,   }}>
            <CCardTitle
              className=" mt-2 mb-0 "
              style={{fontWeight:400, fontSize: 25 }}
            >
              {props.title}
            </CCardTitle>
          </Col>
          {props.buttonName ? (
            <Col xs={"auto"} md={5}>
              <Link to={props.linkTo}>
                <button
                  type="button"
                  className="text-light br-50"
                  style={{
                    // marginBottom: window.innerWidth <= 775 ? 20 : null,
                    // marginTop: window.innerWidth <= 775 ? 10 : null,
                    width: 200,
                    height: 50,
                    borderRadius: 50,
                    // background: "linear-gradient(#0077b6 ,#0096c7, #48cae4)",
                    background: "linear-gradient(to right,#085CFC, #4685FC)",
                    boxShadow: "2px 2px 10px #4483FD",
                  }}
                >
                  {" "}
                  <BsPlusLg style={{ marginRight: 15 }} />
                  {props.buttonName}
                </button>
              </Link>
            </Col>
          ) : (
            null
          )
          }

          {/* <Col xs={"auto"} md={4} style={{ width: window.innerWidth <= 775 ? "100%" : null,}}>
            {props.search ? (
              <CustomSearchFilter
                placeholder={"Search Product"}
                onChange={props.filterBySearch}
              />
            ) : null}
          </Col> */}
        {/* </Row> */}

        {props.line ? (
          <hr
            style={{
              background: "grey",
              color: "grey",
              borderColor: "grey",
              height: "3px",
            }}
          />
        ) : null}
      </div>
    // </Container>
  );
}

export default CustomHeader;
