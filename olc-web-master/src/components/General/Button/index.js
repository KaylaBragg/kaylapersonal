import React from "react";
import { Button } from "@mui/material";
import { Link } from "gatsby";
import "./styles.scss"; // Ensure this path is correct for your project structure

const GenericButton = ({ title, style, link, onClick = () => {} }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <Link
        to={link}
        target="_blank"
        style={{ textDecoration: "none", display: "inline-block" }} // Makes the link itself inline-block
      >
        <Button
          className="genericButton"
          sx={{ ...style, margin: "auto" }}
          onClick={onClick}
        >
          {title}
        </Button>
      </Link>
    </div>
  );
};

export default GenericButton;
