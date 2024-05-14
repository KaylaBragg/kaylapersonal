import React, { useState } from "react";

// MUI Components
import { Box, Typography } from "@mui/material";

// Contact sales modal
import DialogContactSales from "../../General/DialogContactSales";

// styles
import "./styles.scss";
import GenericButton from "../../General/Button";

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
  "@media (max-width:575px)": {
    maxWidth: "277px !important",
    height: "100% !important",
    minHeight: "60px !important",
  },
};

const More = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box className="moreWrapper">
      <Box className="moreContent">
        <Typography variant="h2">
          Looking for <span>Something More</span>?
        </Typography>
        <Typography variant="h6">
          Contact Our Sales Team for Enterprise Solutions
        </Typography>
        <Typography>
          Our experts are at your disposal to design a package that perfectly
          aligns with your business goals and requirements. Whether it's a
          unique format, a special integration, or a large-scale operation, we
          are equipped to handle it all.
        </Typography>
      </Box>
      <GenericButton
        title="Contact Sales"
        style={buttonStyles}
        onClick={() => setOpen(true)}
      />
      <DialogContactSales open={open} setOpen={setOpen} />
    </Box>
  );
};

export default More;
