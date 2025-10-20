import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppV1 from "./AppV1.jsx";
import AppV2 from "./AppV2.jsx";
import AppV3 from "./AppV3.jsx";
import AppV4 from "./AppV4.jsx";
import AppV5 from "./AppV5.jsx";
import AppV6 from "./AppV6.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppV6 />
  </StrictMode>
);
