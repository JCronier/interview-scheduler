// Empty.js

// Shows an empty appointment slot

import React from "react";

export default function Empty(props) {
  return (
    <main className="appointment__add">
      <img
        onClick={props.onAdd}
        className="appointment__add-button"
        src="http://localhost:8000/images/add.png"
        alt="Add"
      />
    </main>
  );
}