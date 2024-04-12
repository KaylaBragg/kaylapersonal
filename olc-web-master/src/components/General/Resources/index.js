import React from "react";

// MUI Components
import { Grid, Typography, Box } from "@mui/material";

// images
import Business from "../../../assets/images/solutions/business-second.png";
import Marketer from "../../../assets/images/solutions/marketer-second.png";
import Operators from "../../../assets/images/solutions/operator-second.png";
import Sales from "../../../assets/images/solutions/sales-second.png";
import Developers from "../../../assets/images/solutions/developer-second.png";

// styles
import "./styles.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Resources = (props) => {
  const { title, description, flexDirection } = props;
  return (
    <Grid
      container
      sx={{
        flexDirection: flexDirection ? "row-reverse" : "row",
        marginBottom: "50px",
        alignItems: "center",
        "@media (max-width: 576px)": {
          marginTop: "50px",
        },
      }}
    >
      <Grid item lg={6}>
        <Box
          className="resourcesWrapper"
          sx={{
            margin: !flexDirection ? "0 20px 0 0" : "0 0 0 20px",
            "@media (max-width: 576px)": {
              margin: "0",
            },
          }}
        >
          <Typography variant="h2">{title}</Typography>
          {title === "Business Owners" && (
            <Typography
              sx={{
                maxWidth: "433px",
              }}
            >
              {description}
            </Typography>
          )}
          {title === "Marketers" && (
            <Typography
              sx={{
                maxWidth: "451px",
              }}
            >
              {description}
            </Typography>
          )}
          {title === "Direct Mail Operators" && (
            <Typography
              sx={{
                maxWidth: "433px",
              }}
            >
              {description}
            </Typography>
          )}
          {title === "Sales Team" && (
            <Typography
              sx={{
                maxWidth: "451px",
              }}
            >
              {description}
            </Typography>
          )}
          {title === "Developers" && (
            <Typography
              sx={{
                maxWidth: "424px",
              }}
            >
              {description}
            </Typography>
          )}
        </Box>
      </Grid>
      <Grid item lg={6}>
        <Box className="resourceImage">
          {title === "Business Owners" && (
            <LazyLoadImage effect="blur" src={Business} alt="business" />
          )}
          {title === "Marketers" && (
            <LazyLoadImage effect="blur" src={Marketer} alt="marketer" />
          )}
          {title === "Direct Mail Operators" && (
            <LazyLoadImage effect="blur" src={Operators} alt="operators" />
          )}
          {title === "Sales Team" && (
            <LazyLoadImage effect="blur" src={Sales} alt="sales" />
          )}
          {title === "Developers" && (
            <LazyLoadImage effect="blur" src={Developers} alt="developers" />
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Resources;
