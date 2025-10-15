import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "../src/locales/i18n"; // 👈 muy importante: esto inicializa las traducciones

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
