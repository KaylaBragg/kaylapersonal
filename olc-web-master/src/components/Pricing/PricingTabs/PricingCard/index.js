import React from "react";

// MUI Components
import { Box, Button, Typography } from "@mui/material";

// styles
import "./styles.scss";
import { StaticImage } from "gatsby-plugin-image";

const PricingCard = () => {
  return (
    <Box className="pricingCardsWrapper">
      {/* first Card */}
      <Box className="pricingCardWrapper">
        <Box className="packageSection">
          <Box>
            <Typography>Starter</Typography>
            <Typography variant="h4">Free</Typography>
          </Box>
          <Button className="nonActive">Start for Free!</Button>
        </Box>
        <Box className="featureSection">
          <Typography variant="h4">Product Features</Typography>
          <Box className="featureList">
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-icon.svg"
                alt="alt-image"
              />
              <Typography>1 User</Typography>
            </Box>
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-icon.svg"
                alt="alt-image"
              />
              <Typography>10 Stored Custom Templates</Typography>
            </Box>
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-icon.svg"
                alt="alt-image"
              />
              <Typography>1 Webhooks</Typography>
            </Box>
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-icon.svg"
                alt="alt-image"
              />
              <Typography>3 Tags</Typography>
            </Box>
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-icon.svg"
                alt="alt-image"
              />
              <Typography>3 Custom Fields</Typography>
            </Box>
          </Box>
        </Box>
        <Box className="supportSection">
          <Typography variant="h4">Support Features</Typography>
          <Box className="featureList">
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-icon.svg"
                alt="alt-image"
              />
              <Typography>Email Support</Typography>
            </Box>
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-off.svg"
                alt="alt-image"
              />
              <Typography
                sx={{
                  opacity: 0.3,
                }}
              >
                Chat Support
              </Typography>
            </Box>
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-off.svg"
                alt="alt-image"
              />
              <Typography
                sx={{
                  opacity: 0.3,
                }}
              >
                Phone Support
              </Typography>
            </Box>
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-off.svg"
                alt="alt-image"
              />
              <Typography
                sx={{
                  opacity: 0.3,
                }}
              >
                Dedicated Account Manager
              </Typography>
            </Box>
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-off.svg"
                alt="alt-image"
              />
              <Typography
                sx={{
                  opacity: 0.3,
                }}
              >
                Custom CRM Integration Support
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* second Card */}
      <Box className="pricingCardWrapper popular">
        <Box className="packageSection">
          <Box>
            <Typography>Growth</Typography>
            <Typography variant="h4">
              $99<span>/mo.</span>
            </Typography>
          </Box>
          <Button className="nonActive active">Get Started</Button>
        </Box>
        <Box className="featureSection">
          <Typography variant="h4">Product Features</Typography>
          <Box className="featureList">
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-icon.svg"
                alt="alt-image"
              />
              <Typography>3 Users</Typography>
            </Box>
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-icon.svg"
                alt="alt-image"
              />
              <Typography>20 Stored Custom Templates</Typography>
            </Box>
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-icon.svg"
                alt="alt-image"
              />
              <Typography>3 Webhooks</Typography>
            </Box>
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-icon.svg"
                alt="alt-image"
              />
              <Typography>10 Tags</Typography>
            </Box>
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-icon.svg"
                alt="alt-image"
              />
              <Typography>10 Custom Fields</Typography>
            </Box>
          </Box>
        </Box>
        <Box className="supportSection">
          <Typography variant="h4">Support Features</Typography>
          <Box className="featureList">
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-icon.svg"
                alt="alt-image"
              />
              <Typography>Email Support</Typography>
            </Box>
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-icon.svg"
                alt="alt-image"
              />
              <Typography>Chat Support</Typography>
            </Box>
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-off.svg"
                alt="alt-image"
              />
              <Typography
                sx={{
                  opacity: 0.3,
                }}
              >
                Phone Support
              </Typography>
            </Box>
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-off.svg"
                alt="alt-image"
              />
              <Typography
                sx={{
                  opacity: 0.3,
                }}
              >
                Dedicated Account Manager
              </Typography>
            </Box>
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-off.svg"
                alt="alt-image"
              />
              <Typography
                sx={{
                  opacity: 0.3,
                }}
              >
                Custom CRM Integration Support
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Third Card */}
      <Box className="pricingCardWrapper">
        <Box className="packageSection">
          <Box>
            <Typography>Professional</Typography>
            <Typography variant="h4">
              $399<span>/mo.</span>
            </Typography>
          </Box>
          <Button className="nonActive">Get Started</Button>
        </Box>
        <Box className="featureSection">
          <Typography variant="h4">Product Features</Typography>
          <Box className="featureList">
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-icon.svg"
                alt="alt-image"
              />
              <Typography>10 Users</Typography>
            </Box>
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-icon.svg"
                alt="alt-image"
              />
              <Typography>50 Stored Custom Templates</Typography>
            </Box>
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-icon.svg"
                alt="alt-image"
              />
              <Typography>10 Webhooks</Typography>
            </Box>
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-icon.svg"
                alt="alt-image"
              />
              <Typography>25 Tags</Typography>
            </Box>
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-icon.svg"
                alt="alt-image"
              />
              <Typography>25 Custom Fields</Typography>
            </Box>
          </Box>
        </Box>
        <Box className="supportSection">
          <Typography variant="h4">Support Features</Typography>
          <Box className="featureList">
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-icon.svg"
                alt="alt-image"
              />
              <Typography>Email Support</Typography>
            </Box>
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-icon.svg"
                alt="alt-image"
              />
              <Typography>Chat Support</Typography>
            </Box>
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-icon.svg"
                alt="alt-image"
              />
              <Typography>Phone Support</Typography>
            </Box>
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-icon.svg"
                alt="alt-image"
              />
              <Typography>Dedicated Account Manager</Typography>
            </Box>
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-off.svg"
                alt="alt-image"
              />
              <Typography
                sx={{
                  opacity: 0.3,
                }}
              >
                Custom CRM Integration Support
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* fourth Card */}
      <Box className="pricingCardWrapper">
        <Box className="packageSection">
          <Box>
            <Typography
              variant="h4"
              sx={{
                marginTop: "80px",
              }}
            >
              Enterprise
            </Typography>
          </Box>
          <Button className="nonActive salesBtn">Contact Sales</Button>
        </Box>
        <Box className="featureSection">
          <Typography variant="h4">Product Features</Typography>
          <Box className="featureList">
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-icon.svg"
                alt="alt-image"
              />
              <Typography>Unlimited User</Typography>
            </Box>
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-icon.svg"
                alt="alt-image"
              />
              <Typography>Unlimited Stored Custom Templates</Typography>
            </Box>
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-icon.svg"
                alt="alt-image"
              />
              <Typography>Unlimited Webhooks</Typography>
            </Box>
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-icon.svg"
                alt="alt-image"
              />
              <Typography>Unlimited Tags</Typography>
            </Box>
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-icon.svg"
                alt="alt-image"
              />
              <Typography>Unlimited Custom Fields</Typography>
            </Box>
          </Box>
        </Box>
        <Box className="supportSection">
          <Typography variant="h4">Support Features</Typography>
          <Box className="featureList">
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-icon.svg"
                alt="alt-image"
              />
              <Typography>Email Support</Typography>
            </Box>
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-icon.svg"
                alt="alt-image"
              />
              <Typography>Chat Support</Typography>
            </Box>
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-icon.svg"
                alt="alt-image"
              />
              <Typography>Phone Support</Typography>
            </Box>
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-icon.svg"
                alt="alt-image"
              />
              <Typography>Dedicated Account Manager</Typography>
            </Box>
            <Box className="featureItem">
              <StaticImage
                src="../../../../assets/images/pricing/pricing-icon.svg"
                alt="alt-image"
              />
              <Typography>Custom CRM Integration Support</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PricingCard;
