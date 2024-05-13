import React from "react";

// MUI Components
import { Box, Container } from "@mui/material";

// Slick Slider
import Slider from "react-slick";

// images
import ArrowNext from "../../../assets/images/team/arrow-right.svg";
import ArrowPrev from "../../../assets/images/team/arrow-left.svg";

// styles
import "./styles.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

// member data
import { teamMembers } from "../../../utils/data";

const HeroSection = () => {
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
    <Box className="meet-the-team">
      <Container className="container">
        <h3 className="title">Meet the Team</h3>
        <div className="team team-desktop">
          {teamMembers.map((member, i) => (
            <div key={i} className="member">
              <div className="avatar">
                <LazyLoadImage
                  src={member.image}
                  alt={member.name}
                  effect="blur"
                />
              </div>
              <div className="info">
                <h4 className="name">{member.name}</h4>
                <p className="occupation">{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="team team-mobile">
          <Slider {...settings}>
            {teamMembers.map((member, i) => (
              <div key={i} className="member">
                <div className="avatar">
                  <LazyLoadImage
                    src={member.image}
                    alt={member.name}
                    effect="blur"
                  />
                </div>
                <div className="info">
                  <h4 className="name">{member.name}</h4>
                  <p className="occupation">{member.designation}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </Box>
  );
};

export default HeroSection;
