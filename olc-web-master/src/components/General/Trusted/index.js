import React, { useEffect, useState } from "react";

// MUI Components
import { Box, Grid, Typography } from "@mui/material";

// Data
import { trustedImages } from "../../../utils/data";

// Slick Slider
import Slider from "react-slick";

// styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Trusted = (props) => {
  const { component } = props;
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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  return (
    <>
      {screenWidth > 900 ? (
        <Grid container>
          <Grid item lg={12}>
            <Box
              className="trustedWrapper"
              sx={{
                margin:
                  component === "pricing"
                    ? "0 auto"
                    : component === "products"
                    ? "0 auto 89px"
                    : "0 auto 150px",
              }}
            >
              <Typography>Trusted by 10,000+ Businesses</Typography>
              <Box className="trustedImages">
                {trustedImages.map((item) => (
                  <LazyLoadImage
                    key={item.id}
                    src={item.image}
                    alt={`trusted ${item.id}`}
                    effect="blur"
                  />
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      ) : (
        <>
          <Box
            className="trustedWrapper"
            sx={{
              margin:
                component === "pricing"
                  ? "50px auto 0"
                  : component === "products"
                  ? "0 auto 89px"
                  : "",
            }}
          >
            <Typography>Trusted by 10,000+ Businesses</Typography>
          </Box>
          <Slider {...settings} className="trustedSliderWrapper">
            {trustedImages.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: "flex !important",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="trustedSlider"
              >
                <img src={item.image} alt={`trusted ${item.id}`} />
              </Box>
            ))}
          </Slider>
        </>
      )}
    </>
  );
};

export default Trusted;
