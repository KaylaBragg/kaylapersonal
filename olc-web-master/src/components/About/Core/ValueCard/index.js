import React from "react";

// MUI Components
import { Typography, Box } from "@mui/material";

// images
import Bulb from "../../../../assets/images/about/bulb-about.svg";
import Develop from "../../../../assets/images/about/develop-about.svg";
import Account from "../../../../assets/images/about/account-about.svg";
import Integrity from "../../../../assets/images/about/integrity-about.svg";

// styles
import "./styles.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ValueCard = (props) => {
  const { title, desc } = props;
  return (
    <Box
      className="valueCardWrapper"
      sx={{
        maxWidth: title === "Integrity" ? "230px" : "209px",
        padding: title === "Integrity" ? "50px 10px 50px 20px" : "50px 20px",
      }}
    >
      {title === "Innovation" && (
        <LazyLoadImage effect="blur" src={Bulb} alt="bulb" />
      )}
      {title === "Development" && (
        <LazyLoadImage effect="blur" src={Develop} alt="develop" />
      )}
      {title === "Accountability" && (
        <LazyLoadImage effect="blur" src={Account} alt="account" />
      )}
      {title === "Integrity" && (
        <LazyLoadImage effect="blur" src={Integrity} alt="integrity" />
      )}
      <Box className="valueCardContent">
        <Typography variant="h4">{title}</Typography>
        <Typography
          sx={{
            maxWidth: title === "Integrity" ? "230px" : "209px",
            "@media (max-width: 576px)": {
              maxWidth: "100%",
            },
          }}
        >
          {desc}
        </Typography>
      </Box>
    </Box>
  );
};

export default ValueCard;
