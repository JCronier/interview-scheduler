// useApplicationData.js

// Custom hook to keep track of interview data

import { useEffect, useReducer } from "react";
import axios from "axios";
import updateSpots from "../helpers/updateSpots";
import reducer from "../reducers/reducer";

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  function bookInterview(id, interview) {
    // Grab appointment object from state
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    // Copy and update appointments
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`/api/appointments/${id}`, { ...appointment })
      .then(() => {
        const newDays = updateSpots(state, appointments);
        dispatch({ type: "SET_INTERVIEW", value: { appointments, days: newDays }});
      });
  }

  function cancelInterview(id) {
    // Grab appointment object from state
    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    // Copy and update appointments
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.delete(`/api/appointments/${id}`)
      .then(() => {
        const newDays = updateSpots(state, appointments);
        dispatch({ type: "SET_INTERVIEW", value: { appointments, days: newDays }});
      });
  }

  // Update
  const setDay = day => dispatch({ type: "SET_DAY", value: { day } });
  const setData = all => {
    const days = all[0].data;
    const appointments = all[1].data;
    const interviewers = all[2].data;
    dispatch(({ type: "SET_APPLICATION_DATA", value: {  days, appointments, interviewers }}));
  };

  // Get app data after app renders
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

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  }
}