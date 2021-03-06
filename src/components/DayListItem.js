// DayListItem.js

// Show day component in day list in nav bar

import React from "react";
import classNames from "classnames";
import "../styles/DayListItem.scss";
import { NavLink } from "react-router-dom";

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
    <NavLink
      to={`${props.name}`}
      className={dayClass}
      data-testid="day"
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3>{formatSpots(props.spots)}</h3>
    </NavLink>
  );
}