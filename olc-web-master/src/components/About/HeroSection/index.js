import React from "react";

// MUI Components
import { Box, Container } from "@mui/material";

// images
import MainHero from "../../../assets/images/about/hero-banner.webp";

// styles
import "./styles.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HeroSection = () => {
  return (
    <Box
      sx={{
        margin: "113px auto 83px !important",
      }}
      className="hero-section"
    >
      <Container className="container">
        <div className="row">
          <div className="col">
            <p className="about-us gradient-text">About Us</p>

            <h3 className="title">
              <span>Open Letter</span>
              <br />
              <span>Connect</span>
            </h3>
            <br />
            <div className="mobile-only banner-mobile">
              <LazyLoadImage effect="blur" src={MainHero} alt="About us" />
            </div>
            <br className="mobile-only" />
            <p className="desc">
              Hello! I&apos;m Justin Silverio, the founder of Open Letter
              Connect. My journey into the world of direct mail marketing began
              in the realms of Real Estate Investing. While my roots are in real
              estate, my vision for Open Letter Connect extends far beyond that.
              I founded OLC to empower businesses in diverse sectors to leverage
              the untapped potential of direct mail marketing.
            </p>
            <br />
            <h4 className="gradient-text justin">Justin Silverio</h4>
            <p className="ceo">CEO & Founder</p>
          </div>
          <div className="col banner-desktop">
            <LazyLoadImage effect="blur" src={MainHero} alt="About us" />
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default HeroSection;
