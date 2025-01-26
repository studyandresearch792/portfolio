import {
  Box,
  Container,
  Typography,
} from "@mui/material";

import { SkillsImageList } from "../constants/SkillsImageList";
import ImagelistComponent from "../utils/ImagelistComponent";

import react from "../assets/react.svg";
import android from "../assets/android.svg";
import aboutMe from"../assets/aboutme.png";


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
          fontWeight: "semi-bold",
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
            fontWeight: "semi-bold",
          }}
        >
          I am a passionate and detail-oriented Android developer with a strong
          foundation in mobile application development and a keen interest in
          expanding my skills in web technologies, particularly React.js. Over
          the past few years, I have honed my abilities in creating intuitive
          and efficient Android applications, mastering Java, Kotlin, and
          Android SDK.
          <br />
          My experience includes developing user-friendly interfaces, optimizing
          app performance, and integrating third-party APIs. Eager to broaden my
          expertise, I am currently diving into the world of front-end
          development with a focus on React.js. My goal is to leverage my mobile
          development background to build dynamic and responsive web
          applications.
          <br /> I am actively learning React.js, JavaScript, and modern web
          development practices, and I am excited about the prospect of
          contributing to innovative projects in this domain. I am seeking an
          internship opportunity where I can apply my existing skills while
          learning from experienced professionals in the React.js ecosystem. I
          am committed to continuous learning, collaboration, and delivering
          high-quality solutions. My proactive approach to problem-solving and
          passion for technology make me a valuable addition to any development
          team.
        </Typography>

        <img
          className="flex justify-center items-center h-[300px] w-[500px] "
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
