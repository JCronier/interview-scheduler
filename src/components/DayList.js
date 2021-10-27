import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const dayList = props.days.map(day => {
    return (
      <DayListItem
        {...day}
        key={day.id}
        selected={day.name === props.day}
        setDay={props.setDay}
      />
    );
  });

  return (
    <ul>
      {dayList}
    </ul>
  );
}