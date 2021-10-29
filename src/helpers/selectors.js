export function getAppointmentsForDay(state, day) {
  const dayObj = state.days.find(element => element.name === day);

  // Return empty array if day can't be found
  return dayObj ? dayObj.appointments.map(id => state.appointments[id]) : [];
}
