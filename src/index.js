// Helper styles for demo
import "./helper.css";
import SignupForm from "./helper";

import React from "react";
import { render } from "react-dom";

const App = () => (
  <div className="app">
    <h1> Formik </h1>
    <SignupForm />
  </div>
);

render(<App />, document.getElementById("root"));
