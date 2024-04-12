import React from "react";

// MUI CComponents
import { Box, Grid, Typography } from "@mui/material";

// CountUp
import CountUp from "react-countup";

// styles
import "./styles.scss";

const DirectCount = () => {
  return (
    <Grid container>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Box className="countHead">
          <Typography>
            Why <span>Direct Mail?</span>
          </Typography>
        </Box>
      </Grid>
      <Grid item lg={4} md={4} sm={12} xs={12}>
        <Box className="countWrapper">
          <CountUp end={67} suffix="%" className="countValue" />
          <Typography>
            of marketers agree that physical direct mail provides better ROI
            than email.
          </Typography>
        </Box>
      </Grid>
      <Grid item lg={4} md={4} sm={12} xs={12}>
        <Box className="countWrapper">
          <CountUp end={13} suffix="X" className="countValue" />
          <Typography>
            higher response rates are achieved using physical direct mail over
            email
          </Typography>
        </Box>
      </Grid>
      <Grid item lg={4} md={4} sm={12} xs={12}>
        <Box className="countWrapper">
          <CountUp end={27} suffix="X" className="countValue" />
          <Typography>
            higher response rates can be reached by combining direct mail with
            email
          </Typography>
        </Box>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Box className="countInfo">
          <Typography>
            Data from <span>2022 State of Direct Mail</span> study
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DirectCount;
