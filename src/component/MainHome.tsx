import HomeComponent from "./HomeComponent";
import AboutComponent from "./AboutComponent";
import ContactComponent from "./ContactComponent";
import ProjectComponent from "./ProjectComponent";


// import { SocialMediaImageList } from "../constants/SocialMediaImageList";
// import { projectItems } from "../constants/ProjectItems";
// import annapurna from "../assets/Annapurna.jpeg";

function MainHome() {
  return (
    <>
      <HomeComponent />
      <AboutComponent />
      <ProjectComponent />
      <ContactComponent />
    </>
  );
}

export default MainHome;

// <div>
//   <Container
//     maxWidth="xl"
//     sx={{
//       display: "flex",
//       backgroundColor: "transparent",
//       height: "100vh",
//       width: "100%",
//       backgroundImage: `url(${annapurna})`,
//       backgroundSize: "cover",
//       objectFit: "contain",
//       objectPosition:"center",
//       backgroundPosition: "center",
//     }}
//   >
//     {/* App Bar View */}
//     <AppBar
//       position="static"
//       sx={{
//         display: "inline-flex",
//         flexWrap: "wrap",
//         width: "100%",
//         height: "fit-content",
//         borderRadius: "16px",
//         marginTop: "10px",
//         backgroundColor: "transparent",
//       }}
//     >
//       <Box>
//         <Toolbar disableGutters sx={{ justifyContent: "center" }}>
//           <Box sx={{ display: "flex", gap: 10 }}>
//             {mainItems.map((items) => (
//               <Button sx={{ color: "white", fontWeight: "bold" }}>
//                 {items.title}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </Box>
//     </AppBar>

//     {/* Introduction View */}
//     <Box
//       position="absolute"
//       sx={{
//         display: "flex-col",
//         alignSelf: "center",
//         padding: "10px",
//         top: "30%",
//       }}
//     >
//       <Typography
//         variant="h2"
//         sx={{
//           fontFamily: "Monospace",
//           fontWeight: "bold",
//           fontSize: "50px",
//           color: "white",
//         }}
//       >
//         Hi,I am
//         <br />
//         <span className="text-red-400">Milan Ghimire.</span>
//         <br />
//         <h2 className="text-3xl">React Js & Android Developer</h2>
//       </Typography>

//       {/* Social Media View */}

//       {/* <Box sx={{ display: "inline-flex", gap: 5, marginTop: "2%" }}>
//         {SocialMediaImageList.map((items) => (
//           <Card
//             sx={{
//               width: 70,
//               height: 70,
//               backgroundColor: "transparent",
//               borderRadius: "50%",
//               border: "3px solid white",
//             }}
//             onClick={() => console.log("clicked")}
//           >
//             <CardMedia
//               component="img"
//               image={items.icon}
//               alt="social media icon"
//               sx={{
//                 objectFit: "scale-down",
//                 width: "100%",
//                 height: "100%",
//                 display: "flex",
//                 ":hover": { backgroundColor: "gray", border: "white" },
//               }}
//             />
//           </Card>
//         ))}
//       </Box> */}
//     </Box>

//     {/* Project View */}
//     {/* {projectItems.map((items) => (
//       <Box
//         key={items.title}
//         position="absolute"
//         sx={{
//           display: "flex-col",
//           justifyContent: "center",
//           alignItems: "center",
//           top: "30%",
//           left: items.left,
//           width: 200,
//           height: 200,
//           borderRadius: "18px",
//           border: "2px solid white",
//           boxShadow: "0px 0px 10px 10px transparent",
//           ":hover": {
//             border: "1px solid white",
//             borderRadius: "16px",
//             boxShadow: "0px 0px 5px 5px white",
//           },
//         }}
//       >
//         <Card
//           sx={{
//             backgroundColor: "transparent",
//             display: "flex-col",
//             justifyContent: "center",
//             alignItems: "center",
//             flexWrap: "wrap",
//             width: "100%",
//             height: "100%",
//             borderRadius: "16px",
//           }}
//         >
//           <CardMedia
//             component="img"
//             image={items.image}
//             alt="social media icon"
//             sx={{
//               width: "100%",
//               height: "100%",
//               objectFit: "contain",
//               justifyContent: "center",
//               alignItems: "center",
//               padding: "10px",
//             }}
//           />
//         </Card>
//         <Typography
//           variant="h5"
//           sx={{
//             display: "flex",
//             color: "white",
//             fontWeight:"bold",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           {items.title}
//         </Typography>
//       </Box>
//     ))} */}
//   </Container>
// </div>
