import React, { useState } from "react";
import { Helmet } from 'react-helmet';

// MUI Components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

// Generic Button Component
import GenericButton from "../../General/Button";

// images
import Logo from "../../../assets/images/header/site-logo.svg";

// styles
import "./styles.scss";
import { navItems } from "../../../utils/data";

// Link from Gatsby
import { Link } from "gatsby";
import { LazyLoadImage } from "react-lazy-load-image-component";

const drawerWidth = 240;

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const trialBtn = {
    borderRadius: "200px",
    width: "100%",
    minWidth: "193px",
    height: "100%",
    minHeight: "48px",
    fontSize: "16px",
    fontFamily: "Inter !important",
    backgroundColor: "transparent",
    color: "#fff",
    border: "1.5px solid #FFF",
    "&:hover": {
      backgroundColor: "transparent",
    },
  };

  const trialBtnMobile = {
    borderRadius: "200px",
    backgroundColor: "#f06d30cc",
    fontSize: "16px",
    fontFamily: "Inter !important",
    color: "#fff",
    border: "1.5px solid #FFF",
    "&:hover": {
      backgroundColor: "transparent",
    },
  };

  const loginBtn = {
    borderRadius: "200px",
    width: "100%",
    minWidth: "107px",
    height: "100%",
    minHeight: "48px",
    fontSize: "16px",
    fontFamily: "Inter !important",
    backgroundColor: "#fff",
    color: "#303030",
    border: "none",
    "&:hover": {
      backgroundColor: "#fff",
    },
  };

  const drawer = (
    <Box
      className="mobileMenu"
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <LazyLoadImage src={Logo} alt="open-letter" effect="blur" />
      <Divider />
      <List className="mobileList">
        {navItems.map((item) => (
          <Link
            key={item.id}
            activeStyle={{
              borderBottom: "2px solid #000",
            }}
            className="listButtons"
            to={item.link}
          >
            {item.name}
          </Link>
        ))}

        <Box className="headerBtnsWrapper">
          <Link to="https://demo.openletterconnect.com/signup" target="_blank">
            <GenericButton title="Start for Free" style={trialBtnMobile} />
          </Link>
          <Link to="https://demo.openletterconnect.com/login" target="_blank">
            <GenericButton title="Login" style={loginBtn} />
          </Link>
        </Box>
      </List>
    </Box>
  );

  return (
    <>
      <Helmet>
        <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/21994206.js"></script>
      </Helmet>
      <Box sx={{ display: "flex" }}>
        <AppBar component="nav" className="headerWrapper">
          <Container>
            <Toolbar className="toolBarWrapper">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className="hamburgerIcon"
                sx={{
                  mr: 2,
                }}
              >
                <MenuIcon />
              </IconButton>
              <Box className="OLCLogo">
                <Link to="/">
                  <LazyLoadImage src={Logo} alt="open-letter" effect="blur" />
                </Link>
              </Box>
              <Box className="listBtnsWrapper">
                <Box
                  className="listWrapper"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  {navItems.map((item) => (
                    <Link
                      key={item.id}
                      activeClassName="listButtonActive"
                      className="listButtons"
                      to={item.link}
                    >
                      {item.name}
                    </Link>
                  ))}
                </Box>
                <Box className="headerBtnsWrapper">
                  <Link
                    to="https://demo.openletterconnect.com/signup"
                    target="_blank"
                  >
                    <GenericButton title="Start for Free" style={trialBtn} />
                  </Link>
                  <Link
                    to="https://demo.openletterconnect.com/login"
                    target="_blank"
                  >
                    <GenericButton title="Login" style={loginBtn} />
                  </Link>
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            className="hambergerDrawer"
            sx={{
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </>
  );
};

export default Header;
