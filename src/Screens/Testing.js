import React, { useState, useEffect, useRef } from 'react';
import Swiper from 'react-id-swiper';
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { colors } from "../utils/Colors";
import { images } from "../Assets/Images";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { icons } from "../Assets/Icons";
import CustomText from "../Components/CustomText";
import {
  Pagination,
  Navigation,
  Lazy,
  Controller
} from "../../node_modules/swiper/js/swiper.esm";
// from "swiper/dist/js/swiper.esm";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Testing() {
  // Swiper instance
  const [swiper, updateSwiper] = useState(null);
  // Swiper thumbsinstance
  const [swiperThumbs, updateSwiperThumbs] = useState(null);
  // Params definition
  let params = {
    modules: [Controller, Pagination, Navigation, Lazy],
    preloadImages: false,
    lazy: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    loop: false,
    spaceBetween: 30,
    getSwiper: updateSwiper // Get swiper instance callback
  };
  let thumbsParams = {
    modules: [Controller],
    slideToClickedSlide: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 10,
    getSwiper: updateSwiperThumbs, // Get swiper instance callback
    style: {
      width: "100px"
    }
  };

  // Bind swiper and swiper thumbs
  useEffect(() => {
    if (swiper && swiperThumbs) {
      swiper.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiper;
    }
  }, [swiper, swiperThumbs]);

  const navbar = [
    {
      id: 1,
      name: images.banner,
    },
    {
      id: 2,
      name: images.banner,
    },
    // {
    //   id: 3,
    //   name: images.banner,
    // },
    // {
    //   id: 4,
    //   name: images.banner,
    // },
    // {
    //   id: 5,
    //   name: images.banner,
    // },
    // {
    //   id: 6,
    //   name: images.banner,
    // },
    // {
    //   id: 7,
    //   name: images.banner,
    // },
  ];
  return (
    <div>
      {/* <Swiper {...gallerySwiperParams}>
          {navbar.map((item, index) => (
            <div key={index}>
              <img style={{height:50, width:50}} src={item.name} />
            </div>
          ))}
      </Swiper> */}
           <Swiper {...params}>
        {images.map((image, idx) => (
          <div key={`slide_${idx}`} style={{ width: "100px" }}>
            <img
              // @note w/o unique key the image won't be updated when the image set updates.
              key={image.src}
              className="swiper-lazy"
              data-src={image.src}
            />
          </div>
        ))}
      </Swiper>

      <Swiper {...thumbsParams}>
        {images.map((image, idx) => (
          <div key={`slide_${idx}`} className="swiper-slide-auto">
            <img
              // @note w/o unique key the image won't be updated when the image set updates.
              key={image.src}
              className="swiper-lazy"
              // @note Ignore that the images aren't matching
              src={image.src.replace("320/240", "100/100")}
            />
          </div>
        ))}
      </Swiper>
        {/* <Swiper {...thumbnailSwiperParams} ref={thumbnailSwiper}>
          <div style={{ backgroundImage:'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg' }} />
          <div style={{ backgroundImage:'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg' }} />
          <div style={{ backgroundImage:'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg' }} />
          <div style={{ backgroundImage:'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg' }} />
          <div style={{ backgroundImage:'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg' }} />
        </Swiper> */}
      {/* <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} >
          <Grid item xs>
            <Item>{"Logo"}</Item>
          </Grid>
          <div item xs={6} >
            {navbar.map((item, index) => (
              <div key={index} style={{ display:"flex", flexDirection:"row"}} >
                <div>{item.name}</div>
              </div>
            ))}
            </div>

            <Grid item xs>
            <div style={{ textAlign: "center" }}>
              <img
                src={icons.search}
                style={{
                  height: 15,
                  width: 15,
                }}
              />
              <input
                style={{
                  height: 4,
                  border: "none",
                }}
                type="text"
                id="floatingInput"
              />
            </div>
            <div style={{ height: 10, width: 10 }}>
              <img src={icons.shoppingCart} style={{ height: 20, width: 20 }} />
            </div>
            </Grid>
        </Grid>
      </Box> */}
    </div>
  );
}

// const useStyles = makeStyles({
//   header: {
//     backgroundColor: "red",
//     paddingRight: "79px",
//     paddingLeft: "118px",
//     "@media (max-width: 900px)": {
//       paddingLeft: 0,
//     },
//   },
// });

export default Testing;
