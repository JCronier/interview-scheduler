// Error.js

// Shows an error when there is a problem with saving/cancelling an appointment

import React from "react";

export default function Error(props) {
  return (
    <main className="appointment__card appointment__card--error">
      <section className="appointment__error-message">
        <h1 className="text--semi-bold">Error</h1>
        <h3 className="text--light">{props.message}</h3>
      </section>
      <img
        className="appointment__error-close"
        src="http://localhost:8000/images/close.png"
        alt="Close"
        onClick={props.onClose}
      />
    </main>
  );
}