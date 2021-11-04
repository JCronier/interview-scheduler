// Selector functions for constructing data arrays for components from state

export function getAppointmentsForDay(state, day) {
  const dayObj = state.days.find(element => element.name === day);

  // Return empty array if day can't be found
  return dayObj ? dayObj.appointments.map(id => state.appointments[id]) : [];
};

// Retrieve interview object from state with interview id
export function getInterview(state, interview) {
  if(interview) {
    const interviewObj = {...interview};
    interviewObj.interviewer = state.interviewers[interview.interviewer];
    return interviewObj;
  }

  return null;
}

export function getInterviewersForDay(state, day) {
  const interviewObj = state.days.find(element => element.name === day);

  // Return empty array if interviewer can't be found
  return interviewObj ? interviewObj.interviewers.map(id => state.interviewers[id]) : [];
}
