// DayListItem.js

// Show day component in day list in nav bar

import React from "react";
import classNames from "classnames";

import "./DayListItem.scss";

export default function DayListItem(props) {
  // Shows spots remaining
  const formatSpots = (spots) => {
    if (spots === 0) return "no spots remaining";
    if (spots === 1) return `${spots} spot remaining`;

    return `${spots} spots remaining`;
  };

  let dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": !props.spots
  })

  return (
    <li
      className={dayClass}
      onClick={() => props.setDay(props.name)}
      data-testid="day"
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3>{formatSpots(props.spots)}</h3>
    </li>
  );
}