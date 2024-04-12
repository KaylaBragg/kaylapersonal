import React from "react";

// MUI Components
import { Box, Typography } from "@mui/material";

// images
import Promote from "../../../../assets/images/direct-mail/promote.svg";
import Win from "../../../../assets/images/direct-mail/win.svg";
import Notes from "../../../../assets/images/direct-mail/notes.svg";
import Product from "../../../../assets/images/direct-mail/product.svg";
import Mail from "../../../../assets/images/direct-mail/mail.svg";
import Event from "../../../../assets/images/direct-mail/event.svg";

// styles
import "./styles.scss";

// react lazyload component
import { LazyLoadImage } from "react-lazy-load-image-component";

const AppCard = (props) => {
  const { title, description } = props;
  return (
    <Box className="appCardWrapper">
      {title === "Promote a Sale" && (
        <LazyLoadImage effect="blur" src={Promote} alt="promote" />
      )}
      {title === "Win Back Customers" && (
        <LazyLoadImage effect="blur" src={Win} alt="win" />
      )}
      {title === "Personalized Thank You Notes" && (
        <LazyLoadImage effect="blur" src={Notes} alt="notes" />
      )}
      {title === "New Product Announcements" && (
        <LazyLoadImage effect="blur" src={Product} alt="product" />
      )}
      {title === "Bulk Prospecting with Direct Mail" && (
        <LazyLoadImage effect="blur" src={Mail} alt="mail" />
      )}
      {title === "Event Invitations" && (
        <LazyLoadImage effect="blur" src={Event} alt="event" />
      )}
      <Box>
        <Typography
          variant="h3"
          sx={{
            maxWidth:
              title === "Personalized Thank You Notes" ? "206px" : "252px",
          }}
        >
          {title}
        </Typography>
        {title === "Personalized Thank You Notes" ? (
          <Typography
            sx={{
              maxWidth: "287px !important",
            }}
          >
            {description}
          </Typography>
        ) : title === "Event Invitations" ? (
          <Typography
            sx={{
              maxWidth: "320px !important",
            }}
          >
            {description}
          </Typography>
        ) : title === "Bulk Prospecting with Direct Mail" ? (
          <Typography
            sx={{
              maxWidth: "315px !important",
            }}
          >
            {description}
          </Typography>
        ) : (
          <Typography>{description}</Typography>
        )}
      </Box>
    </Box>
  );
};

export default AppCard;
