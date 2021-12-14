import React from "react";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "../helpers/selectors";
import { useParams } from "react-router-dom";
import useApplicationData from "../hooks/useApplicationData";
import Appointment from "./Appointment";
import "../styles/Application.scss";


export default function DailyAppointments(props) {
  let params = useParams();
  const {
    state,
    bookInterview,
    cancelInterview
  } = props.appData;

  const dailyInterviewers = getInterviewersForDay(state, params.day);

  const dailyAppointments = getAppointmentsForDay(state, params.day).map(appointment => {
    const interview = getInterview(state, appointment.interview);
    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
        interviewers={dailyInterviewers}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
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