// Button.js

// Button component

import React from "react";
import classNames from "classnames";

import "./Button.scss";

export default function Button(props) {
  const label = props.children;
  let buttonClass = classNames("button", {
    "button--confirm": props.confirm,
    "button--danger": props.danger
   });

  return (
    <button
      className={buttonClass}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {label}
    </button>
  );
}
