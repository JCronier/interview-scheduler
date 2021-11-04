// InterviewList.js

// Shows the appointment list in 

import React from "react";
import InterviewerListItem from "./InterviewerListItem";

import "./InterviewerList.scss";

export default function InterviewerList(props) {
  // array of appointments
  const interviewers = props.interviewers.map(interviewer => {
    return (
      <InterviewerListItem
        name={interviewer.name}
        avatar={interviewer.avatar}
        key={interviewer.id}
        onChange={() => props.onChange(interviewer.id)}
        selected={interviewer.id === props.value}
      />
    );
  })

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewers}
      </ul>
    </section>
  );
}