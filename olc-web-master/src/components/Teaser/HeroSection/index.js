import React, { useState, useEffect } from "react";

// MUI Components
import { Box, Grid, Typography } from "@mui/material";

// Generic Button Component
import GenericButton from "../../General/Button";

// images
import MainHero from "../../../assets/images/hero-section/target.webp";
import Product from "../../../assets/images/hero-section/product-main.svg";
import Solution from "../../../assets/images/solutions/solution-hero-second.png";

// styles
import "./styles.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

const startedBtn = {
  borderRadius: "200px",
  backgroundColor: "#000000",
  color: "white",
  border: "1.5px solid #000000",
  width: "100%",
  maxWidth: "277px",
  height: "100%",
  fontSize: "20px !important",
  minHeight: "60px",
  "&:hover": {
    backgroundColor: "#000000",
  },
  "@media (max-width: 576px)": {
    display: "none",
  },
};

const startedBtnMobile = {
  display: "none",
  borderRadius: "200px",
  backgroundColor: "#000000",
  color: "white",
  width: "100%",
  maxWidth: "330px",
  height: "100%",
  minHeight: "71px",
  fontSize: "20px !important",
  border: "1.5px solid #000000",
  "&:hover": {
    backgroundColor: "#000000",
  },
  "@media (max-width: 576px)": {
    display: "block",
  },
};

const HeroSection = (props) => {
  const { title, subTitle, description, component } = props;
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
  return (
    <Grid container>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Box
          className={
            component === "pricing"
              ? "heroSectionWrapper pricingHero"
              : "heroSectionWrapper"
          }
          sx={{
            margin:
              component === "home"
                ? "43px auto 10px !important"
                : component === "products"
                ? "43px auto 10px !important"
                : component === "solutions"
                ? "43px auto 0px !important"
                : "43px auto 83px",
          }}
        >
          {title === "Automate Your Direct Mail Campaigns" && (
            <Typography
              variant="h3"
              sx={{
                "@media (max-width: 575px)": {
                  textAlign: component === "home" && "left !important",
                },
              }}
            >
              {title.slice(0, 14)}
              <br />
              {title.slice(14, 35)}
            </Typography>
          )}
          {title === "Automate Your Direct Mail Campaigns" && (
            <Typography
              variant="h4"
              sx={{
                "@media (max-width: 575px)": {
                  textAlign: component === "home" && "left !important",
                },
              }}
            >
              {subTitle}
            </Typography>
          )}
          {title === "Your Gateway to Effortless Direct Mail Campaigns" && (
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                width: "100%",
              }}
            >
              {subTitle}
            </Typography>
          )}
          {title === "Your Gateway to Effortless Direct Mail Campaigns" && (
            <Typography variant="h3">{title}</Typography>
          )}
          {title === "Tailored Solutions for Every Need" && (
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                width: "100%",
              }}
            >
              {subTitle}
            </Typography>
          )}
          {title === "Tailored Solutions for Every Need" && (
            <Typography
              variant="h3"
              sx={{
                width: "100%",
                maxWidth: "724px",
              }}
            >
              {title}
            </Typography>
          )}
          {title === "Pioneering the Future of Direct Mail Marketing" ? (
            screenWidth < 576 ? (
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  width: "100%",
                  fontSize: "30px !important",
                }}
              >
                {subTitle.slice(0, 10)}
                <br />
                {subTitle.slice(10, 29)}
              </Typography>
            ) : (
              <Typography
                sx={{
                  fontSize: "25px !important",
                  fontWeight: "600 !important",
                }}
              >
                {subTitle}
              </Typography>
            )
          ) : null}
          {title === "Pioneering the Future of Direct Mail Marketing" && (
            <Typography
              variant="h3"
              sx={{
                "@media (max-width: 576px)": {
                  maxWidth: "300px",
                  margin: "0 auto",
                },
              }}
            >
              {title}
            </Typography>
          )}
          {title ===
            "Simplify Your Direct Mail Campaigns with Affordable Plans" && (
            <Typography variant="h3">{title}</Typography>
          )}
          {title === "Pioneering the Future of Direct Mail Marketing" ? null : (
            <Typography
              sx={{
                maxWidth:
                  component === "products"
                    ? "730px !important"
                    : component === "solutions"
                    ? "607px !important"
                    : "",
                "@media (max-width: 575px)": {
                  textAlign: component === "home" && "left !important",
                  maxWidth:
                    component === "products"
                      ? "286px !important"
                      : component === "solutions"
                      ? "342px !important"
                      : "",
                  margin: component === "products" && "0 auto !important",
                },
              }}
            >
              {description}
            </Typography>
          )}
          {title === "Automate Your Direct Mail Campaigns" && (
            <GenericButton
              title="Get Started for Free!"
              style={startedBtn}
              link="https://demo.openletterconnect.com/signup"
            />
          )}
          {title ===
            "Simplify Your Direct Mail Campaigns with Affordable Plans" ||
          title === "Pioneering the Future of Direct Mail Marketing" ? null : (
            <Box
              sx={{
                height: "100%",
                minHeight: "600px",
                "@media (max-width: 992px)": {
                  minHeight: "auto",
                },
              }}
            >
              {title === "Automate Your Direct Mail Campaigns" && (
                <LazyLoadImage
                  className="heroImage"
                  effect="blur"
                  src={MainHero}
                  alt="hero"
                />
              )}
              {title === "Your Gateway to Effortless Direct Mail Campaigns" && (
                <LazyLoadImage
                  className="heroImage"
                  effect="blur"
                  src={Product}
                  alt="hero"
                />
              )}
              {title === "Tailored Solutions for Every Need" && (
                <LazyLoadImage
                  className="heroImage"
                  effect="blur"
                  src={Solution}
                  alt="hero"
                />
              )}
            </Box>
          )}
          <Box className="btnWrapper">
            {title === "Automate Your Direct Mail Campaigns" && (
              <GenericButton
                title="Get Started for Free!"
                style={startedBtnMobile}
                link="https://demo.openletterconnect.com/signup"
              />
            )}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HeroSection;
