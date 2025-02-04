import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

import { SkillsImageList } from "../constants/SkillsImageList";
import ImagelistComponent from "../utils/ImagelistComponent";

import react from "../assets/react.svg";
import android from "../assets/android.svg";
import java from "../assets/java.jpg";
import kotlin from "../assets/kotlin.png";
import firebase from "../assets/firebase.png";
import javascript from "../assets/javascript.jpeg";
import typeScript from "../assets/typescript.png";
import aboutMe from "../assets/aboutme.png";

import github from "../assets/githublogo.png";
import vscode from "../assets/vscode.png";
import androidStudio from "../assets/androidstudio.png";
import Layout from "./layout";

// const AboutComponent = () => {
//   const skillImageList: SkillsImageList[] = [
//     {
//       name: "react",
//       image: react,
//     },
//     {
//       name: "android",
//       image: android,
//     },
//     {
//       name: "java",
//       image: java,
//     },
//     {
//       name: "firebase",
//       image: firebase,
//     },
//     {
//       name: "kotlin",
//       image: kotlin,
//     },
//     {
//       name: "javascript",
//       image: javascript,
//     },
//     {
//       name: "typeScript",
//       image: typeScript,
//     },
//   ];

//   const toolsUsed: SkillsImageList[] = [
//     {
//       name: "github",
//       image: github,
//     },
//     {
//       name: "vscode",
//       image: vscode,
//     },
//     {
//       name: "androidStudio",
//       image: androidStudio,
//     },
//   ];
//   return (
//     <>
//       <Layout>
//         <Box
//           sx={{
//             backgroundColor: "red",
//           }}
//         >
//           test
//         </Box>
//         <Container maxWidth="xl" sx={{ marginTop: "50px", height: "auto" }}>
//           <Card
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               backgroundColor: "black",
//             }}
//           >
//             <Box sx={{ display: "flex", flexDirection: "column" }}>
//               <CardContent sx={{}}>
//                 <Typography
//                   fontFamily="sans-serif"
//                   fontWeight="bold"
//                   fontSize="18px"
//                   lineHeight="1.6"
//                   sx={{ color: "orange", maxWidth: 500 }}
//                 >
//                   I’m a skilled Android developer with expertise in Java,
//                   Kotlin, and Android SDK. I have experience building
//                   user-friendly apps, optimizing performance, and integrating
//                   APIs. <br />
//                   <br />
//                   Currently, I’m expanding into web development, focusing on
//                   React.js, JavaScript, and modern web practices. I’m looking
//                   for an internship where I can apply my skills, learn from
//                   experts, and contribute to innovative projects. I’m proactive,
//                   passionate about technology, and dedicated to delivering
//                   quality solutions.
//                 </Typography>
//               </CardContent>
//             </Box>
//             <CardMedia
//               component="img"
//               sx={{ width: 551 }}
//               image={aboutMe}
//               alt="Live from space album cover"
//             />
//           </Card>

//           <ImagelistComponent name="Skill Set" imageList={skillImageList} />

//           <ImagelistComponent name="Tools I Used" imageList={toolsUsed} />
//         </Container>
//       </Layout>
//     </>
//   );
// };

// export default AboutComponent;
import { useEffect } from "react";

const AboutComponent = () => {
  useEffect(() => {
    document.title = "About Me";
  }, []);

  const skillImageList: SkillsImageList[] = [
    {
      name: "react",
      image: react,
    },
    {
      name: "android",
      image: android,
    },
    {
      name: "java",
      image: java,
    },
    {
      name: "firebase",
      image: firebase,
    },
    {
      name: "kotlin",
      image: kotlin,
    },
    {
      name: "javascript",
      image: javascript,
    },
    {
      name: "typeScript",
      image: typeScript,
    },
  ];

  const toolsUsed: SkillsImageList[] = [
    {
      name: "github",
      image: github,
    },
    {
      name: "vscode",
      image: vscode,
    },
    {
      name: "androidStudio",
      image: androidStudio,
    },
  ];

  return (
    <>
      <Layout>
        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            height: "100%",
          }}
        >
          <Card
            sx={{
              display: "absolute",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "black",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography
                fontFamily="sans-serif"
                fontWeight="bold"
                fontSize="18px"
                marginLeft="2%"
                marginTop="6%"
                lineHeight="1.6"
                sx={{ color: "White", maxWidth: 900 }}
              >
                I’m a skilled Android developer with expertise in Java, Kotlin,
                and Android SDK. I have experience building user-friendly apps,
                optimizing performance, and integrating APIs.
                <br />
                <br />
                Currently, I’m expanding into web development, focusing on
                React.js, JavaScript, and modern web practices. I’m looking for
                an internship where I can apply my skills, learn from experts,
                and contribute to innovative projects. I’m proactive, passionate
                about technology, and dedicated to delivering quality solutions.
              </Typography>

              <CardMedia
                component="img"
                sx={{ width: 550, marginTop: "8%" }}
                image={aboutMe}
                alt="Live from space album cover"
              />

              <Box
                sx={{
                  position: "absolute",
                  height: "20px",
                  width: "100%",
                  alignContent: "flex-end",
                  top: "50%",
                  bottom: 0,
                }}
              >
                <ImagelistComponent name="Tools I Use" imageList={toolsUsed} />
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  height: "20px",
                  width: "100%",
                  top: "70%",
                  bottom: 0,
                }}
              >
                <ImagelistComponent
                  name="Skill Set"
                  imageList={skillImageList}
                />
              </Box>
            </Box>
          </Card>
        </Container>
      </Layout>
    </>
  );
};

export default AboutComponent;
