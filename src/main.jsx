/** @format */

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppContextProvider from "./context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
);
