import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Avatar,
  Typography,
} from "@mui/material";
import mainItems from "../constants/AppbarItems";
import { NavLink, useNavigate } from "react-router";
import ImageSlider from "../utils/ImageSlider";
import personalImage from "../assets/personalImage.jpg";

import { useEffect, useState } from "react";

const HomeComponent = () => {
  const navigate = useNavigate();

  const [mainuser, setUser] = useState("");

  useEffect(() => {
    if (mainuser === "Resume") {
      navigate("/resume");
    }
  }, [mainuser]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "maincv.pdf";
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box sx={{ display: "flex", backgroundColor: "black", height: "100svh" }}>
      <AppBar
        position="static"
        sx={{
          display: "flex",
          backgroundColor: "transparent",
          flexWrap: "wrap",
          height: "fit-content",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <Toolbar
          disableGutters
          sx={{ justifyContent: "center", marginRight: "30px" }}
        >
          <Box sx={{ display: "flex", gap: 10 }}>
            {mainItems.map((items) => (
              <Button
                key={items.title}
                sx={{ color: "white", fontWeight: "bold" }}
                onClick={() => {
                  if (items.title === "Resume") {
                    setUser("Resume");
                  }
                }}
              >
                {items.title}
              </Button>
            ))}
            <Avatar
              alt="Milan Ghimire"
              src={personalImage}
              sx={{
                objectFit: "contain",
                height: "50px",
                width: "50px",
                border: "2px solid white",
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        position={"absolute"}
        sx={{
          height: "100%",
          width: "40%",
          backgroundColor: "orange",
          justifycontent: "flex-start",
          alignItems: "center",
        }}
      >
        <ImageSlider />
      </Box>

      <Box
        position={"absolute"}
        sx={{
          display: "flex-col",
          flexWrap: "wrap",
          top: "30%",
          right: "1%",
        }}
      >
        <Typography variant="h3" sx={{ color: "white", fontWeight: "bold" }}>
          Hi,I am
          <br />
          <span className="text-orange-400">Milan Ghimire</span>
          <br />
          <span>React Js and Android Developer</span>
        </Typography>
        <NavLink to="about">
          <Button
            sx={{
              marginTop: "40px",
              border: "2px solid orange",
              ":hover": {
                backgroundColor: "white",
                border: "white",
                textcolor: "black",
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "monospace",
                fontWeight: "semi-bold",
                color: "goldenrod",
                ":hover": { color: "black", fontWeight: "bold" },
              }}
            >
              Contact Me
            </Typography>
          </Button>
        </NavLink>

        <Button
          sx={{
            marginTop: "40px",
            marginLeft: "20px",
            border: "2px solid orange",
            ":hover": {
              backgroundColor: "white",
              border: "white",
              textcolor: "black",
            },
          }}
          onClick={() => {
            handleDownload();
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "monospace",
              fontWeight: "semi-bold",
              color: "goldenrod",
              ":hover": { color: "black", fontWeight: "bold" },
            }}
          >
            Download Resume
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default HomeComponent;
