// useVisualMode.js

// Keeps track of the view that is shown in the appointment component

import {useState} from "react"

export default function useVisualMode(init) {
  const [mode, setMode] = useState(init);
  const [history, setHistory] = useState([init]);

  // Transition to new view, delete previous if replace is true
  const transition = (mode, replace=false) => {
    if(replace) {
      setHistory(prev => [...prev.slice(0,-1)]);
    }
    setMode(() => mode);
    setHistory(prev => [...prev, mode]);
  };

  // Go back one view
  const back = () => {

    // View in initial mode
    if (history.length > 1) {
      history.pop();
    }
    setMode(() => history[history.length - 1]);
  };

  return { mode, transition, back };
}