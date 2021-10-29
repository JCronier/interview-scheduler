import React, { useState, useEffect } from "react";
import axios from "axios";
import { getAppointmentsForDay } from "../helpers/selectors";

import "./Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment";

export default function Application() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewer: "",
    interviewers: {}
  });

  const dailyAppointments = getAppointmentsForDay(state, state.day);

  const setDay = day => setState(prev => ({...prev, day}));
  const setData = all => {
    const days = all[0].data;
    const appointments = all[1].data;
    const interviewers = all[2].data;
    setState(prev => ({...prev, days, appointments, interviewers}));
  };

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
      ])
      .then(all => {
        setData(all);
      })
  }, []);

  return (
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
            days={state.days}
            value={state.day}
            onChange={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {dailyAppointments.map(appointment => {
          return (
            <Appointment
              key={appointment.id}
              {...appointment}
            />
          )
        })}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
