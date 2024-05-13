import React, { useState } from "react";

// MUI Components
import { Box, Button } from "@mui/material";

// styles
import "./styles.scss";

// Components
import PricingCard from "./PricingCard";

const PricingTabs = () => {
  const [plan, setPlan] = useState("monthly");
  return (
    <>
      <Box className="tabsWrapper">
        <Box className="tabsButtonWrapper">
          <Button
            className={`nonActive ${plan === "monthly" ? "active" : ""}`}
            onClick={() => {
              setPlan("monthly");
            }}
          >
            Monthly
          </Button>
          <Button
            className={`nonActive ${plan === "yearly" ? "active" : ""}`}
            onClick={() => {
              setPlan("yearly");
            }}
          >
            Yearly
          </Button>
        </Box>
      </Box>
      <PricingCard plan={plan} />
    </>
  );
};

export default PricingTabs;
