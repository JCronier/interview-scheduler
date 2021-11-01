import {useState} from "react"

export default function useVisualMode(init) {
  const [mode, setMode] = useState(init);
  const [history, setHistory] = useState([init]);

  const transition = (mode, replace=false) => {
    if(replace) {
      history.pop();
    }

    setHistory(prev => [...prev, mode]);
    setMode(() => mode);
  };

  const back = () => {
    if (history.length > 1) {
      history.pop();
    }
    setMode(() => history[history.length - 1]);
  };

  return { mode, transition, back };
}