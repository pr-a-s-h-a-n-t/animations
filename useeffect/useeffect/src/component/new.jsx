import React, { useEffect, useState } from "react";
const INITIAL_STATE = "";

const caseOne = () => {
  const [message, setMessage] = useState(INITIAL_STATE);
  useEffect(() => {
    loadMessage();
  });
  const loadMessage = () => {
    console.log(">> Loading message <<");
    try {
      fetch("https://json.versant.digital/.netlify/functions/fake-api/message")
        .then((res) => res.json())
        .then((message) => {
          setMessage(message);
        });
    } catch (e) {
      console.log(e, "Error fetching message");
    }
  };
  console.log(`>> Current message is: ${message || "EMPTY"} <<`);
  return <h1>{message}</h1>;
};
export default caseOne;
