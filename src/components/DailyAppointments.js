import React, { useContext } from "react";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "../helpers/selectors";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/ApplicationContext";
import Appointment from "./Appointment";
import "../styles/Application.scss";


export default function DailyAppointments() {
  let params = useParams();
  const { state } = useContext(AppContext);

  const currentDay = params.day || "Monday";

  const dailyInterviewers = getInterviewersForDay(state, currentDay);

  const dailyAppointments = getAppointmentsForDay(state, currentDay).map(appointment => {
    const interview = getInterview(state, appointment.interview);
    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
        interviewers={dailyInterviewers}
      />
    )
  });
  return (
    <section className="schedule">
      {dailyAppointments}
      <Appointment key="last" time="5pm" />
    </section>
  )
}