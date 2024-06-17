import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { DamaContextProvider } from "../Context/DamaContext.jsx";
import { ClickedContext } from "../Context/ClickedContext.jsx";
import { MoveContextProvider } from "../Context/MoveContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DamaContextProvider>
    <ClickedContext>
      <MoveContextProvider>
        <App />
      </MoveContextProvider>
    </ClickedContext>
  </DamaContextProvider>
);
