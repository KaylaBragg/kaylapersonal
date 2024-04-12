import React from "react";

// MUI Components
import { Box, Container } from "@mui/material";

// Layout Component
import Layout from "../components/Layout";

// Components
import HeroSection from "../components/HomePage/HeroSection/index-homepage";
import Trusted from "../components/General/Trusted";
import Features from "../components/General/Features";
import DirectMail from "../components/General/DirectMail";
import Transform from "../components/HomePage/Transform";
import Ready from "../components/General/Ready";
import Static from "../components/HomePage/Static";
import Testimonials from "../components/General/Testimonials";
import FeatureScroller from "../components/HomePage/FeatureScroller";
import DirectCount from "../components/HomePage/DirectCount";

// mainStyles
import "../index.scss";

const IndexPage = () => {
  return (
    <Layout>
      {/* Background Gradient */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: -1, height: '100vh', 
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
            title="Automate Your Direct Mail Campaigns"
            subTitle="Sync with your CRM, track results, and automate customer communications with ease!"
            description=""
          />
        </Container>
        <Container maxWidth="xl">
          <Trusted component="home" />
          <Transform />
        </Container>
        <Box className="gradientBottom">
          <Container
            sx={{
              "@media (max-width: 576px)": {
                padding: "0 32px !important",
              },
            }}
          >
            <Features
              button={true}
              title="Template"
              span="Builder"
              desc="Effortless Design, Powerful Impact. Create stunning direct mail effortlessly with our Template Builder. Choose from a variety of templates or customize your own for a unique touch."
            />
          </Container>
        </Box>
        <Container
          sx={{
            "@media (max-width: 576px)": {
              padding: "0 32px !important",
            },
          }}
        >
          <Features
            flexDirection="row-reverse"
            button={false}
            title="Unlimited"
            span="Monthly Mailings"
            desc="Freedom to mail more. Send as many mailings as you need each month. Unlimited access means greater impact without restrictions."
          />
          <Features
            button={false}
            title="Fields & Variable Data"
            span="Custom"
            desc="Personalization at its best. Make each mail piece unique with Custom Fields and Variable Data, crafting highly personalized messages for every prospect."
          />
          <Features
            flexDirection="row-reverse"
            button={false}
            title="Address"
            span="Verification"
            spanSecond="Standardization"
            desc="Accuracy in every send. Ensure the highest deliverability with USPS-verified addresses, enhancing your campaign's effectiveness."
          />
          <Features
            button={false}
            title="Integrations"
            span="Seamless"
            desc="Integrate into thousands of platforms, utilizing Zapier and our direct connection into Hubspot, Salesforce and many more. Simplify operations with easy integrations."
          />
        </Container>
        <Box className="gradientTop">
          <Container
            sx={{
              "@media (max-width: 576px)": {
                padding: "0 32px !important",
              },
            }}
          >
            <Features
              flexDirection="row-reverse"
              button={false}
              title="and"
              span="Analytics"
              spanSecond="Tracking"
              desc="Insights for success. Utilize built-in analytics to track overall marketing campaigns and spend. Track every mail piece for ultimate transparency."
            />
          </Container>
        </Box>
        <Container>
          <DirectCount />
          <DirectMail component="home" />
          <Testimonials component="home" />
          <Ready />
        </Container>
        <FeatureScroller />
        <Static />
      </Box>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Open Letter Connect</title>;
