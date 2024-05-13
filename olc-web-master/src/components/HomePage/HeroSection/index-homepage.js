import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MainHero from "../../../assets/images/hero-section/target.webp";
import "./styles.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import TypingEffect from "./TypingEffect";

const HeroSection = (props) => {
  const { subTitle, description } = props;
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const buttonStyles = {
    borderRadius: "20px",
    background: "black",
    color: "white", // White text color for better visibility against the dark border
    padding: "10px 30px",
    textTransform: "none",
    fontSize: isSmallScreen ? "16px" : "20px",
    fontWeight: "bold",
    textDecoration: "none",
    width: "fit-content",
    minWidth: "150px",
    border: "4px solid black", // Ensure the border is ready for the gradient
    position: "relative",
    display: "block",
    margin: "20px 0",
    cursor: "pointer",
    transition: "color 0.3s ease",
    "&:before": {
      content: '""',
      position: "absolute",
      top: "-2px",
      right: "-2px",
      bottom: "-2px",
      left: "-2px",
      borderRadius: "22px",
      background: `linear-gradient(45deg, #6d9bc3, #005b96, #3f454f)`,
      zIndex: -1,
      transition: "background 0.3s ease",
    },
    "&:hover": {
      color: "#6d9bc3", // Changes text color to lighter blue on hover for a dynamic effect
      "&:before": {
        background: `linear-gradient(45deg, #3f454f, #005b96, #6d9bc3)`, // Invert gradient direction on hover
      },
    },
  };

  const typographyStyles = {
    color: "#FFFFFF",
    marginBottom: "35px",
    maxWidth: "800px",
    margin: "0 auto",
  };

  const typingEffectStyles = {
    ...typographyStyles,
    fontSize: isSmallScreen ? "40px" : "60px",
    fontWeight: "bold",
    fontFamily: '"Inter", sans-serif', // Ensured the font-family is correctly set
    lineHeight: isSmallScreen ? "40px" : "70px", // Adjust line height for closer spacing
  };

  return (
    <Box sx={{ width: "100%", maxWidth: "1200px", margin: "43px auto 83px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={typingEffectStyles}>
            <TypingEffect
              words={["Automate", "Personalize", "Redefine", "Customize"]}
              typingSpeed={90}
              deletingSpeed={55}
              delay={800}
            />
          </Typography>
          <Typography
            sx={{
              ...typographyStyles,
              fontSize: isSmallScreen ? "40px" : "60px",
              fontWeight: "bold",
              marginBottom: "10rem", // Corrected the typo
            }}
          >
            Your Direct Mail
          </Typography>
          {subTitle && (
            <Typography
              variant="h6"
              sx={{
                ...typographyStyles,
                fontSize: "1.5rem",
                fontStyle: "italic",
                fontWeight: "regular",
              }}
            >
              {subTitle}
            </Typography>
          )}
          {description && (
            <Typography sx={typographyStyles}>{description}</Typography>
          )}
          <Box display="flex" justifyContent="left">
            <Button
              href="https://demo.openletterconnect.com/signup"
              style={buttonStyles}
            >
              Get Started for Free!
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: isSmallScreen ? "none" : "block" }}
        >
          <LazyLoadImage
            className="heroImage"
            effect="blur"
            src={MainHero}
            alt="hero"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
