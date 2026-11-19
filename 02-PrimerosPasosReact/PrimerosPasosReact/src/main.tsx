import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import  PrimerComponente  from "./PrimerComponente.js";
// import ComponenteTarea from "./ComponenteTarea";
// import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimerComponente />
    {/* <ComponenteTarea/> */}
  </StrictMode>,
);
