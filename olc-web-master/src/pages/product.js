import React from "react";

// Layout Component
import Layout from "../components/Layout";

// MUI Components
import { Box, Container } from "@mui/material";

// mainStyles
import "../index.scss";

// Components
import HeroSection from "../components/HomePage/HeroSection";
import Trusted from "../components/General/Trusted";
import Features from "../components/General/Features";
import Join from "../components/General/Join";
import Tabbing from "../components/General/Tabbing";

const Products = () => {
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
            title="Your Gateway to Effortless Direct Mail Campaigns"
            subTitle=" "
            description="Transform Your Marketing Strategy with Seamless Integration and Impactful Results"
            component="products"
          />
        </Container>
        <Container maxWidth="xl">
          <Trusted component="products" />
        </Container>
        <Container>
          <Features
            button={false}
            title="Streamline Your Efforts."
            span="Amplify Your Impact."
            desc="Welcome to Open Letter Connect, where direct mail campaigns meet innovation and efficiency. Dive into a world where your marketing strategies align seamlessly with your CRM, and tracking results becomes as effortless as a click."
          />
        </Container>
        <Container>
          <Tabbing />
        </Container>
        <Container>
          <Features
            flexDirection="row-reverse"
            button={false}
            title="Marketing Consultants"
            span="Expert"
            desc="Need a helping hand? Our marketing consultants are here to guide your campaign to success."
          />
        </Container>
        <Container>
          <Features
            button={false}
            title="Design Services"
            span="Professional"
            desc="Unleash the power of professional designs with our in-house services, enhancing your mail's visual appeal."
          />
        </Container>
        <Container>
          <Join
            title="Start Mailing Today!"
            desc="Ready to transform your direct mail campaigns? Step into the future with Open Letter Connect. Effortless integration, measurable results, and a suite of features await."
            span="Open Letter Connect - Streamlining Marketing, Maximizing Impact."
            button={true}
            component="products"
          />
        </Container>
      </Box>
    </Layout>
  );
};

export default Products;
