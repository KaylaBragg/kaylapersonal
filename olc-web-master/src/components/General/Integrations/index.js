import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import "./styles.scss"; // Ensure this is correctly linked to your updated styles

const Integrations = () => {
  return (
    <Box className="integrationsWrapper">
      <Typography style={{ fontSize: '24px' }}>Features Include:</Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Box className="featureBox">
            <Typography className="featureText"><b>No more minimums.</b> Send 1 mail piece or 100,000!</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box className="featureBox">
            <Typography className="featureText">Utilize the <b>HUNDREDS</b> of professionally premade direct mail templates</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box className="featureBox">
            <Typography className="featureText">The possibilities are endless with our <b>Zapier</b> Integration!</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Integrations;
