import React, { useState } from "react";

// MUI Components
import { Box, Typography } from "@mui/material";
import GenericButton from "../../General/Button";

// Contact sales modal
import DialogContactSales from "../../General/DialogContactSales";

// styles
import "./styles.scss";

const buttonStyles = {
  borderRadius: "200px",
  backgroundColor: "#000",
  color: "#fff",
  fontSize: "20px !important",
  fontWeight: "600 !important",
  width: "100% !important",
  maxWidth: "215px !important",
  height: "100% !important",
  minHeight: "60px !important",
  "&:hover": {
    backgroundColor: "#000",
  },
  "@media (max-width:575px)": {
    maxWidth: "277px !important",
    height: "100% !important",
    minHeight: "60px !important",
  },
};

const contactStyles = {
  borderRadius: "200px",
  border: "2px solid #ED5C2F !important",
  backgroundColor: "transparent",
  color: "#ED5C2F",
  fontSize: "20px !important",
  fontWeight: "600 !important",
  width: "100% !important",
  maxWidth: "215px !important",
  height: "100% !important",
  minHeight: "60px !important",
  "&:hover": {
    backgroundColor: "transparent",
  },
  "@media (max-width:575px)": {
    maxWidth: "277px !important",
    height: "100% !important",
    minHeight: "60px !important",
  },
};

const Strategy = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box className="strategyWrapper">
      <Box className="strategyContent">
        <Typography variant="h4">
          Ready to <span>Transform</span> Your Direct Mail Strategy?
        </Typography>
        <Typography>
          Join Open Letter Connect Today and Make Every Message Matter!
        </Typography>
        <Box className="strategyBtns">
          <GenericButton
            title="Start Now"
            style={buttonStyles}
            link="https://demo.openletterconnect.com/signup"
          />
          <GenericButton
            title="Contact Sales"
            style={contactStyles}
            onClick={() => setOpen(true)}
          />
          <DialogContactSales open={open} setOpen={setOpen} />
        </Box>
      </Box>
    </Box>
  );
};

export default Strategy;
