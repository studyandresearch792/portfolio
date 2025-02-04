import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import MainHome from "./component/MainHome.tsx";
import AboutComponent from "./component/AboutComponent.tsx";

import ResumeComponent from "./component/ResumeComponent.tsx";
import HomeComponent from "./component/HomeComponent.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHome />}>
          <Route index element={<HomeComponent />} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/resume" element={<ResumeComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
