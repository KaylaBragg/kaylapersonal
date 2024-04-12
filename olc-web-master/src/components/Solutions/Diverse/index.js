import React, { useState, useEffect } from "react";

// MUI Components
import { Grid, Typography, Box } from "@mui/material";

// Card
import CaseCard from "./CaseCard";

// Slick Slider
import Slider from "react-slick";

// styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";

const Diverse = () => {
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
    autoplay: true,
  };
  return (
    <>
      {screenWidth > 900 ? (
        <>
          <Box className="diverseHeading">
            <Typography variant="h2">
              <span>Diverse Use Cases</span> for Every Marketing Strategy
            </Typography>
          </Box>
          <Box className="diverseCardWrapper">
            <CaseCard
              title="Customer Acquisition"
              description="Capture new markets and grow your customer base. Our targeted direct mail solutions allow you to reach potential customers with precision, turning prospects into loyal customers."
            />
            <CaseCard
              title="Customer Retention"
              description="Keep your customers engaged and loyal. Utilize personalized direct mail campaigns to maintain a strong relationship with your existing customer base, increasing customer satisfaction and loyalty."
            />
            <CaseCard
              title="Customer Reactivation"
              description="Re-engage inactive customers. With Open Letter Connect, craft customized mailers that resonate with your audience, rekindling interest and reactivating customer relationships."
            />
          </Box>
        </>
      ) : (
        <>
          <Box className="diverseHeading">
            <Typography variant="h2">
              <span>Diverse Use Cases</span> for Every Marketing Strategy
            </Typography>
          </Box>
          <Slider {...settings} className="directMailSlider">
            <Box
              sx={{
                display: "flex !important",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CaseCard
                title="Customer Acquisition"
                description="Capture new markets and grow your customer base. Our targeted direct mail solutions allow you to reach potential customers with precision, turning prospects into loyal customers."
              />
            </Box>
            <Box
              sx={{
                display: "flex !important",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CaseCard
                title="Customer Retention"
                description="Keep your customers engaged and loyal. Utilize personalized direct mail campaigns to maintain a strong relationship with your existing customer base, increasing customer satisfaction and loyalty."
              />
            </Box>
            <Box
              sx={{
                display: "flex !important",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CaseCard
                title="Customer Reactivation"
                description="Re-engage inactive customers. With Open Letter Connect, craft customized mailers that resonate with your audience, rekindling interest and reactivating customer relationships."
              />
            </Box>
          </Slider>
        </>
      )}
    </>
  );
};

export default Diverse;
