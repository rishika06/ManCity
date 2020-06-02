import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/app.css";
// import "./firebase";

import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
