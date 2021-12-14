// Appointment/index.js

// The Appointment component where a user can create, edit and delete interviews

import React from "react";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";
import useVisualMode from "../../hooks/useVisualMode";
import "./Appointment.scss"
import { useLocation } from "react-router-dom";

export default function Appointment(props) {
  // View mode constants
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

  // View mode custom hook
  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY);
  const appointmentId = props.id;

  const location = useLocation();

  function save(name, interviewer, day) {
    const interview = {
      student: name,
      interviewer
    };

    // Show status saving
    transition(SAVING, true);

    // Axios call to api server
    props.bookInterview(appointmentId, interview, day)
      .then(() => {
        transition(SHOW);
      })
      .catch(() => {
        transition(ERROR_SAVE, true);
      })
  }

  function deleteInterview(id, day) {

    // Show status deleting
    transition(DELETING, true);

    // Axios call to api server
    props.cancelInterview(id, day)
      .then(() => {
        transition(EMPTY);
      })
      .catch(() => {
        transition(ERROR_DELETE, true);
      })
  }

  return (
    <article className="appointment">
      <Header time={props.time} />

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}

      {mode === SHOW &&
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
        />
      }

      {mode === CREATE &&
        <Form
          interviewers={props.interviewers}
          onCancel={() => back()}
          onSave={save}
        />
      }

      {mode === SAVING && <Status message="Saving" />}

      {mode === DELETING && <Status message="Deleting" />}

      {mode === CONFIRM &&
        <Confirm
          onCancel={() => back()}
          onConfirm={() => deleteInterview(props.id)}
        />
      }

      {mode === EDIT &&
        <Form
          student={props.interview.student}
          interviewer={props.interview.interviewer.id}
          interviewers={props.interviewers}
          onCancel={() => back()}
          onSave={save}
        />
      }

      {mode === ERROR_DELETE &&
        <Error
          message="Could not cancel appointment."
          onClose={() => back()}
        />
      }

      {mode === ERROR_SAVE &&
        <Error
          message="Could not create appointment."
          onClose={() => back()}
        />
      }
    </article>
  );
}