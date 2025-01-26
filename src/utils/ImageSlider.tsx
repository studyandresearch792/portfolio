import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import react from "../assets/react.svg";
import android from "../assets/android.svg";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

import { red } from "@mui/material/colors";

const images = [
  react,
  android,
  github,
  linkedin
  // Add more image paths here
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

return (
  <Box
    display="flex"
    sx={{
      height: "80%",
      padding: "100px",
      margin: "20px",
      backgroundImage: `url(${images[currentIndex]})`,
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      justifyContent: "center",
      alignItems: "center",
      transition: "background-image 1s ease-in-out",
    }}
  />
);
};

export default ImageSlider;


