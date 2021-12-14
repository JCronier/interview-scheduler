// Application.js

// Application component

import React from "react";
import { useParams } from "react-router-dom";
import useApplicationData from "../hooks/useApplicationData"
import DayList from "./DayList";
import DailyAppointments from "./DailyAppointments";
import "../styles/Application.scss";

// Images

export default function Application() {
  // Custom state hook
  const { state } = useApplicationData();

  const params = useParams();

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="http://localhost:8000/images/logo.png"
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
          src="http://localhost:8000/images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {<DailyAppointments />}
      </section>
    </main>
  );
}