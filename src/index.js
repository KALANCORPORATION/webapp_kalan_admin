import { StrictMode } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./global.css";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import React from "react";

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
