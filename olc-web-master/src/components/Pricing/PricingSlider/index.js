import React, { useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Typography } from "@mui/material";

// icons
import Icon from "../../../assets/images/pricing/pricing-icon.svg";

// Slick Slider
import Slider from "react-slick";

// data
import {
  productFeatures,
  products,
  supportFeatures,
  productsInfo,
} from "../../../utils/data";

// styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <ArrowForwardIcon />
    </Box>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <ArrowBackIcon />
    </div>
  );
};

const PricingSlider = () => {
  const [toggleList, setToggleList] = useState(true);
  const [tableShow, setTableShow] = useState({
    productFeatures: true,
    products: true,
    support: true,
    productInfo: true,
  });

  const handleTableShow = (tableType) => {
    setTableShow((prevState) => ({
      ...prevState,
      [tableType]: !prevState[tableType],
    }));
  };

  const handleToggleList = () => {
    setToggleList(!toggleList);
  };

  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <Box
        className="featureMobileBtn"
        sx={{
          marginBottom: !toggleList && "30px",
        }}
      >
        <Button onClick={handleToggleList}>
          Complete Feature List{" "}
          <KeyboardArrowUpIcon
            sx={{
              transform: toggleList ? "" : "rotate(180deg)",
            }}
          />
        </Button>
      </Box>
      {/* {toggleList} */}
      <Slider
        {...settings}
        className={toggleList ? `pricingSlider` : `togglePricing`}
      >
        {/* Fourth Slide */}
        <Box className="pricingSlide">
          <Typography className="slideHead">Enterprise</Typography>
          <TableContainer component={Paper} className="pricingSliderPaper">
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              className="pricingSliderWrapper"
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Box
                      className="tableTitle"
                      onClick={() => handleTableShow("productFeatures")}
                    >
                      <Typography>Product Features</Typography>
                      <KeyboardArrowUpIcon
                        sx={{
                          transform: tableShow["productFeatures"]
                            ? ""
                            : "rotate(180deg)",
                        }}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              </TableHead>
              {tableShow["productFeatures"] && (
                <TableBody>
                  {productFeatures.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        <Box className="slideTableRow">
                          <Typography>{row.name}</Typography>
                          <Typography>{row.protein}</Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              )}
            </Table>
          </TableContainer>

          <TableContainer component={Paper} className="pricingSliderPaper">
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              className="pricingSliderWrapper"
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Box
                      className="tableTitle"
                      onClick={() => handleTableShow("products")}
                    >
                      <Typography>Products</Typography>
                      <KeyboardArrowUpIcon
                        sx={{
                          transform: tableShow["products"]
                            ? ""
                            : "rotate(180deg)",
                        }}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              </TableHead>
              {tableShow["products"] && (
                <TableBody>
                  {products.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        <Box className="slideTableRow">
                          <Typography>{row.name}</Typography>
                          <Typography>{row.protein}</Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              )}
            </Table>
          </TableContainer>

          <TableContainer component={Paper} className="pricingSliderPaper">
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              className="pricingSliderWrapper"
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Box
                      className="tableTitle"
                      onClick={() => handleTableShow("support")}
                    >
                      <Typography>Support Features</Typography>
                      <KeyboardArrowUpIcon
                        sx={{
                          transform: tableShow["support"]
                            ? ""
                            : "rotate(180deg)",
                        }}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              </TableHead>
              {tableShow["support"] && (
                <TableBody>
                  {supportFeatures.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        <Box className="slideTableRow">
                          <Typography>{row.name}</Typography>
                          <Typography>{row.protein}</Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              )}
            </Table>
          </TableContainer>

          <TableContainer component={Paper} className="pricingSliderPaper">
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              className="pricingSliderWrapper"
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Box
                      className="tableTitle"
                      onClick={() => handleTableShow("productInfo")}
                    >
                      <Typography>Product</Typography>
                      <KeyboardArrowUpIcon
                        sx={{
                          transform: tableShow["productInfo"]
                            ? ""
                            : "rotate(180deg)",
                        }}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              </TableHead>
              {tableShow["productInfo"] && (
                <TableBody>
                  {productsInfo.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        <Box className="slideTableRow">
                          <Typography>{row.name}</Typography>
                          <Typography>{row.protein}</Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              )}
            </Table>
          </TableContainer>
        </Box>

        {/* Third Slide */}
        <Box className="pricingSlide">
          <Typography className="slideHead">Professional</Typography>
          <TableContainer component={Paper} className="pricingSliderPaper">
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              className="pricingSliderWrapper"
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Box
                      className="tableTitle"
                      onClick={() => handleTableShow("productFeatures")}
                    >
                      <Typography>Product Features</Typography>
                      <KeyboardArrowUpIcon
                        sx={{
                          transform: tableShow["productFeatures"]
                            ? ""
                            : "rotate(180deg)",
                        }}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              </TableHead>
              {tableShow["productFeatures"] && (
                <TableBody>
                  {productFeatures.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        <Box className="slideTableRow">
                          <Typography>{row.name}</Typography>
                          <Typography>{row.carbs}</Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              )}
            </Table>
          </TableContainer>

          <TableContainer component={Paper} className="pricingSliderPaper">
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              className="pricingSliderWrapper"
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Box
                      className="tableTitle"
                      onClick={() => handleTableShow("products")}
                    >
                      <Typography>Products</Typography>
                      <KeyboardArrowUpIcon
                        sx={{
                          transform: tableShow["products"]
                            ? ""
                            : "rotate(180deg)",
                        }}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              </TableHead>
              {tableShow["products"] && (
                <TableBody>
                  {products.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        <Box className="slideTableRow">
                          <Typography>{row.name}</Typography>
                          <Typography>{row.carbs}</Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              )}
            </Table>
          </TableContainer>

          <TableContainer component={Paper} className="pricingSliderPaper">
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              className="pricingSliderWrapper"
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Box
                      className="tableTitle"
                      onClick={() => handleTableShow("support")}
                    >
                      <Typography>Support Features</Typography>
                      <KeyboardArrowUpIcon
                        sx={{
                          transform: tableShow["support"]
                            ? ""
                            : "rotate(180deg)",
                        }}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              </TableHead>
              {tableShow["support"] && (
                <TableBody>
                  {supportFeatures.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        <Box className="slideTableRow">
                          <Typography>{row.name}</Typography>
                          <Typography>{row.carbs}</Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              )}
            </Table>
          </TableContainer>

          <TableContainer component={Paper} className="pricingSliderPaper">
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              className="pricingSliderWrapper"
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Box
                      className="tableTitle"
                      onClick={() => handleTableShow("productInfo")}
                    >
                      <Typography>Product</Typography>
                      <KeyboardArrowUpIcon
                        sx={{
                          transform: tableShow["productInfo"]
                            ? ""
                            : "rotate(180deg)",
                        }}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              </TableHead>
              {tableShow["productInfo"] && (
                <TableBody>
                  {productsInfo.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        <Box className="slideTableRow">
                          <Typography>{row.name}</Typography>
                          <Typography>{row.carbs}</Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              )}
            </Table>
          </TableContainer>
        </Box>

        {/* Second Slide */}
        <Box className="pricingSlide">
          <Typography className="slideHead">Growth</Typography>
          <TableContainer component={Paper} className="pricingSliderPaper">
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              className="pricingSliderWrapper"
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Box
                      className="tableTitle"
                      onClick={() => handleTableShow("productFeatures")}
                    >
                      <Typography>Product Features</Typography>
                      <KeyboardArrowUpIcon
                        sx={{
                          transform: tableShow["productFeatures"]
                            ? ""
                            : "rotate(180deg)",
                        }}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              </TableHead>
              {tableShow["productFeatures"] && (
                <TableBody>
                  {productFeatures.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        <Box className="slideTableRow">
                          <Typography>{row.name}</Typography>
                          <Typography>{row.fat}</Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              )}
            </Table>
          </TableContainer>

          <TableContainer component={Paper} className="pricingSliderPaper">
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              className="pricingSliderWrapper"
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Box
                      className="tableTitle"
                      onClick={() => handleTableShow("products")}
                    >
                      <Typography>Products</Typography>
                      <KeyboardArrowUpIcon
                        sx={{
                          transform: tableShow["products"]
                            ? ""
                            : "rotate(180deg)",
                        }}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              </TableHead>
              {tableShow["products"] && (
                <TableBody>
                  {products.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        <Box className="slideTableRow">
                          <Typography>{row.name}</Typography>
                          <Typography>{row.fat}</Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              )}
            </Table>
          </TableContainer>

          <TableContainer component={Paper} className="pricingSliderPaper">
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              className="pricingSliderWrapper"
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Box
                      className="tableTitle"
                      onClick={() => handleTableShow("support")}
                    >
                      <Typography>Support Features</Typography>
                      <KeyboardArrowUpIcon
                        sx={{
                          transform: tableShow["support"]
                            ? ""
                            : "rotate(180deg)",
                        }}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              </TableHead>
              {tableShow["support"] && (
                <TableBody>
                  {supportFeatures.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        <Box className="slideTableRow">
                          <Typography>{row.name}</Typography>
                          <Typography>{row.fat}</Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              )}
            </Table>
          </TableContainer>

          <TableContainer component={Paper} className="pricingSliderPaper">
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              className="pricingSliderWrapper"
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Box
                      className="tableTitle"
                      onClick={() => handleTableShow("productInfo")}
                    >
                      <Typography>Product</Typography>
                      <KeyboardArrowUpIcon
                        sx={{
                          transform: tableShow["productInfo"]
                            ? ""
                            : "rotate(180deg)",
                        }}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              </TableHead>
              {tableShow["productInfo"] && (
                <TableBody>
                  {productsInfo.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        <Box className="slideTableRow">
                          <Typography>{row.name}</Typography>
                          <Typography>{row.fat}</Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              )}
            </Table>
          </TableContainer>
        </Box>

        {/* First Slide */}
        <Box className="pricingSlide">
          <Typography className="slideHead">Starter</Typography>
          <TableContainer component={Paper} className="pricingSliderPaper">
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              className="pricingSliderWrapper"
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Box
                      className="tableTitle"
                      onClick={() => handleTableShow("productFeatures")}
                    >
                      <Typography>Product Features</Typography>
                      <KeyboardArrowUpIcon
                        sx={{
                          transform: tableShow["productFeatures"]
                            ? ""
                            : "rotate(180deg)",
                        }}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              </TableHead>
              {tableShow["productFeatures"] && (
                <TableBody>
                  {productFeatures.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        <Box className="slideTableRow">
                          <Typography>{row.name}</Typography>
                          <Typography>{row.calories}</Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              )}
            </Table>
          </TableContainer>

          <TableContainer component={Paper} className="pricingSliderPaper">
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              className="pricingSliderWrapper"
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Box
                      className="tableTitle"
                      onClick={() => handleTableShow("products")}
                    >
                      <Typography>Products</Typography>
                      <KeyboardArrowUpIcon
                        sx={{
                          transform: tableShow["products"]
                            ? ""
                            : "rotate(180deg)",
                        }}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              </TableHead>
              {tableShow["products"] && (
                <TableBody>
                  {products.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        <Box className="slideTableRow">
                          <Typography>{row.name}</Typography>
                          <Box className="iconWrapper">
                            <img src={Icon} alt="icon" />
                          </Box>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              )}
            </Table>
          </TableContainer>

          <TableContainer component={Paper} className="pricingSliderPaper">
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              className="pricingSliderWrapper"
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Box
                      className="tableTitle"
                      onClick={() => handleTableShow("support")}
                    >
                      <Typography>Support Features</Typography>
                      <KeyboardArrowUpIcon
                        sx={{
                          transform: tableShow["support"]
                            ? ""
                            : "rotate(180deg)",
                        }}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              </TableHead>
              {tableShow["support"] && (
                <TableBody>
                  {supportFeatures.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        <Box className="slideTableRow">
                          <Typography>{row.name}</Typography>
                          <Box className="iconWrapper">
                            <img src={Icon} alt="icon" />
                          </Box>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              )}
            </Table>
          </TableContainer>

          <TableContainer component={Paper} className="pricingSliderPaper">
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              className="pricingSliderWrapper"
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Box
                      className="tableTitle"
                      onClick={() => handleTableShow("productInfo")}
                    >
                      <Typography>Product</Typography>
                      <KeyboardArrowUpIcon
                        sx={{
                          transform: tableShow["productInfo"]
                            ? ""
                            : "rotate(180deg)",
                        }}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              </TableHead>
              {tableShow["productInfo"] && (
                <TableBody>
                  {productsInfo.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        <Box className="slideTableRow">
                          <Typography>{row.name}</Typography>
                          <Typography>{row.calories}</Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              )}
            </Table>
          </TableContainer>
        </Box>
      </Slider>
    </>
  );
};

export default PricingSlider;
