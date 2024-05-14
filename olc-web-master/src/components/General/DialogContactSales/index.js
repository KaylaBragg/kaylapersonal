import React from "react";
import HubspotForm from "react-hubspot-form";

// MUI Components
import { Dialog, DialogContent } from "@mui/material";

// styles
import "./styles.scss";

const DialogContactSales = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-describedby="alert-contact-sales"
        className="alert-contact-sales"
      >
        <DialogContent className="contact-sales-form">
          <HubspotForm
            region="na1"
            portalId="21994206"
            formId="d93ab0e1-6b15-46a7-80e3-215b2725e371"
            loading={<div>Loading...</div>}
          />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default DialogContactSales;
