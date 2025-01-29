import { Box, Container, Typography } from "@mui/material";

import { SkillsImageList } from "../constants/SkillsImageList";
import ImagelistComponent from "../utils/ImagelistComponent";

import react from "../assets/react.svg";
import android from "../assets/android.svg";
import aboutMe from "../assets/aboutme.png";

const AboutComponent = () => {
  const skillImageList: SkillsImageList[] = [
    {
      name: "react1",
      image: react,
    },
    {
      name: "android1",
      image: android,
    },
    {
      name: "android2",
      image: android,
    },
    {
      name: "android3",
      image: android,
    },
    {
      name: "react2",
      image: react,
    },
  ];
  return (
    <Container
      maxWidth="xl"
      sx={{ maxHeight: "100%", backgroundColor: "black" }}
    >
      <Typography
        variant="h4"
        sx={{
          display: "flex",
          fontFamily: "monospace",
          fontWeight: "bold",
          padding: "20px",
          justifyContent: "center",
          color: "goldenrod",
        }}
      >
        About me
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "orange",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            letterSpacing: "0.1em",
            lineHeight: "1.6",
            padding: "20px",
          }}
        >
          I’m a skilled Android developer with expertise in Java, Kotlin, and
          Android SDK. I have experience building user-friendly apps, optimizing
          performance, and integrating APIs. <br />
          <br />
          Currently, I’m expanding into web development, focusing on React.js,
          JavaScript, and modern web practices. I’m looking for an internship
          where I can apply my skills, learn from experts, and contribute to
          innovative projects. I’m proactive, passionate about technology, and
          dedicated to delivering quality solutions.
        </Typography>

        <img
          className="flex justify-center items-center h-[300px] w-[600px] "
          srcSet={`${aboutMe}?w=264&h=264&fit=crop&auto=format&dpr=2 2x`}
          src={`${aboutMe}?w=264&h=264&fit=crop&auto=format`}
          alt="About Me"
          loading="lazy"
        />
      </Box>

      <ImagelistComponent name="Skill Set" imageList={skillImageList} />

      <ImagelistComponent name="Tools I Used" imageList={skillImageList} />
    </Container>
  );
};

export default AboutComponent;
