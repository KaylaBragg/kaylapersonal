import React, { useState, useEffect } from "react";

// MUI Components
import { Box, Container, Divider, Typography } from "@mui/material";

// Gatsby Image Component
import { StaticImage } from "gatsby-plugin-image";

// Gatsby Link Component
import { Link } from "gatsby";

// styles
import "./styles.scss";
import { footerItems } from "../../../utils/data";

const Footer = () => {
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
    <Box className="footerWrapper">
      <Container
        sx={{
          paddingLeft: { md: "16px !important", xs: "45px !important" },
          paddingRight: { md: "16px !important", xs: "45px !important" },
        }}
      >
        <Box className="footerContent">
          <Box className="logoScialWrapper">
            <Link to="/">
              <StaticImage
                src="../../../assets/images/footer/footer-logo.svg"
                alt="openLetter"
              />
            </Link>
            <Box className="footerSocials">
              <StaticImage
                src="../../../assets/images/footer/instagram.svg"
                alt="instagram"
              />
              <StaticImage
                src="../../../assets/images/footer/facebook.svg"
                alt="facebook"
              />
              <StaticImage
                src="../../../assets/images/footer/tiktok.svg"
                alt="tiktok"
              />
              <StaticImage
                src="../../../assets/images/footer/youtube.svg"
                alt="youtube"
              />
              <StaticImage
                src="../../../assets/images/footer/linkedin.svg"
                alt="linkedin"
              />
              <StaticImage src="../../../assets/images/footer/x.svg" alt="x" />
            </Box>
          </Box>
          <Box className="footerLinksWrapper">
            {screenWidth > 992
              ? footerItems.slice(0, 3).map((content, index) => {
                  const isThirdOrLast =
                    index === 2 || index === footerItems.length - 1;
                  return (
                    <Box className="linksColumn" key={content.id}>
                      <Typography>{content.name}</Typography>
                      <Box
                        className={
                          isThirdOrLast
                            ? "linksWrapper marginClass"
                            : "linksWrapper"
                        }
                      >
                        {content.links.map((link) => {
                          return (
                            <Link to={link.link} key={link.id}>
                              {link.name}
                            </Link>
                          );
                        })}
                      </Box>
                    </Box>
                  );
                })
              : footerItems.slice(0, 1).map((content, index) => {
                  const isThirdOrLast =
                    index === 2 || index === footerItems.length - 1;
                  return (
                    <Box className="linksColumn mobileLinks" key={content.id}>
                      <Typography>{content.name}</Typography>
                      <Box
                        className={
                          isThirdOrLast
                            ? "linksWrapper marginClass"
                            : "linksWrapper"
                        }
                      >
                        {content.links.slice(0, 3).map((link) => {
                          return (
                            <Link to={link.link} key={link.id}>
                              {link.name}
                            </Link>
                          );
                        })}
                      </Box>
                      <Box
                        className={
                          isThirdOrLast
                            ? "linksWrapper marginClass"
                            : "linksWrapper"
                        }
                      >
                        {content.links.slice(3, 6).map((link) => {
                          return (
                            <Link to={link.link} key={link.id}>
                              {link.name}
                            </Link>
                          );
                        })}
                      </Box>
                    </Box>
                  );
                })}
            {screenWidth < 992 &&
              footerItems.map((content, index) => {
                const isLast = index === footerItems.length - 1;
                return (
                  isLast && (
                    <>
                      <Box className="linksColumn" key={content.id}>
                        <Typography>{content.name}</Typography>
                        <Box
                          className={
                            isLast ? "linksWrapper marginClass" : "linksWrapper"
                          }
                        >
                          {content.links.map((link) => {
                            return (
                              <Link to={link.link} key={link.id}>
                                {link.name}
                              </Link>
                            );
                          })}
                        </Box>
                      </Box>
                    </>
                  )
                );
              })}
          </Box>
        </Box>
      </Container>
      <Divider className="footerDivider" />
      <Box className="copyright">
        <Typography>
          Copyright {new Date().getFullYear()}. Open Letter Connect.
        </Typography>
        <Typography>Terms | Privacy | Security</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
