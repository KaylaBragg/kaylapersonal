import React from "react";

// MUI Components
import { Box, Container } from "@mui/material";

// Components
import HeroSection from "../components/HomePage/HeroSection";
import Layout from "../components/Layout";
import DirectMail from "../components/General/DirectMail";
import Resources from "../components/General/Resources";
import Success from "../components/Solutions/Success";
import Diverse from "../components/Solutions/Diverse";
import Impact from "../components/Solutions/Impact";

// styles
import "../index.scss";

const Solutions = () => {
  return (
    <Layout>
      {/* Background Gradient */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: -1,
          height: '100vh',
          background: `linear-gradient(
            529deg, 
            rgba(237, 92, 47, 1) 35%, 
            rgba(242, 130, 48, .89) 45%, 
            rgba(250, 179, 49, 0.7) 55%, 
            rgba(250, 179, 49, 0) 60%
          )`
        }}
      ></Box>
      {/* Main Content */}
      <Box sx={{ pt: "115px" }}>
        <Container maxWidth="xl">
          <HeroSection
            title="Tailored Solutions for Every Need"
            subTitle=" "
            description="Harness the Power of Direct Mail Across Roles, Use Cases, and Industries Solutions Customized for Key Roles"
            component="solutions"
          />
        </Container>
        <Container>
          <Resources
            title="Business Owners"
            description="Boost your business with Open Letter Connect. Make direct mail campaigns work for you, effortlessly. Create attention-grabbing materials and measure success easily, keeping your audience engaged and your operations smooth."
          />
          <Resources
            title="Marketers"
            description="Elevate your marketing campaigns with Open Letter Connect. Our platform empowers marketers to craft impactful direct mail campaigns with ease. From designing eye-catching materials to analyzing campaign performance, we provide the tools you need to engage your audience effectively."
            flexDirection="row-reverse"
          />
          <Resources
            title="Direct Mail Operators"
            description="Streamline your direct mail operations with our sophisticated yet user-friendly platform. Open Letter Connect simplifies bulk mailing, ensures address accuracy, and provides tracking and analytics, making the management of large-scale mail operations a breeze."
          />
          <Resources
            title="Sales Team"
            description="Simplify direct mail campaigns to directly engage your customers. From creating standout materials to tracking results effortlessly, it's the toolkit you need for seamless customer connection and boosting your sales performance."
            flexDirection="row-reverse"
          />
          <Resources
            title="Developers"
            description="Integrate Open Letter Connect seamlessly into your existing systems. Our platform offers robust APIs and a variety of app integrations, enabling developers to efficiently link their CRM systems, marketing platforms, and more, enhancing functionality and user experience."
          />
        </Container>
        <Box
          sx={{
            background: "linear-gradient(to bottom, #F282301A 10%, #F2823000 30%)",
            marginTop: "100px",
            zIndex: -1,
            position: "relative",
          }}
        >
          <Container>
            <Diverse />
            <Impact />
          </Container>
        </Box>
        <Container>
          <DirectMail component="solutions" />
        </Container>
        <Box
          sx={{
            background: "linear-gradient(to top, #F282301A, #F2823000)",
            zIndex: -1,
            position: "relative",
          }}
        >
          <Container>
            <Success />
          </Container>
        </Box>
      </Box>
    </Layout>
  );
};

export default Solutions;
