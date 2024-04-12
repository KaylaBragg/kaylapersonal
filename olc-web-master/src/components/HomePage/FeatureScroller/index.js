import React from "react";

// MUI Components
import { Box, Button } from "@mui/material";

// styles
import "./styles.scss";

// images
import Flag from "../../../assets/images/infinite-scroller/absolute-flag.svg";
import Star from "../../../assets/images/infinite-scroller/absolute-star.svg";
import Mic from "../../../assets/images/infinite-scroller/absolute-mic.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const FeatureScroller = () => {
  return (
    <Box className="scrollerWrapper">
      <LazyLoadImage className="flag" src={Flag} effect="blur" alt="flag" />
      <LazyLoadImage className="star" src={Star} effect="blur" alt="star" />
      <LazyLoadImage className="mic" src={Mic} effect="blur" alt="mic" />
      <Box className="infinteScroller">
        <Box className="logosSlide animationLeft">
          <Button className="scrollButton">Promote a Sale</Button>
          <Button className="scrollButton">Real Estate Marketing</Button>
          <Button className="scrollButton">Personalized Thank You Notes</Button>
          <Button className="scrollButton">Warm Welcomes</Button>
          <Button className="scrollButton">Multi-Channel Campaigns</Button>
          <Button className="scrollButton">Custom Solutions</Button>
          <Button className="scrollButton">Integration and Efficiency</Button>
          <Button className="scrollButton">Real Estate Marketing</Button>
        </Box>
        <Box className="logosSlide animationLeft">
          <Button className="scrollButton">Promote a Sale</Button>
          <Button className="scrollButton">Real Estate Marketing</Button>
          <Button className="scrollButton">Personalized Thank You Notes</Button>
          <Button className="scrollButton">Warm Welcomes</Button>
          <Button className="scrollButton">Multi-Channel Campaigns</Button>
          <Button className="scrollButton">Custom Solutions</Button>
          <Button className="scrollButton">Integration and Efficiency</Button>
          <Button className="scrollButton">Real Estate Marketing</Button>
        </Box>
        <Box className="logosSlide animationLeft">
          <Button className="scrollButton">Promote a Sale</Button>
          <Button className="scrollButton">Real Estate Marketing</Button>
          <Button className="scrollButton">Personalized Thank You Notes</Button>
          <Button className="scrollButton">Warm Welcomes</Button>
          <Button className="scrollButton">Multi-Channel Campaigns</Button>
          <Button className="scrollButton">Custom Solutions</Button>
          <Button className="scrollButton">Integration and Efficiency</Button>
          <Button className="scrollButton">Real Estate Marketing</Button>
        </Box>
        <Box className="logosSlide animationLeft">
          <Button className="scrollButton">Promote a Sale</Button>
          <Button className="scrollButton">Real Estate Marketing</Button>
          <Button className="scrollButton">Personalized Thank You Notes</Button>
          <Button className="scrollButton">Warm Welcomes</Button>
          <Button className="scrollButton">Multi-Channel Campaigns</Button>
          <Button className="scrollButton">Custom Solutions</Button>
          <Button className="scrollButton">Integration and Efficiency</Button>
          <Button className="scrollButton">Real Estate Marketing</Button>
        </Box>
        <Box className="logosSlide animationLeft">
          <Button className="scrollButton">Promote a Sale</Button>
          <Button className="scrollButton">Real Estate Marketing</Button>
          <Button className="scrollButton">Personalized Thank You Notes</Button>
          <Button className="scrollButton">Warm Welcomes</Button>
          <Button className="scrollButton">Multi-Channel Campaigns</Button>
          <Button className="scrollButton">Custom Solutions</Button>
          <Button className="scrollButton">Integration and Efficiency</Button>
          <Button className="scrollButton">Real Estate Marketing</Button>
        </Box>
      </Box>
      <Box className="infinteScroller">
        <Box className="logosSlide animationRight">
          <Button className="scrollButton">Promote a Sale</Button>
          <Button className="scrollButton">Real Estate Marketing</Button>
          <Button className="scrollButton">Personalized Thank You Notes</Button>
          <Button className="scrollButton">Warm Welcomes</Button>
          <Button className="scrollButton">Multi-Channel Campaigns</Button>
          <Button className="scrollButton">Custom Solutions</Button>
          <Button className="scrollButton">Integration and Efficiency</Button>
          <Button className="scrollButton">Real Estate Marketing</Button>
        </Box>
        <Box className="logosSlide animationRight">
          <Button className="scrollButton">Promote a Sale</Button>
          <Button className="scrollButton">Real Estate Marketing</Button>
          <Button className="scrollButton">Personalized Thank You Notes</Button>
          <Button className="scrollButton">Warm Welcomes</Button>
          <Button className="scrollButton">Multi-Channel Campaigns</Button>
          <Button className="scrollButton">Custom Solutions</Button>
          <Button className="scrollButton">Integration and Efficiency</Button>
          <Button className="scrollButton">Real Estate Marketing</Button>
        </Box>
        <Box className="logosSlide animationRight">
          <Button className="scrollButton">Promote a Sale</Button>
          <Button className="scrollButton">Real Estate Marketing</Button>
          <Button className="scrollButton">Personalized Thank You Notes</Button>
          <Button className="scrollButton">Warm Welcomes</Button>
          <Button className="scrollButton">Multi-Channel Campaigns</Button>
          <Button className="scrollButton">Custom Solutions</Button>
          <Button className="scrollButton">Integration and Efficiency</Button>
          <Button className="scrollButton">Real Estate Marketing</Button>
        </Box>
        <Box className="logosSlide animationRight">
          <Button className="scrollButton">Promote a Sale</Button>
          <Button className="scrollButton">Real Estate Marketing</Button>
          <Button className="scrollButton">Personalized Thank You Notes</Button>
          <Button className="scrollButton">Warm Welcomes</Button>
          <Button className="scrollButton">Multi-Channel Campaigns</Button>
          <Button className="scrollButton">Custom Solutions</Button>
          <Button className="scrollButton">Integration and Efficiency</Button>
          <Button className="scrollButton">Real Estate Marketing</Button>
        </Box>
        <Box className="logosSlide animationRight">
          <Button className="scrollButton">Promote a Sale</Button>
          <Button className="scrollButton">Real Estate Marketing</Button>
          <Button className="scrollButton">Personalized Thank You Notes</Button>
          <Button className="scrollButton">Warm Welcomes</Button>
          <Button className="scrollButton">Multi-Channel Campaigns</Button>
          <Button className="scrollButton">Custom Solutions</Button>
          <Button className="scrollButton">Integration and Efficiency</Button>
          <Button className="scrollButton">Real Estate Marketing</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FeatureScroller;
