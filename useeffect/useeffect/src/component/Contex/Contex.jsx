import React, { useState, createContext } from "react";

export const UserContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "UPDATE_AGE":
      return {
        ...state,
        age: action.payload,
      };
    case "UPDATE_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
}

function ContexComp({ children }) {
  const [user, setUser] = useState({
    name: "Prashant",
    age: 25,
    email: "prashantmishra111@gmail.com",
  });

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
}

export default ContexComp;
