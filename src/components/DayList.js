// DayList.js

// Contains the days list in the nav bar

import React, { useContext } from "react";
import { AppContext } from "../context/ApplicationContext";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const { state } = useContext(AppContext);

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