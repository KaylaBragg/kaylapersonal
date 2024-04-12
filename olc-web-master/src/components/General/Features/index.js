import React, { useEffect, useState } from "react";

// MUI Components
import { Box, Button, Grid, Typography } from "@mui/material";

// images
import Template from "../../../assets/images/features/template-builder.gif";
import Unlimited from "../../../assets/images/features/mailings-second.png";
import Variable from "../../../assets/images/features/variable-second.png";
import Address from "../../../assets/images/features/verify-second.png";
import Integrations from "../../../assets/images/features/integrate-second.png";
import Analytics from "../../../assets/images/features/track-second.png";
import Streamline from "../../../assets/images/products/streamline-second.png";
import Marketing from "../../../assets/images/products/expert-second.png";
import Design from "../../../assets/images/products/design-second.png";
import One from "../../../assets/images/products/bulk-second.png";
import Impact from "../../../assets/images/about/impact-second.png";
import Technology from "../../../assets/images/about/advancce-second.png";
import Reach from "../../../assets/images/about/reach-second.png";
import Excel from "../../../assets/images/about/excel-second.png";

// styles
import "./styles.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Features = (props) => {
  const { flexDirection, button, title, span, spanSecond, desc } = props;
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
  }, []);
  return (
    <Grid
      container
      sx={
        screenWidth > 576
          ? {
              flexDirection: flexDirection ? "row-reverse" : "row",
              marginBottom: "20px",
            }
          : {
              flexDirection: "column-reverse",
            }
      }
      rowSpacing={{
        xs: 3,
      }}
    >
      <Grid item lg={6} md={6} sm={6} xs={12}>
        <Box
          className="featuresWrapper"
          sx={
            screenWidth > 576
              ? {
                  marginLeft: flexDirection ? "40px" : "",
                }
              : {
                  marginLeft: "0px",
                }
          }
        >
          {!button ? "" : <Button>Features Overview</Button>}
          {title === "Template" && (
            <Typography variant="h2">
              {title} <span>{span}</span>
            </Typography>
          )}
          {title === "Unlimited" && (
            <Typography variant="h2">
              {title}
              <br />
              <span>{span}</span>
            </Typography>
          )}
          {title === "Fields & Variable Data" && (
            <Typography variant="h2">
              <span>{span}</span> {title}
            </Typography>
          )}
          {title === "Address" && (
            <Typography variant="h2">
              {title} <span>{span}</span>
              <br /> & <span>{spanSecond}</span>
            </Typography>
          )}
          {title === "Integrations" && (
            <Typography variant="h2">
              <span>{span}</span> {title}
            </Typography>
          )}
          {title === "and" && span === "Analytics" && (
            <Typography variant="h2">
              <span>{span}</span> {title} <span>{spanSecond}</span>
            </Typography>
          )}
          {title === "Streamline Your Efforts." && (
            <Typography
              variant="h2"
              sx={{
                width: "100%",
                maxWidth: "480px",
                "@media (max-width: 576px)": {
                  textAlign: "center",
                  maxWidth: "294px",
                  margin: "0 auto",
                  fontSize: "30px !important",
                },
              }}
            >
              {title} <span>{span}</span>
            </Typography>
          )}
          {title === "Marketing Consultants" && (
            <Typography
              variant="h2"
              sx={{
                width: "100%",
                maxWidth: "414px",
              }}
            >
              <span>{span}</span> {title}
            </Typography>
          )}
          {title === "Design Services" && (
            <Typography variant="h2">
              <span>{span}</span> <br />
              {title}
            </Typography>
          )}
          {title === "One-Off and" && (
            <Typography
              variant="h2"
              sx={{
                width: "100%",
                maxWidth: "390px",
              }}
            >
              {title} <span>{span}</span>
            </Typography>
          )}
          {title === "for Maximum Impact:" && (
            <Typography
              variant="h2"
              sx={{
                width: "100%",
                maxWidth: "450px",
              }}
            >
              <span>{span}</span> {title}
            </Typography>
          )}
          {title === "and" && span === "Advanced Technology" && (
            <Typography
              variant="h2"
              sx={{
                width: "100%",
                maxWidth: "450px",
              }}
            >
              <span>{span}</span> {title} <span>{spanSecond}</span>
            </Typography>
          )}
          {title === "Reach:" && (
            <Typography variant="h2">
              <span>{span}</span> {title}
            </Typography>
          )}
          {title === "to" && (
            <Typography variant="h2">
              <span>{span}</span> {title} <span>{spanSecond}</span>
            </Typography>
          )}
          {title === "Template" && (
            <Typography
              sx={{
                maxWidth: "436px",
              }}
            >
              {desc}
            </Typography>
          )}
          {title === "Unlimited" && (
            <Typography
              sx={{
                maxWidth: "400px",
              }}
            >
              {desc}
            </Typography>
          )}
          {title === "Fields & Variable Data" && (
            <Typography
              sx={{
                maxWidth: "368px",
              }}
            >
              {desc}
            </Typography>
          )}
          {title === "Address" && (
            <Typography
              sx={{
                maxWidth: "385px",
              }}
            >
              {desc}
            </Typography>
          )}
          {title === "Integrations" && (
            <Typography
              sx={{
                maxWidth: "408px",
              }}
            >
              {desc}
            </Typography>
          )}
          {title === "and" && span === "Analytics" && (
            <Typography
              sx={{
                maxWidth: "400px",
              }}
            >
              {desc}
            </Typography>
          )}
          {title === "for Maximum Impact:" && (
            <Typography
              sx={{
                maxWidth: "486px",
              }}
            >
              {desc}
            </Typography>
          )}
          {title === "and" && span === "Advanced Technology" && (
            <Typography
              sx={{
                maxWidth: "445px",
              }}
            >
              {desc}
            </Typography>
          )}
          {title === "Reach:" && (
            <Typography
              sx={{
                maxWidth: "486px",
              }}
            >
              {desc}
            </Typography>
          )}
          {title === "to" && (
            <Typography
              sx={{
                maxWidth: "440px",
              }}
            >
              {desc}
            </Typography>
          )}
          {title === "Streamline Your Efforts." && (
            <Typography
              sx={{
                width: "100%",
                maxWidth: "432px",
                "@media (max-width: 576px)": {
                  textAlign: "center",
                },
              }}
            >
              {desc}
            </Typography>
          )}
          {title === "Marketing Consultants" && (
            <Typography
              sx={{
                width: "100%",
                maxWidth: "428px",
              }}
            >
              {desc}
            </Typography>
          )}
          {title === "Design Services" && (
            <Typography
              sx={{
                width: "100%",
                maxWidth: "394px",
              }}
            >
              {desc}
            </Typography>
          )}
          {title === "One-Off and" && (
            <Typography
              sx={{
                width: "100%",
                maxWidth: "367px",
              }}
            >
              {desc}
            </Typography>
          )}
        </Box>
      </Grid>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        <Box className="imageWrapper">
          {title === "Template" && (
            <LazyLoadImage effect="blur" src={Template} alt="template" />
          )}
          {title === "Unlimited" && (
            <LazyLoadImage effect="blur" src={Unlimited} alt="template" />
          )}
          {title === "Fields & Variable Data" && (
            <LazyLoadImage effect="blur" src={Variable} alt="template" />
          )}
          {title === "Address" && (
            <LazyLoadImage effect="blur" src={Address} alt="template" />
          )}
          {title === "Integrations" && (
            <LazyLoadImage effect="blur" src={Integrations} alt="template" />
          )}
          {span === "Analytics" && (
            <LazyLoadImage effect="blur" src={Analytics} alt="template" />
          )}
          {title === "Streamline Your Efforts." && (
            <LazyLoadImage effect="blur" src={Streamline} alt="template" />
          )}
          {title === "Marketing Consultants" && (
            <LazyLoadImage effect="blur" src={Marketing} alt="template" />
          )}
          {title === "Design Services" && (
            <LazyLoadImage effect="blur" src={Design} alt="template" />
          )}
          {title === "One-Off and" && (
            <LazyLoadImage effect="blur" src={One} alt="template" />
          )}
          {title === "for Maximum Impact:" && (
            <LazyLoadImage effect="blur" src={Impact} alt="template" />
          )}
          {title === "and" && span === "Advanced Technology" && (
            <LazyLoadImage effect="blur" src={Technology} alt="template" />
          )}
          {title === "Reach:" && (
            <LazyLoadImage effect="blur" src={Reach} alt="template" />
          )}
          {title === "to" && (
            <LazyLoadImage effect="blur" src={Excel} alt="template" />
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Features;
