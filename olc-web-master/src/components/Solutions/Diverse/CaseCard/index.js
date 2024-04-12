import React from "react";

// MUI Components
import { Box, Typography } from "@mui/material";

// images
import Acquisite from "../../../../assets/images/solutions/acquisite-solutions.svg";
import Rentent from "../../../../assets/images/solutions/retention-solutions.svg";
import Reactive from "../../../../assets/images/solutions/reactive-solutions.svg";

// styles
import "./styles.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CaseCard = (props) => {
  const { title, description } = props;

  return (
    <Box className="caseCardWrapper">
      {title === "Customer Acquisition" && (
        <LazyLoadImage effect="blur" src={Acquisite} alt="Acquisite" />
      )}
      {title === "Customer Retention" && (
        <LazyLoadImage effect="blur" src={Rentent} alt="Retent" />
      )}
      {title === "Customer Reactivation" && (
        <LazyLoadImage effect="blur" src={Reactive} alt="Reactive" />
      )}
      <Box>
        <Typography variant="h3">{title}</Typography>
        <Typography>{description}</Typography>
      </Box>
    </Box>
  );
};

export default CaseCard;
