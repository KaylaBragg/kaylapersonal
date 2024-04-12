import React from "react";

// MUI Components
import { Grid, Typography, Box } from "@mui/material";

// styles
import "./styles.scss";

// images
import SuccessImage from "../../../assets/images/solutions/solution-dashboard.svg";

// import { StaticImage } from "gatsby-plugin-image";
import GenericButton from "../../General/Button";
import { LazyLoadImage } from "react-lazy-load-image-component";

const buttonStyles = {
  borderRadius: "200px",
  backgroundColor: "#000",
  color: "#fff",
  fontSize: "20px",
  fontWeight: "600",
  height: "100% !important",
  minHeight: "60px !important",
  width: "100% !important",
  maxWidth: "277px !important",
  "&:hover": {
    backgroundColor: "#000",
  },
};

const Success = () => {
  return (
    <>
      <Grid
        container
        sx={{
          padding: "250px 0 0",
          "@media (max-width: 576px)": {
            padding: "120px 0 0",
          },
        }}
      >
        <Grid item lg={6}>
          <Box className="successImageWrapper">
            <LazyLoadImage
              effect="blur"
              src={SuccessImage}
              alt="successImage"
            />
          </Box>
        </Grid>
        <Grid item lg={6}>
          <Box className="successWrapper">
            <Typography variant="h6">Open Letter Connect:</Typography>
            <Typography variant="h2">
              Your Partner in Direct Mail Success
            </Typography>
            <Typography>
              At Open Letter Connect, we understand that each role, use case,
              and industry has unique needs. Our platform is designed to cater
              to these diverse requirements, ensuring that your direct mail
              campaigns are as effective and efficient as possible.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item lg={12}>
          <Box className="customizedCTA">
            <Typography>
              Experience the power of{" "}
              <span>customized direct mail solutions</span> with Open Letter
              Connect.
            </Typography>
            <GenericButton
              title="Sign Up Now"
              style={buttonStyles}
              link="https://demo.openletterconnect.com/signup"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Success;
