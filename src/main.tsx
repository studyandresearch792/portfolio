import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import MainHome from "./component/MainHome.tsx";
import AboutComponent from "./component/AboutComponent.tsx";
import ContactComponent from "./component/ContactComponent.tsx";
import ProjectComponent from "./component/ProjectComponent.tsx";
import ResumeComponent from "./component/ResumeComponent.tsx";
import HomeComponent from "./component/HomeComponent.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<MainHome />}
          errorElement={<HomeComponent />}
        />
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/project" element={<ProjectComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
        <Route path="/resume" element={<ResumeComponent />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
