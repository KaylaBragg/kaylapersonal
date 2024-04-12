import React from "react";

// MUI Components
import { Box, Typography } from "@mui/material";

// Components
import Features from "../../../components/General/Features";

// styles
import "./styles.scss";

const Apart = () => {
  return (
    <>
      <Box className="apartHeading">
        <Typography variant="h2">
          What Sets <span>Open Letter Connect</span> Apart
        </Typography>
        <Typography>
          At Open Letter Connect, our approach to direct mail marketing is
          refined, data-driven, and client-centric. We provide tailored
          solutions that resonate with your target audience, ensuring your
          message not only reaches but also impacts.
        </Typography>
      </Box>
      <Features
        flexDirection="row-reverse"
        button={false}
        title="for Maximum Impact:"
        span="Customized Strategies"
        desc="
        Our expertise lies in creating personalized direct mail campaigns that cater to the unique needs of each client. Whether you're looking to engage new customers, retain existing ones, or reactivate dormant relationships, our strategies are designed to deliver results."
      />
      <Features
        button={false}
        title="and"
        span="Advanced Technology"
        spanSecond="Integration:"
        desc="
        We harness the latest in technology and integration capabilities to offer a seamless experience. Our platform easily syncs with various CRMs and analytics tools, providing a holistic view of your campaign's performance."
      />
      <Features
        flexDirection="row-reverse"
        button={false}
        title="Reach:"
        span="Diverse Industry"
        desc="
        While our foundation is in real estate, our solutions span across multiple industries including finance, healthcare, retail, and more. We understand the nuances of each sector and tailor our services to meet specific needs."
      />
      <Features
        button={false}
        title="to"
        span="Commitment"
        spanSecond="Excellence:"
        desc="
        Our team is driven by a commitment to excellence in every aspect of our service. From the initial strategy to the final execution, we ensure every campaign reflects the highest standards of quality and effectiveness."
      />
    </>
  );
};

export default Apart;
