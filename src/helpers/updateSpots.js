export default function updateSpots (state, appointments) {
  const dayIndex = state.days.findIndex(day => day.name === state.day);
  const day = state.days[dayIndex];
  let spots = 0;

  // increment spots if appointment slot interview is empty
  day.appointments.forEach(id => {
    !appointments[id].interview && spots++;
  })

  const days = [...state.days];
  days.splice(dayIndex, 1, { ...day, spots });

  // return days array
  return days;
};