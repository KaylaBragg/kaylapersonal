import React, { useState } from "react";

// Mui Components
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Typography } from "@mui/material";

// styles
import "./styles.scss";

// Components
import Features from "../Features";

const Tabbing = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className="tabbingWrapper">
      <Typography className="tabbingHeader">
        Features at Your Fingertips
      </Typography>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            className="tabList"
            variant="scrollable"
            scrollButtons={false}
          >
            <Tab label="One-Off and Bulk Mail" value="1" className="tabLabel" />
            <Tab label="Template Builder" value="2" className="tabLabel" />
            <Tab label="Address Verification" value="3" className="tabLabel" />
            <Tab label="Product Suite" value="4" className="tabLabel" />
            <Tab label="Integration" value="5" className="tabLabel" />
            <Tab
              label="Analytics and Mail Tracking"
              value="6"
              className="tabLabel"
            />
          </TabList>
        </Box>
        <TabPanel value="1" className="tabPanelFeatures">
          <Features
            button={false}
            title="One-Off and"
            span="Bulk Mail"
            desc="Whether you're reaching out to a single customer or thousands, our platform adapts to your needs."
          />
        </TabPanel>
        <TabPanel value="2" className="tabPanelFeatures">
          <Features
            button={false}
            title="Template"
            span="Builder"
            desc="Effortless Design, Powerful Impact. Create stunning direct mail effortlessly with our Template Builder. Choose from a variety of templates or customize your own for a unique touch."
          />
        </TabPanel>
        <TabPanel value="3" className="tabPanelFeatures">
          <Features
            button={false}
            title="Address"
            span="Verification"
            spanSecond="Standardization"
            desc="Accuracy in every send. Ensure the highest deliverability with USPS-verified addresses, enhancing your campaign's effectiveness."
          />
        </TabPanel>
        <TabPanel value="4" className="tabPanelFeatures">
          <Features
            button={false}
            title="Address"
            span="Verification"
            spanSecond="Standardization"
            desc="Accuracy in every send. Ensure the highest deliverability with USPS-verified addresses, enhancing your campaign's effectiveness."
          />
        </TabPanel>
        <TabPanel value="5" className="tabPanelFeatures">
          <Features
            button={false}
            title="Integrations"
            span="Seamless"
            desc="Integrate into thousands of platforms, utilizing Zapier and our direct connection into Hubspot, Salesforce and many more. Simplify operations with easy integrations."
          />
        </TabPanel>
        <TabPanel value="6" className="tabPanelFeatures">
          <Features
            button={false}
            title="and"
            span="Analytics"
            spanSecond="Tracking"
            desc="
            Insights for success. Utilize built-in analytics to track overall marketing campaigns and spend. Track every mail piece for ultimate transparency."
          />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Tabbing;
