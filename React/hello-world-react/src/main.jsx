import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import List from "./components/TodoList/List";
import ContadorConUseState from "./components/Contador/ContadorConUseState";
// import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContadorConUseState />
  </StrictMode>
);
