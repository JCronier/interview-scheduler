import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import "./styles/index.scss";

import Application from "./components/Application";
import DailyAppointments from "./components/DailyAppointments";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Application />}>
        <Route path="days/:day" element={<Application />} />
      </Route>
      <Route
          path="*"
          element={<Application />}
        />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root"));
