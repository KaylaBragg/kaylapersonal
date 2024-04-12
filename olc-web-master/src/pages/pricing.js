import React, { useState, useEffect } from "react";

// MUI Components
import { Box, Container } from "@mui/material";

// Components
import HeroSection from "../components/HomePage/HeroSection";
import Layout from "../components/Layout/index";
import Trusted from "../components/General/Trusted";
import Testimonials from "../components/General/Testimonials";
import GenericAccordion from "../components/General/Accordion";
import Strategy from "../components/Pricing/Strategy";
import More from "../components/Pricing/More";

// styles
import "../index.scss";
import PricingTabs from "../components/Pricing/PricingTabs";
import PricingTable from "../components/Pricing/PricingTable";

const Pricing = () => {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

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
            title="Simplify Your Direct Mail Campaigns with Affordable Plans"
            description="Choose Your Path to Direct Mail Excellence"
            component="pricing"
          />
        </Container>
        <PricingTabs />
        {screenWidth < 600 && (
          <Container>
            <More />
          </Container>
        )}
      </Box>
      <Container>
        {screenWidth > 600 && <More />}
        <PricingTable />
      </Container>
      <Container maxWidth="xl">
        <Trusted component="pricing" />
      </Container>
      <Container>
        <Testimonials component="pricing" />
      </Container>
      <Strategy />
      <Container>
        <GenericAccordion />
      </Container>
    </Layout>
  );
};

export default Pricing;
