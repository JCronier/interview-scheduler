// DayList.js

// Contains the days list in the nav bar

import React from "react";
import useApplicationData from "../hooks/useApplicationData";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const { state } = useApplicationData();

  const dayList = state.days.map(day => {
    return (
      <DayListItem
        {...day}
        key={day.id}
        selected={day.name === props.value}
      />
    );
  });

  return (
    <ul>
      {dayList}
    </ul>
  );
}