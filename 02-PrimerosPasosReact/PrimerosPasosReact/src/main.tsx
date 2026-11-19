import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import  PrimerComponente  from "./PrimerComponente.jsx";
// import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimerComponente />
  </StrictMode>,
);
