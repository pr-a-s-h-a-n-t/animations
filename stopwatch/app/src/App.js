import React, { useState, useEffect } from "react";

export default function App() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hr, setHr] = useState(0);
  const [start, setStart] = useState(false);

  // timer function

  function timer() {
    setSec((prev) => prev + 1);
    console.log("timer", sec);

    if (sec > 58) {
      setMin((prev) => prev + 1);
      setSec(0);
    }
    if (min > 59) {
      setHr((prev) => prev + 1);
      setMin(0);
    }
  }

  // make useEffect for the stopwatch

  let prevTimer;
  useEffect(() => {
    if (start === true) {
      prevTimer = setInterval(timer, 1000);
    }

    return () => clearInterval(prevTimer);
  }, [sec, start]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            width: "170px",
            justifyContent: "space-between",

            margin: "auto",
            border: "1px solid red",
            padding: " 0 15px",
            borderRadius: "0.5rem",
            marginBottom: "2rem",
          }}
        >
          <h1>{hr < 10 ? "0" + hr : hr}</h1>
          <h1>:</h1>
          <h1>{min < 10 ? "0" + min : min}</h1>
          <h1>:</h1>
          <h1>{sec < 10 ? "0" + sec : sec}</h1>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <button
            onClick={() => {
              setStart(true);
            }}
          >
            Start
          </button>
          <button
            onClick={() => {
              setStart(false);
              clearInterval(prevTimer);
            }}
          >
            Pause
          </button>
          <button
            onClick={() => {
              setStart(false);
              clearInterval(prevTimer);
              setSec(0);
              setMin(0);
              setHr(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
