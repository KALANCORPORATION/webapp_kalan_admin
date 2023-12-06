import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
<<<<<<< Updated upstream

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
=======
import CreateAdherent from "./views/adherent/AdherentByForm"
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./global.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <CreateAdherent />
  </BrowserRouter>
>>>>>>> Stashed changes
);
