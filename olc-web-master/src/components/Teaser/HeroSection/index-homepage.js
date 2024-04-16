import React, { useState } from "react";
import { Box, Grid, Typography, TextField, Button, useMediaQuery, useTheme } from "@mui/material";
import MainHero from "../../../assets/images/hero-section/target.webp";
import "./styles.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import TypingEffect from "./TypingEffect";

const HeroSection = (props) => {
  const { subTitle, description } = props;
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSignUp = () => {
    console.log("Sign up with:", email);
    // Implement sign-up logic here
  };

  return (
    <Box sx={{ width: '100%', maxWidth: '1200px', margin: "43px auto 83px" }}>
      <Typography sx={{
        fontSize: '3rem',
        fontWeight: 'bold',
        color: 'white',
        textShadow: '0 0 8px rgba(255, 215, 0, 0.4)',
        textAlign: 'center',
        margin: '20px 0',
        padding: '10px',
        backgroundColor: 'rgba(0,0,0,0.4)',
        borderRadius: '10px',
      }}>
        ✨LAUNCHING IN MAY!✨
      </Typography>
      <Typography sx={{
        fontSize: '24px', // Large text
        color: 'white', // Text color black
        fontFamily: 'Inter', // Using Inter font
        textAlign: 'center',
        margin: '10px 0' // Margin to separate from the banner
      }}>
        Be entered to win over <b>$10,000</b> worth of giveaway's by entering your email below!
      </Typography>
      <Grid container spacing={2} justifyContent="flex-start">
        <Grid item xs={12} md={6}>
          <Typography sx={{
            color: 'white',
            marginBottom: '10px', // Reduced bottom margin
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'left',
            fontSize: isSmallScreen ? '40px' : '60px',
            fontWeight: 'bold',
            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
          }}>
            <TypingEffect words={["Automate", "Personalize", "Redefine", "Customize"]} typingSpeed={90} deletingSpeed={55} delay={800} />
          </Typography>
          <Typography sx={{
            color: 'white',
            paddingTop: '0px', // Adjusted top margin to reduce the space further
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'left',
            fontSize: '60px',
            fontWeight: 'bold',
            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
          }}>
            Your Direct Mail
          </Typography>
          {subTitle && (
            <Typography variant="h6" sx={{
              fontSize: '1.5rem',
              fontStyle: 'italic',
              fontWeight: 'regular',
              color: 'white',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)',
            }}>
              {subTitle}
            </Typography>
          )}
          {description && (
            <Typography sx={{
              color: 'white',
              marginBottom: '10px',
              maxWidth: '800px',
              margin: '0 auto',
              textAlign: 'left',
              fontSize: isSmallScreen ? '40px' : '60px',
              fontWeight: 'bold',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
            }}>
              {description}
            </Typography>
          )}
          <TextField
            label="Enter your email to stay updated"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
            sx={{
              mb: 1,
              mt: 4, // Added margin top
              width: '93%',
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'white',
                borderRadius: '20px',
                transition: 'border-color 0.3s',
                '& fieldset': {
                  borderColor: 'grey',
                  borderWidth: '2px'
                },
                '&:hover fieldset': {
                  borderColor: 'gray',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'black',
                  borderWidth: '2px'
                },
              },
              '& .MuiInputBase-input': {
                color: 'black',
              }
            }}
            InputProps={{
              endAdornment: (
                <Button onClick={handleSignUp} sx={{
                  borderRadius: "25%", // Makes the button round
                  minWidth: "40px",
                  height: "40px",
                  backgroundColor: "black",
                  color: "white",
                  '&:hover': {
                    backgroundColor: "white",
                    color: "black",
                  },
                }}>
                  ➤
                </Button>
              )
            }}
          />
          <Typography sx={{
            color: 'black',
            fontStyle: 'italic',
            fontSize: '0.875rem', // roughly 14px
            textAlign: 'left',
            marginTop: '0px'
          }}>
            *You'll get the first look at our new software and be entered into our $5,000 in giveaways!
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: isSmallScreen ? 'none' : 'block' }}>
          <LazyLoadImage className="heroImage" effect="blur" src={MainHero} alt="hero" style={{ width: '100%', height: 'auto' }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
