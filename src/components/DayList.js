// DayList.js

// Contains the days list in the nav bar

import React from "react";
import { useParams } from "react-router-dom";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  let params = useParams();

  const dayList = props.days.map(day => {
    return (
      <DayListItem
        {...day}
        key={day.id}
        selected={day.name === (params.day || "Monday")}
      />
    );
  });

  return (
    <ul>
      {dayList}
    </ul>
  );
}