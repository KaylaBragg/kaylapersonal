import React from "react";

// MUI Components
import { Box, Button } from "@mui/material";

// styles
import "./styles.scss";

// Components
import PricingCard from "./PricingCard";

const PricingTabs = () => {
  return (
    <>
      <Box className="tabsWrapper">
        <Box className="tabsButtonWrapper">
          <Button className="nonActive active">Monthly</Button>
          <Button className="nonActive">Yearly</Button>
        </Box>
      </Box>
      <PricingCard />
    </>
  );
};

export default PricingTabs;
