import React, { useState, useRef } from "react";

function Db() {
  const [input, setInput] = useState("");
  const [_p, set_p] = useState([]);
  const [__, set__] = useState([]);
  const [___, set___] = useState([]);
  const inputRefs = useRef([]);

  const clickHandler = () => {
    console.log("_input added_");
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
    set_p([..._p, input]);
    set__([...__, input]);
    set___([...___, input]);
    setInput("");
  };

  const addNewInput = () => {
    set_p([..._p, ""]);
    set__([...__, ""]);
    set___([...___, ""]);
  };

  // const handleInputChange = (e, index, stateSetter) => {
  //   if (Array.isArray(stateSetter)) {
  //     const updatedState = [...stateSetter];
  //     updatedState[index] = e.target.value;
  //     stateSetter(updatedState);
  //   } else {
  //     stateSetter(e.target.value);
  //   }
  // };

  return (
    <div>
      {_p.length === 0 && __.length === 0 && ___.length === 0 ? (
        <div>
          <input
            type="text"
            ref={(ref) => (inputRefs.current[0] = ref)}
            onMouseEnter={clickHandler}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={clickHandler}>Search</button>
        </div>
      ) : null}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          columnGap: "2rem",
          alignItems: "center",
        }}
      >
        <div>
          {___.map((item, index) => {
            return (
              <div key={`___${index}`}>
                <input
                  type="text"
                  ref={(ref) => (inputRefs.current[index + 1] = ref)}
                  onMouseEnter={clickHandler}
                  value={item}
                  onChange={(e) => handleInputChange(e, index, set___)}
                />
                <button onClick={clickHandler}>Search</button>
              </div>
            );
          })}
        </div>
        <div>
          {_p.map((item, index) => {
            return (
              <div key={`_p${index}`}>
                <input
                  type="text"
                  ref={(ref) => (inputRefs.current[index + 1] = ref)}
                  onMouseEnter={clickHandler}
                  value={item}
                  onChange={(e) => handleInputChange(e, index, set_p)}
                />
                <button onClick={clickHandler}>Search</button>
              </div>
            );
          })}
        </div>
        <div>
          {__.map((item, index) => {
            return (
              <div key={`__${index}`}>
                <input
                  type="text"
                  ref={(ref) => (inputRefs.current[index + 1] = ref)}
                  onMouseEnter={clickHandler}
                  value={item}
                  onChange={(e) => handleInputChange(e, index, set__)}
                />
                <button onClick={clickHandler}>Search</button>
              </div>
            );
          })}
        </div>
      </div>
      <button onClick={addNewInput}>Add New Input</button>
    </div>
  );
}

export default Db;
