import React from "react";
import Joe from "../assets/images/trusted/joe.svg";
import Pockets from "../assets/images/trusted/pockets.svg";
import Estate from "../assets/images/trusted/real-estate.svg";
import Sell from "../assets/images/trusted/sell.svg";
import Invelo from "../assets/images/trusted/invelo.svg";
import GoHighLevel from "../assets/images/trustedcopy/GoHighLevel.png";
import Hubspot from "../assets/images/trustedcopy/Hubspot.png";
import Salesforce from "../assets/images/trustedcopy/Salesforce.png";
import Zapier from "../assets/images/trustedcopy/Zapier.png";

import { Box, Typography } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";

import Icon from "../assets/images/pricing/pricing-icon.svg";
import CrossIcon from "../assets/images/pricing/pricing-off.svg";

// team avatars
import JustinSilverio from "../assets/images/team/justin.webp";
import KaylaBragg from "../assets/images/team/kayla_bragg.webp";
import AlexNejezchleba from "../assets/images/team/alex_nejezchleba.webp";
import CharlieArseniou from "../assets/images/team/charlie_arseniou.webp";
import GregNavarro from "../assets/images/team/greg_navarro.webp";
import AlexPadilla from "../assets/images/team/alex_padilla.webp";
import EvaCuko from "../assets/images/team/eva_cuko.webp";
import JakeSoper from "../assets/images/team/jake_soper.webp";
import JackGriffin from "../assets/images/team/jack_griffin.webp";
import JennBrown from "../assets/images/team/jenn_brown.webp";
import Adrian from "../assets/images/team/adrian.webp";
import Lex from "../assets/images/team/lex.webp";
import Mary from "../assets/images/team/mary.webp";
import Austin from "../assets/images/team/austin.webp";
import Shawn from "../assets/images/team/shawn.webp";
import Rhodney from "../assets/images/team/rhodney.webp";
import Julius from "../assets/images/team/julius.webp";
import VictoriaCid from "../assets/images/team/victoria_cid.webp";

const navItems = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Product",
    link: "/product",
  },
  {
    id: 4,
    name: "Solutions",
    link: "/solutions",
  },
  {
    id: 5,
    name: "Pricing",
    link: "/pricing",
  },
];

const trustedImages = [
  {
    id: 1,
    image: Joe,
  },
  {
    id: 2,
    image: Pockets,
  },
  {
    id: 3,
    image: Estate,
  },
  {
    id: 4,
    image: Sell,
  },
  {
    id: 5,
    image: Invelo,
  },
];

const integrationImages = [
  {
    id: 1,
    image: GoHighLevel,
  },
  {
    id: 2,
    image: Hubspot,
  },
  {
    id: 3,
    image: Salesforce,
  },
  {
    id: 4,
    image: Zapier,
  },
];

const footerItems = [
  {
    id: 1,
    name: "Getting Started",
    links: [
      {
        id: 1,
        name: "About Us",
        link: "/about",
      },
      {
        id: 2,
        name: "Products",
        link: "/products",
      },
      {
        id: 3,
        name: "Solutions",
        link: "/solutions",
      },
      {
        id: 4,
        name: "Pricing",
        link: "/pricing",
      },
      {
        id: 5,
        name: "Contact Us",
        link: "/",
      },
      {
        id: 6,
        name: "Blogs",
        link: "/",
      },
    ],
  },
  {
    id: 2,
    name: "Products and Features",
    links: [
      {
        id: 1,
        name: "One Off and Bulk Mail",
        link: "/",
      },
      {
        id: 2,
        name: "Template Builder",
        link: "/",
      },
      {
        id: 3,
        name: "Postcards Designs",
        link: "/",
      },
      {
        id: 4,
        name: "Address Verification",
        link: "/",
      },
    ],
  },
  {
    id: 3,
    name: "",
    links: [
      {
        id: 1,
        name: "Integration",
        link: "/",
      },
      {
        id: 2,
        name: "Analytics and Mail Tracking",
        link: "/",
      },
      {
        id: 3,
        name: "Expert Marketing Consultants",
        link: "/",
      },
      {
        id: 4,
        name: "Professional Design Services Integrations",
        link: "/",
      },
    ],
  },
  {
    id: 4,
    name: "Products and Features",
    links: [
      {
        id: 1,
        name: "One Off and Bulk Mail",
        link: "/",
      },
      {
        id: 2,
        name: "Template Builder",
        link: "/",
      },
      {
        id: 3,
        name: "Postcards Designs",
        link: "/",
      },
      {
        id: 4,
        name: "Address Verification",
        link: "/",
      },
      {
        id: 5,
        name: "Integrations",
        link: "/",
      },
      {
        id: 6,
        name: "Analytics and Mail Tracking",
        link: "/",
      },
      {
        id: 7,
        name: "Expert Marketing Consultants",
        link: "/",
      },
      {
        id: 8,
        name: "Professional Design Services Integrations",
        link: "/",
      },
    ],
  },
];

const impactData = [
  {
    id: 1,
    title: "Financial Services",
    desc: "Securely reach your clients with tailored communications. Whether it's for new offers or critical information, our platform ensures your message is delivered effectively.",
  },
  {
    id: 2,
    title: "Real Estate",
    desc: "Experience the simplicity yourself with a free sign-up. Create and send a sample campaign in minutes!",
  },
  {
    id: 3,
    title: "Insurance",
    desc: "Experience the simplicity yourself with a free sign-up. Create and send a sample campaign in minutes!",
  },
  {
    id: 4,
    title: "Healthcare",
    desc: "Experience the simplicity yourself with a free sign-up. Create and send a sample campaign in minutes!",
  },
  {
    id: 5,
    title: "Retail & Ecommerce",
    desc: "Experience the simplicity yourself with a free sign-up. Create and send a sample campaign in minutes!",
  },
  {
    id: 6,
    title: "Telecom",
    desc: "Experience the simplicity yourself with a free sign-up. Create and send a sample campaign in minutes!",
  },
];

const faqsData = [
  {
    id: 1,
    title: "Samples and Trial",
    desc: "Experience the simplicity yourself with a free sign-up. Create and send a sample campaign in minutes!",
  },
  {
    id: 2,
    title: "Product Range",
    desc: "Experience the simplicity yourself with a free sign-up. Create and send a sample campaign in minutes!",
  },
  {
    id: 3,
    title: "Beyond Traditional Print Shops",
    desc: "Experience the simplicity yourself with a free sign-up. Create and send a sample campaign in minutes!",
  },
  {
    id: 4,
    title: "Pricing Clarity",
    desc: "Experience the simplicity yourself with a free sign-up. Create and send a sample campaign in minutes!",
  },
  {
    id: 5,
    title: "Free Design Software",
    desc: "Experience the simplicity yourself with a free sign-up. Create and send a sample campaign in minutes!",
  },
  {
    id: 6,
    title: "Enterprise Solutions",
    desc: "Experience the simplicity yourself with a free sign-up. Create and send a sample campaign in minutes!",
  },
];

const createData = (name, calories, fat, carbs, protein) => {
  return { name, calories, fat, carbs, protein };
};

const productFeatures = [
  createData("Users", 1, 3, 10, "Unlimited"),
  createData(
    "Monthly Mailings Limit",
    "Unlimited",
    "Unlimited",
    "Unlimited",
    "Unlimited"
  ),
  createData("Contacts", "Unlimited", "Unlimited", "Unlimited", "Unlimited"),
  createData("Stored Custom Templates", 10, 20, 50, "Unlimited"),
  createData(
    "API Keys (Test and Live)",
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>
  ),
  createData("Webhooks", 1, 3, 10, "Unlimited"),
  createData("Tags", 3, 10, 25, "Unlimited"),
  createData("Custom Fields", 3, 10, 25, "Unlimited"),
  createData(
    "Mailing History",
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>
  ),
  createData(
    "Mail Tracking",
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>
  ),
  createData(
    "Template Editor",
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>
  ),
  createData(
    "HTML Templates",
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>
  ),
  createData(
    "Variable Data",
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>
  ),
  createData(
    "Bulk Contacts Import (per month)",
    "None",
    "Up to 10,000",
    "Up to 100,000",
    "Unlimited"
  ),
  createData(
    "Bulk Contacts Export",
    <Box className="iconWrapper">
      <img src={CrossIcon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>
  ),
  createData(
    "Address Verification",
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>
  ),
  createData(
    "Address Standardization",
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>
  ),
  createData(
    "NCOA (National Change of Address)",
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>
  ),
];
const products = [
  createData(
    "Postcards",
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>
  ),
  createData(
    "Professional Letters",
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>
  ),
  createData(
    "Personal Letters",
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>
  ),
  createData(
    "Self Mailers",
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>
  ),
  createData(
    "Real Penned Letters",
    "None",
    "Up to 10,000",
    "Up to 100,000",
    "Unlimited"
  ),
  createData(
    "Integrations (Zapier/CRM)",
    <Box className="iconWrapper">
      <img src={CrossIcon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>
  ),
  createData(
    "Scheduled Mail",
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>
  ),
  createData(
    "User Roles & Permissions",
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>
  ),
  createData(
    "Analytics Dashboard",
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>
  ),
];
const supportFeatures = [
  createData(
    "Email Support",
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>
  ),
  createData(
    "Chat Support",
    <Box className="iconWrapper">
      <img src={CrossIcon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>
  ),
  createData(
    "Phone Support",
    <Box className="iconWrapper">
      <img src={CrossIcon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={CrossIcon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>
  ),
  createData(
    "Dedicated Account Manager",
    <Box className="iconWrapper">
      <img src={CrossIcon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={CrossIcon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>
  ),
  createData(
    "Custom CRM Integration Support",
    <Box className="iconWrapper">
      <img src={CrossIcon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={CrossIcon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={CrossIcon} alt="icon" />
    </Box>,
    <Box className="iconWrapper">
      <img src={Icon} alt="icon" />
    </Box>
  ),
];
const productsInfo = [
  createData("4x6 Postcard", "$0.810", "$0.596", "$0.543", "Contact Sales"),
  createData("6x9 Postcard", "$0.924", "$0.645", "$0.605", "Contact Sales"),
  createData("6x11 Postcard", "$0.968", "$0.671", "$0.638", "Contact Sales"),
  createData(
    <Box className="productsInfoWrapper">
      <Typography variant="h4">Personal Letters A6</Typography>
      <Box className="productDetails">
        <Typography variant="h6">non-windowed envelope</Typography>
        <Typography variant="h6">(first class + $0.183)</Typography>
      </Box>
    </Box>,
    "$0.924",
    "$0.645",
    "$0.605",
    "Contact Sales"
  ),
  createData(
    <Box className="productsInfoWrapper">
      <Typography variant="h4">Professional Letters</Typography>
      <Box className="productDetails">
        <Typography variant="h6">#10 windowed envelope</Typography>
        <Typography variant="h6">(first class + $0.183)</Typography>
      </Box>
    </Box>,
    "$0.947",
    "$0.827",
    "$0.712",
    "Contact Sales"
  ),
  createData(
    <Box className="productsInfoWrapper">
      <Typography variant="h4">Professional Letters</Typography>
      <Box className="productDetails">
        <Typography variant="h6">#10 non-windowed envelope</Typography>
        <Typography variant="h6">(first class + $0.183)</Typography>
      </Box>
    </Box>,
    "$1.097",
    "$0.977",
    "$0.862",
    "Contact Sales"
  ),
  createData(
    <Box className="productsInfoWrapper">
      <Typography variant="h4">Real Penned Letters</Typography>
      <Box className="productDetails">
        <Typography variant="h6">A6 non-windowed envelope</Typography>
      </Box>
    </Box>,
    "$1.800",
    "$1.700",
    "$1.600",
    "Contact Sales"
  ),
  createData(
    <Box className="productsInfoWrapper">
      <Typography variant="h4">6x18 Bi-Fold Self-Mailers</Typography>
      <Box className="productDetails">
        <Typography variant="h6">(first class +$0.25)</Typography>
      </Box>
    </Box>,
    "$1.130",
    "$0.920",
    "$0.740",
    "Contact Sales"
  ),
  createData(
    <Box className="productsInfoWrapper">
      <Typography variant="h4">9x12 Tri-Fold Self-Mailers</Typography>
      <Box className="productDetails">
        <Typography variant="h6">(first class +$0.25)</Typography>
      </Box>
    </Box>,
    "$1.130",
    "$0.920",
    "$0.740",
    "Contact Sales"
  ),
];

const teamMembers = [
  {
    image: JustinSilverio,
    name: "Justin Silverio",
    designation: "Founder & CEO",
  },
  {
    image: KaylaBragg,
    name: "Kayla Bragg",
    designation: "COO",
  },
  {
    image: AlexNejezchleba,
    name: "Alex Nejezchleba",
    designation: "Production Manager",
  },
  {
    image: CharlieArseniou,
    name: "Charlie Arseniou",
    designation: "Production Lead",
  },
  {
    image: GregNavarro,
    name: "Greg Navarro",
    designation: "Sales Manager",
  },
  {
    image: AlexPadilla,
    name: "Alex Padilla",
    designation: "Marketing Manager",
  },
  {
    image: EvaCuko,
    name: "Eva Cuko",
    designation: "Marketing Assistant",
  },
  {
    image: JakeSoper,
    name: "Jake Soper",
    designation: "CSR",
  },
  {
    image: JackGriffin,
    name: "Jack Griffin",
    designation: "CSR",
  },
  {
    image: JennBrown,
    name: "Jenn Brown",
    designation: "CSR",
  },
  {
    image: Adrian,
    name: "Adrian",
    designation: "CSR",
  },
  {
    image: Lex,
    name: "Lex",
    designation: "Prepress Lead",
  },
  {
    image: Mary,
    name: "Mary",
    designation: "HR/Admin",
  },
  {
    image: Austin,
    name: "Austin",
    designation: "Production Associate",
  },
  {
    image: Shawn,
    name: "Shawn",
    designation: "Production Associate",
  },
  {
    image: Rhodney,
    name: "Rhodney",
    designation: "Prepress Associate",
  },
  {
    image: Julius,
    name: "Julius",
    designation: "Prepress Associate",
  },
  {
    image: VictoriaCid,
    name: "Victoria Cid",
    designation: "Prepress Associate",
  },
];

export {
  navItems,
  trustedImages,
  integrationImages,
  footerItems,
  faqsData,
  impactData,
  productFeatures,
  products,
  supportFeatures,
  productsInfo,
  teamMembers,
};
