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
