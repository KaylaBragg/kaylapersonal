import React from "react";

// MUI Components
import { Box, Container } from "@mui/material";

// Components
import Layout from "../components/Layout";
import HeroSection from "../components/HomePage/HeroSection";
import InfoBox from "../components/About/InfoBox";
import Core from "../components/About/Core";
import Apart from "../components/About/Apart";
import Join from "../components/General/Join";

// styles
import "../index.scss";

const About = () => {
  return (
    <Layout>
      {/* Background Gradient */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: -1, height: '100%', 
        background: `linear-gradient(
          529deg, 
          rgba(237, 92, 47, 1) 35%, 
          rgba(242, 130, 48, .89) 45%, 
          rgba(250, 179, 49, 0.7) 55%, 
          rgba(250, 179, 49, 0) 60%
        )` 
      }}>
      </Box>

      {/* Main Content */}
      <Box sx={{ pt: "115px" }}>
        <Container maxWidth="xl">
          <HeroSection
            title="Pioneering the Future of Direct Mail Marketing"
            subTitle=""
            description="Harness the Power of Direct Mail Across Roles, Use Cases, and Industries Solutions Customized for Key Roles"
          />
        </Container>
        <Container>
          <InfoBox />
        </Container>
      </Box>
      <Box>
        <Container>
          <Core />
        </Container>
      </Box>
      <Box>
        <Container>
          <Apart />
        </Container>
      </Box>
      <Container>
        <Join
          title="Join the"
          subTitle="Open Letter Connect Family"
          desc="Discover the difference with Open Letter Connect: Where innovation, integrity, and impact come together to redefine direct mail marketing."
          button={true}
          component="about"
        />
      </Container>
    </Layout>
  );
};

export default About;
