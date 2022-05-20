import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./components/Navbar/Navbar.css";
import "./components/PlanetCard/planetCard.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProviderWrapper } from "./context/auth.context"
ReactDOM.render(
  
    <BrowserRouter>
    <AuthProviderWrapper>
      <App />
      </AuthProviderWrapper>
    </BrowserRouter>,
 
  document.getElementById("root")
);
