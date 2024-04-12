import React from "react";

// MUI Components
import { Box, Typography } from "@mui/material";

// Slick Slider
import Slider from "react-slick";

// images
import ArrowNext from "../../../assets/images/testimonial/next.svg";
import ArrowPrev from "../../../assets/images/testimonial/prev.svg";
import Person from "../../../assets/images/testimonial/testimonial.svg";

// styles
import "./styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Testimonials = (props) => {
  const { component } = props;
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <Box
        className={`${className} customNextIcon`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <LazyLoadImage effect="blur" src={ArrowNext} alt="ArrowNext" />
      </Box>
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <Box
        className={`${className} customPrevIcon`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <LazyLoadImage effect="blur" src={ArrowPrev} alt="ArrowPrev" />
      </Box>
    );
  };

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
  };
  return (
    <>
      <Box
        className="testimonialsWrapper"
        sx={{
          "@media (max-width: 576px)": {
            marginTop:
              component === "home"
                ? "90px !important"
                : component === "pricing"
                ? "0px !important"
                : "0px",
          },
        }}
      >
        <Typography variant="h3">
          Customer <span>Testimonials</span>
        </Typography>
        <Typography>Hear from Our Happy Customers</Typography>
      </Box>
      <Slider {...settings} className="sliderBox">
        <Box className="testimonialSlide">
          <Typography variant="h3">
            "Open Letter Connect was a game-changer for our business. Easy,
            efficient, and incredibly effective."
          </Typography>
          <Box className="authorInfo">
            <LazyLoadImage src={Person} effect="blur" alt="person" />
            <Typography>Adam Steinberg</Typography>
          </Box>
        </Box>
        <Box className="testimonialSlide">
          <Typography variant="h3">
            "Open Letter Connect was a game-changer for our business. Easy,
            efficient, and incredibly effective."
          </Typography>
          <Box className="authorInfo">
            <LazyLoadImage src={Person} effect="blur" alt="person" />
            <Typography>John Brew</Typography>
          </Box>
        </Box>
      </Slider>
    </>
  );
};

export default Testimonials;
