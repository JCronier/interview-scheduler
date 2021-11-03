import {useState} from "react"

export default function useVisualMode(init) {
  const [mode, setMode] = useState(init);
  const [history, setHistory] = useState([init]);

  const transition = (mode, replace=false) => {
    if(replace) {
      setHistory(prev => [...prev.slice(0,-1)]);
    }
    setMode(() => mode);
    setHistory(prev => [...prev, mode]);
  };

  const back = () => {
    if (history.length > 1) {
      history.pop();
    }
    setMode(() => history[history.length - 1]);
  };

  return { mode, transition, back };
}