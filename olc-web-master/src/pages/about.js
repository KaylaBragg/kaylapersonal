import React from "react";

// MUI Components
import { Box, Container } from "@mui/material";

// Components
import Layout from "../components/Layout";
import HeroSection from "../components/About/HeroSection";
import MeetTheTeam from "../components/About/MeetTheTeam";
import InfoBox from "../components/About/InfoBox";
import Core from "../components/About/Core";
import Apart from "../components/About/Apart";
import Join from "../components/General/Join";

// styles
import "../index.scss";

const About = () => {
  return (
    <Layout>
      <HeroSection />
      <MeetTheTeam />
    </Layout>
  );
};

export default About;
