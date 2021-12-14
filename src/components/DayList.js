// DayList.js

// Contains the days list in the nav bar

import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {

  const dayList = props.days.map(day => {
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