import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Avatar,
  Tooltip,
  CssBaseline,
  Typography,
} from "@mui/material";

import mainItems from "../constants/AppbarItems";
import personalImage from "../assets/personalImage.jpg";

import { NavLink, Outlet } from "react-router";
import portfolioImage from "/portfolio.png";

// import { SocialMediaImageList } from "../constants/SocialMediaImageList";
// import { projectItems } from "../constants/ProjectItems";
// import annapurna from "../assets/Annapurna.jpeg";

import { useScrollTrigger } from "@mui/material";
import React from "react";

// function MainHome(props: Props) {

//   return (
//     <>
//       <ElevationScroll {...props}>
//         <AppBar position="static">
//           <Container maxWidth="xl" sx={{ backgroundColor: "black" }}>
//             <Toolbar disableGutters>
//               <Avatar
//                 src={portfolioImage}
//                 sx={{
//                   height: "60px",
//                   width: "60px",
//                 }}
//               />
//               <Box
//                 sx={{
//                   flexGrow: 5,
//                   display: { xs: "none", md: "flex" },
//                   justifyContent: "center",
//                 }}
//               >
//                 {mainItems.map((page) => (
//                   <Button
//                     key={page.path}
//                     sx={{
//                       my: 2,
//                       color: "white",
//                       display: "block",
//                       margin: "0 20px",
//                     }}
//                   >
//                     <Typography
//                       variant="h6"
//                       onClick={() => setUser(page.title)}
//                     >
//                       {page.title}
//                     </Typography>
//                   </Button>
//                 ))}
//               </Box>
//               <Box sx={{ flexGrow: 0 }}>
//                 <Tooltip title="Milan Ghimire">
//                   <Avatar
//                     alt="ProfilePic"
//                     src={personalImage}
//                     sx={{
//                       height: "50px",
//                       width: "50px",
//                     }}
//                   />
//                 </Tooltip>
//               </Box>
//             </Toolbar>
//           </Container>
//         </AppBar>
//       </ElevationScroll>

//       <Outlet />

//       <Box sx={{ width: "100%", height: "10%", backgroundColor: "white" }}>
//         <Container maxWidth="xl" sx={{}}>
//           hello World
//         </Container>
//       </Box>
//     </>
//   );
// }

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactElement<{ elevation?: number }>;
}

function Footer() {
  return (
    <footer className="bg-black text-white text-center p-3 absolute bottom-0 w-full ">
      <p>&copy; 2025 My Website. All rights reserved.</p>
    </footer>
  );
}

const Header = (props: Props) => {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "black" }}>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar disableGutters sx={{ backgroundColor: "black" }}>
            <Avatar
              src={portfolioImage}
              sx={{
                height: "60px",
                width: "60px",
              }}
            />
            <Box
              sx={{
                flexGrow: 5,
                display: { xs: "none", md: "flex", gap: 50 },
                justifyContent: "center",
              }}
            >
              {mainItems.map((page) => (
                <NavLink
                  key={page.path}
                  to={page.path}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  style={({ isActive }) => ({
                    color: isActive ? "Orange" : "White",
                  })}
                >
                  {
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontFamily: "monospace",
                        fontSize: "20px",
                      }}
                    >
                      {page.title}
                    </Typography>
                  }
                </NavLink>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Milan Ghimire">
                <Avatar
                  alt="ProfilePic"
                  src={personalImage}
                  sx={{
                    height: "50px",
                    width: "50px",
                  }}
                />
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </Box>
  );
};

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return children
    ? React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })
    : null;
}

function MainHome() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "black",
        height: "100vh",
      }}
    >
      <Header />

      <Outlet />

      <Footer />
    </Box>
  );
}

export default MainHome;
