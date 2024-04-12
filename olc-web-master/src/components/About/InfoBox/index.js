import React from "react";

// MUI Components
import { Box, Typography } from "@mui/material";

// images
import Justin from "../../../assets/images/about/justin-image.svg";

// styles
import "./styles.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

const InfoBox = () => {
  return (
    <Box className="infoBoxWrapper">
      <Box className="infoBoxHeading">
        <Typography variant="h2">
          Greetings from Our Founder, <span>Justin Silverio</span>
        </Typography>
      </Box>
      <Box className="aboutWapper">
        <Box className="image">
          <LazyLoadImage
            className="imageInfo"
            src={Justin}
            alt="justin"
            effect="blur"
          />
        </Box>
        <Box className="content">
          <Typography variant="h4">
            The Genesis of a Direct Mail Revolution
          </Typography>
          <Typography>
            Hello! I'm Justin Silverio, the driving force behind Open Letter
            Connect. My journey into the world of direct mail marketing began in
            the realms of real estate investing. This experience provided me
            with a unique perspective on the power and potential of direct mail
            in connecting with audiences effectively and personally.
            <br />
            <br />
            While my roots are in real estate, my vision for Open Letter Connect
            extends far beyond. Recognizing the universal applicability of
            direct mail strategies across various industries, I founded Open
            Letter Connect to empower businesses in diverse sectors to leverage
            the untapped potential of direct mail marketing.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default InfoBox;
