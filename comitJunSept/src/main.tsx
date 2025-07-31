import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import GuestList from "./App.tsx";

createRoot(document.getElementById("root")!).render(//Tells React to start the app in the HTML element with ID "root"
  <StrictMode> 
    <GuestList/>
  </StrictMode>
);