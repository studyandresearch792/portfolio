import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import MainHome from "./component/MainHome.tsx";
import AboutComponent from "./component/AboutComponent.tsx";

import ProjectComponent from "./component/ProjectComponent.tsx";
import ResumeComponent from "./component/ResumeComponent.tsx";
import HomeComponent from "./component/HomeComponent.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHome />}>
          <Route index element={<HomeComponent />} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/project" element={<ProjectComponent />} />
          <Route path="/resume" element={<ResumeComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
