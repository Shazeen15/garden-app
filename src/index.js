import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
//styles
import "./styles/reset.css";
import "./styles/app.css";
import "./styles/addFormStyle.css";
import "./styles/navStyle.css";
import "./styles/plant.css";
import "./styles/home.css";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
