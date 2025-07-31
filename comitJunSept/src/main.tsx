import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(//Tells React to start the app in the HTML element with ID "root"
  <StrictMode> //Helps catch errors and give warnings in development
    <App />//main logic
  </StrictMode>
);