import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";

// styles
import "./styles.scss";

// data
import {
  productFeatures,
  products,
  supportFeatures,
  productsInfo,
} from "../../../utils/data";

// Gatsby image Component
import { StaticImage } from "gatsby-plugin-image";

// Components
import PricingSlider from "../PricingSlider";

const PricingTable = () => {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  return (
    <>
      {screenWidth > 768 ? (
        <>
          <Box className="pricingHeader">
            <Typography variant="h2">Complete Feature List</Typography>
          </Box>
          <TableContainer component={Paper} className="pricingTablePaper">
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              className="pricingTableWrapper"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Product Features</TableCell>
                  <TableCell align="right">Starter</TableCell>
                  <TableCell align="right">Growth</TableCell>
                  <TableCell align="right">Professional</TableCell>
                  <TableCell align="right">Enterprise</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {productFeatures.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableHead>
                <TableRow>
                  <TableCell>Products</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableHead>
                <TableRow>
                  <TableCell>Support Features</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {supportFeatures.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer
            component={Paper}
            className="pricingTablePaper"
            sx={{
              marginTop: "47px",
            }}
          >
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              className="pricingTableWrapper"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Product Features</TableCell>
                  <TableCell align="right">Starter</TableCell>
                  <TableCell align="right">Growth</TableCell>
                  <TableCell align="right">Professional</TableCell>
                  <TableCell align="right">Enterprise</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {productsInfo.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <PricingSlider />
      )}
    </>
  );
};

export default PricingTable;
