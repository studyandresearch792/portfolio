import React from "react";
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

import { useScrollTrigger } from "@mui/material";

interface LayoutProps {
  children: React.ReactNode;
}

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
    <>
      <header>
        <Box sx={{ backgroundColor: "black" }}>
          <CssBaseline />
          <ElevationScroll {...props}>
            <AppBar>
              <Toolbar disableGutters sx={{ backgroundColor: "black" }}>
                <Avatar
                  src={portfolioImage}
                  sx={{
                    height: "60px",
                    width: "60px",
                    marginLeft: "10px",
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
                        marginRight: "20px",
                      }}
                    />
                  </Tooltip>
                </Box>
              </Toolbar>
            </AppBar>
          </ElevationScroll>
        </Box>
        
      </header>
    </>
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

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
    
      <Header />
      <main className="bg-black h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
