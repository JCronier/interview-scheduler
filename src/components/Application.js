// Application.js

// Application component

import React from "react";
import { useParams } from "react-router-dom";
import DayList from "./DayList";
import DailyAppointments from "./DailyAppointments";
import { AppContextProvider } from "../context/ApplicationContext";
import "../styles/Application.scss";

// Images

export default function Application() {
  // Custom state hook

  const params = useParams();

  return (
    <AppContextProvider>
      <main className="layout">
        <section className="sidebar">
          <img
            className="sidebar--centered"
            src="images/logo.png"
            alt="Interview Scheduler"
          />
          <hr className="sidebar__separator sidebar--centered" />
          <nav className="sidebar__menu">
            <DayList
              value={params.day || "Monday"}
            />
          </nav>
          <img
            className="sidebar__lhl sidebar--centered"
            src="images/lhl.png"
            alt="Lighthouse Labs"
          />
        </section>
        <DailyAppointments />
      </main>
    </AppContextProvider>
  );
}