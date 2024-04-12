import React, { useState } from "react";

// MUI Components
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Container } from "@mui/material";

// styles
import "./styles.scss";

// data
import { faqsData } from "../../../utils/data";

const GenericAccordion = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpansion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };
  return (
    <Container>
      <Box className="accordionFAQ">
        <Typography variant="h2">
          <span>Frequently</span> Asked Questions
        </Typography>
        <Box className="accordionWrapper">
          {faqsData.map((faq) => {
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
                        color:
                          expanded === `panel${faq.id}` ? "inherit" : "#F28230",
                      }}
                    />
                  }
                  aria-controls={`panel${faq.id}-content`}
                  id={`panel${faq.id}-header`}
                  className="accordionSummary"
                >
                  <Typography>{faq.title}</Typography>
                </AccordionSummary>
                <AccordionDetails className="accordionDetails">
                  <Typography>{faq.desc}</Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default GenericAccordion;
