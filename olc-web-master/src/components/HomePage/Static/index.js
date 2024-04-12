import React, { useState, useEffect } from "react";

// MUI Components
import { Box } from "@mui/material";

// Slick Slider
import Slider from "react-slick";

// images
import one from "../../../assets/images/static-images/one.svg";
import two from "../../../assets/images/static-images/two.svg";
import three from "../../../assets/images/static-images/three.svg";
import four from "../../../assets/images/static-images/slider-gif.gif";

// styles
import "./styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Static = () => {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
  };

  return (
    <>
      {screenWidth > 900 ? (
        <Box className="staticWrapper">
          <LazyLoadImage
            effect="blur"
            src={one}
            alt="one"
            className="imgStyles"
          />
          <LazyLoadImage
            effect="blur"
            src={two}
            alt="two"
            className="imgStyles"
          />
          <LazyLoadImage
            effect="blur"
            src={three}
            alt="three"
            className="imgStyles"
          />
          <LazyLoadImage
            effect="blur"
            src={four}
            alt="four"
            className="gifStyles"
          />
        </Box>
      ) : (
        <Slider {...settings} className="staticSlider">
          <Box className="staticImageSlide">
            <LazyLoadImage effect="blur" src={one} alt="one" />
          </Box>
          <Box className="staticImageSlide">
            <LazyLoadImage effect="blur" src={two} alt="two" />
          </Box>
          <Box className="staticImageSlide">
            <LazyLoadImage effect="blur" src={three} alt="three" />
          </Box>
          <Box className="staticGifSlide">
            <LazyLoadImage
              effect="blur"
              src={four}
              alt="four"
              className="gifStyles"
            />
          </Box>
        </Slider>
      )}
    </>
  );
};

export default Static;
