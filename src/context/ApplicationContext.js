import React, { useReducer, createContext } from "react";

// Reducer
import reducer from "../reducers/reducer";

export const AppContext = createContext();

export function AppContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, {
    days: [],
    appointments: {},
    interviewers: {}
  });

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {props.children}
    </AppContext.Provider>
  );
}