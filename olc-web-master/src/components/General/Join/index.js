import React from "react";

// Mui Components
import { Box, Typography } from "@mui/material";

// styles
import "./styles.scss";

// Components
import GenericButton from "../Button";

const buttonStyles = {
  borderRadius: "200px",
  backgroundColor: "#000",
  color: "#fff",
  fontSize: "20px !important",
  fontWeight: "600 !important",
  width: "100% !important",
  maxWidth: "277px !important",
  height: "100%",
  minHeight: "60px",
  "&:hover": {
    backgroundColor: "#000",
  },
};

const Join = (props) => {
  const { title, subTitle, desc, button, span, component } = props;
  return (
    <Box
      className={
        component === "about" ? "aboutJoinWrapper joinWrapper" : "joinWrapper "
      }
    >
      {component === "about" && (
        <Typography
          variant="h2"
          sx={{
            fontSize: "40px",
          }}
        >
          {title} <br /> {subTitle}
        </Typography>
      )}
      {component === "products" && (
        <Typography
          variant="h2"
          sx={{
            fontSize: "45px",
          }}
        >
          {title} <br /> {subTitle}
        </Typography>
      )}
      <Typography
        sx={{
          maxWidth: component === "products" ? "740px" : "446px",
        }}
      >
        {desc}
      </Typography>
      {span && <Typography variant="h6">{span}</Typography>}
      {button && (
        <GenericButton
          title="Sign Up Now"
          style={buttonStyles}
          link="https://demo.openletterconnect.com/signup"
        />
      )}
    </Box>
  );
};

export default Join;
