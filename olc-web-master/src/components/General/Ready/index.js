import React from "react";

// MUI Components
import { Box, Grid, Typography } from "@mui/material";

// styles
import "./styles.scss";
import GenericButton from "../Button";

const startedBtn = {
  borderRadius: "200px",
  width: "100%",
  maxWidth: "277px",
  height: "100%",
  minHeight: "60px",
  fontSize: "20px !important",
  backgroundColor: "#000000",
  color: "white",
  border: "1.5px solid #000000",
  "&:hover": {
    backgroundColor: "#000000",
  },
};

const Ready = () => {
  return (
    <Grid container>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Box className="readyWrapper">
          <Typography variant="h3">
            Ready to <span>Revolutionize</span> Your Direct Mail?
          </Typography>
          <Typography>
            Create a free account now and launch your first campaign in minutes.
            Unlock a new realm of customer engagement with Open Letter Connect.
          </Typography>
          <GenericButton
            title="Get Started for Free!"
            style={startedBtn}
            link="https://demo.openletterconnect.com/signup"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Ready;
