// updateSpots.js

// Updates the number of spots available

export default function updateSpots (state, appointments, dayName) {
  const dayIndex = state.days.findIndex(day => day.name === dayName);
  const day = state.days[dayIndex];
  let spots = 0;

  // increment spots if appointment slot interview is empty
  day.appointments.forEach(id => {
    !appointments[id].interview && spots++;
  })

  console.log(spots)

  // Create new days array without mutating the original state
  const days = [...state.days];
  days.splice(dayIndex, 1, { ...day, spots });

  // return days array
  return days;
};