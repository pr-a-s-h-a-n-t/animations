import React, { useReducer } from "react";

import Reducer from "./Reducer";

function ReducerHookComponent() {
  const [state, dispatch] = useReducer(Reducer, { count: 0 });

  function handleClick() {
    dispatch({ type: "INCREMENT" });
  }

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={handleClick}>Click me!</button>
    </>
  );
}

export default ReducerHookComponent;

/*
Q. What is useReducer?
A. useReducer is a hook that is used for state management. It is an alternative to useState. It accepts a reducer function with the application initial state, returns the current application state, then dispatches a function. It handles more complex state logic in an application. It is mostly used when there are multiple sub-values or when the next state depends on the previous one.
*/
