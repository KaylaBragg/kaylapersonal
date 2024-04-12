import React, { useState } from "react";

// MUI Components
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

// styles
import "./styles.scss";

// images
import Sales from "../../../assets/images/solutions/solution-sales.png";
import AccordionImage from "../../../assets/images/solutions/accordion-second.png";

// data
import { impactData } from "../../../utils/data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Impact = () => {
  const [expanded, setExpanded] = useState("panel1");

  const handleExpansion = (panel) => (event, isExpanded) => {
    if (!isExpanded) {
      const currentlyExpandedPanels = expanded.split(",");
      if (
        currentlyExpandedPanels.length === 1 &&
        currentlyExpandedPanels.includes(panel)
      ) {
        return;
      }
    }
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <>
      <Box className="impactHeading">
        <Typography variant="h2">
          Industry-Specific Solutions for <span>Maximum Impact</span>
        </Typography>
      </Box>
      <Box className="impactWapper">
        <Box className="impactAccordionWrapper">
          {impactData.map((faq) => {
            return (
              <Accordion
                key={faq.id}
                className="accordionMain"
                expanded={expanded === `panel${faq.id}`}
                onChange={handleExpansion(`panel${faq.id}`)}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        color: "#F28230",
                        transform:
                          expanded === `panel${faq.id}`
                            ? "rotate(180deg)"
                            : "rotate(270deg)",
                        "@media (max-width: 576px)": {
                          transform:
                            expanded === `panel${faq.id}`
                              ? "rotate(180deg) !important"
                              : "rotate(270deg) !important",
                        },
                      }}
                    />
                  }
                  aria-controls={`panel${faq.id}-content`}
                  id={`panel${faq.id}-header`}
                  sx={{
                    borderBottom:
                      expanded === `panel${faq.id}`
                        ? "none !important"
                        : "2px solid #e1e1e1 !important",
                  }}
                  className="accordionSummary"
                >
                  <Typography>{faq.title}</Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    borderBottom:
                      expanded === `panel${faq.id}`
                        ? "2px solid #FAB331 !important"
                        : "2px solid #e1e1e1 !important",
                  }}
                  className="accordionDetails"
                >
                  <Typography>{faq.desc}</Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
        <Box className="impactAccordionImage">
          {expanded === "panel1" && (
            <LazyLoadImage
              effect="blur"
              src={AccordionImage}
              alt="calculator"
            />
          )}
          {expanded === "panel2" && (
            <LazyLoadImage effect="blur" src={Sales} alt="sales" />
          )}
          {expanded === "panel3" && (
            <LazyLoadImage
              effect="blur"
              src={AccordionImage}
              alt="calculator"
            />
          )}
          {expanded === "panel4" && (
            <LazyLoadImage effect="blur" src={Sales} alt="sales" />
          )}
          {expanded === "panel5" && (
            <LazyLoadImage
              effect="blur"
              src={AccordionImage}
              alt="calculator"
            />
          )}
          {expanded === "panel6" && (
            <LazyLoadImage effect="blur" src={Sales} alt="sales" />
          )}
        </Box>
      </Box>
    </>
  );
};

export default Impact;
