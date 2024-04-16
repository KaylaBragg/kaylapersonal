import React from "react";

// MUI Components
import { Box, Grid, Typography } from "@mui/material";

// Generic Button Component
import GenericButton from "../../General/Button";

// images
import Offerings from "../../../assets/images/transform/offerings-second.png";

// styles
import "./styles.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

const styles = {
  borderRadius: "6px !important",
  width: "100%",
  maxWidth: "262px",
  height: "100%",
  maxHeight: "50px",
  background:
    "linear-gradient(90deg, #ED5C2F 0%, #F28230 51.04%, #FAB331 100%)",
  backdropFilter: "blur(2px)",
  color: "#FFFBF9",
  "@media (max-width: 900px)": {
    margin: "50px 0 25px",
  },
};

const Transform = () => {
  return (
    <Box className="transFormContainer">
      <Grid container>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{
            marginBottom: "15px",
            "@media (max-width: 576px)": {
              marginBottom: "0px",
            },
          }}
        >
          <Box className="transformWrapper">
            <Typography variant="h3">
              Transform Your <span>Direct Mail Strategy</span>
            </Typography>
            <Typography>
              Businesses leveraging Open Letter Connect experience a streamlined
              campaign management process, leading to more timely mailings and
              higher conversion rates. Discover how our platform enhances your
              marketing efficiency.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Transform;
