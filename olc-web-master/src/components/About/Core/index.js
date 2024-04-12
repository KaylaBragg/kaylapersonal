import React, { useState, useEffect } from "react";

// MUI Components
import { Typography, Box } from "@mui/material";

// Slick Slider
import Slider from "react-slick";

// styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";
import ValueCard from "./ValueCard";

const Core = () => {
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
      <Box className="coreHeading">
        <Typography>Our Core Values:</Typography>
        <Typography variant="h2">The Foundation of Our Approach</Typography>
      </Box>
      {screenWidth > 900 ? (
        <Box className="coreCardsWrapper">
          <ValueCard
            title="Innovation"
            desc="At Open Letter Connect, we are constantly on
the lookout for pioneering direct mail strategies that yield superior results for all our clients, irrespective of their industry."
          />
          <ValueCard
            title="Development"
            desc="Our journey is one of continuous growth and learning. We believe in evolving with our clients' needs, ensuring we always offer cutting-edge solutions."
          />
          <ValueCard
            title="Accountability"
            desc="Every team member at Open Letter Connect is dedicated to their role, understanding that our collective efforts lead to the success of our clients and our company."
          />
          <ValueCard
            title="Integrity"
            desc="We operate with the highest level of professionalism and ethical standards, ensuring that our practices align with our values and the expectations of our clients."
          />
        </Box>
      ) : (
        <Slider {...settings} className="coreSlider">
          <Box
            sx={{
              display: "flex !important",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ValueCard
              title="Innovation"
              desc="At Open Letter Connect, we are constantly on
the lookout for pioneering direct mail strategies that yield superior results for all our clients, irrespective of their industry."
            />
          </Box>
          <Box
            sx={{
              display: "flex !important",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ValueCard
              title="Development"
              desc="Our journey is one of continuous growth and learning. We believe in evolving with our clients' needs, ensuring we always offer cutting-edge solutions."
            />
          </Box>
          <Box
            sx={{
              display: "flex !important",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ValueCard
              title="Accountability"
              desc="Every team member at Open Letter Connect is dedicated to their role, understanding that our collective efforts lead to the success of our clients and our company."
            />
          </Box>
          <Box
            sx={{
              display: "flex !important",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ValueCard
              title="Integrity"
              desc="We operate with the highest level of professionalism and ethical standards, ensuring that our practices align with our values and the expectations of our clients."
            />
          </Box>
        </Slider>
      )}
    </>
  );
};

export default Core;
