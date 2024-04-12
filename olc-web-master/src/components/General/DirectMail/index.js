import React, { useState, useEffect } from "react";

// MUI Components
import { Box, Grid, Typography } from "@mui/material";

// Slick Slider
import Slider from "react-slick";

// styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";

// Card Component
import AppCard from "./AppCard";

const DirectMail = (props) => {
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
        <Grid container columnSpacing={5} rowSpacing={3}>
          <Box
            className="directMailHeading"
            sx={{
              margin:
                component === "solutions" ? "0 !important" : "100px 0 20px",
            }}
          >
            <Typography variant="h3">Direct Mail Applications</Typography>
          </Box>
          <Grid item lg={4} md={6}>
            <AppCard
              title="Promote a Sale"
              description="Offer special deals to your best customers with unique coupon codes."
            />
          </Grid>
          <Grid item lg={4} md={6}>
            <AppCard
              title="Win Back Customers"
              description="Re-engage with those who've drifted away by offering enticing discounts."
            />
          </Grid>
          <Grid item lg={4} md={6}>
            <AppCard
              title="Personalized Thank You Notes"
              description="Express gratitude with custom thank you and holiday messages."
            />
          </Grid>
          <Grid item lg={4} md={6}>
            <AppCard
              title="New Product Announcements"
              description="Alert customers about new products or services, including high-quality images and exclusive offers."
            />
          </Grid>
          <Grid item lg={4} md={6}>
            <AppCard
              title="Bulk Prospecting with Direct Mail"
              description="Maximize outreach with cost-effective, personalized direct mail. Trackable, impactful, and uniquely engaging."
            />
          </Grid>
          <Grid item lg={4} md={6}>
            <AppCard
              title="Event Invitations"
              description="Send out invitations for company events, making customers feel special and valued."
            />
          </Grid>
        </Grid>
      ) : (
        <>
          <Box className="directMailHeading">
            <Typography variant="h3">Direct Mail Applications</Typography>
          </Box>
          <Slider {...settings} className="directMailSlider">
            <Box
              sx={{
                display: "flex !important",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AppCard
                title="Promote a Sale"
                description="Offer special deals to your best customers with unique coupon codes."
              />
            </Box>
            <Box
              sx={{
                display: "flex !important",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AppCard
                title="Win Back Customers"
                description="Offer special deals to your best customers with unique coupon codes."
              />
            </Box>
            <Box
              sx={{
                display: "flex !important",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AppCard
                title="Personalized Thank You Notes"
                description="Offer special deals to your best customers with unique coupon codes."
              />
            </Box>
            <Box
              sx={{
                display: "flex !important",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AppCard
                title="New Product Announcements"
                description="Offer special deals to your best customers with unique coupon codes."
              />
            </Box>
            <Box
              sx={{
                display: "flex !important",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AppCard
                title="Bulk Prospecting with Direct Mail"
                description="Offer special deals to your best customers with unique coupon codes."
              />
            </Box>
            <Box
              sx={{
                display: "flex !important",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AppCard
                title="Event Invitations"
                description="Offer special deals to your best customers with unique coupon codes."
              />
            </Box>
          </Slider>
        </>
      )}
    </>
  );
};

export default DirectMail;
