import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("application");
  useEffect(() => {
    console.log("1- No dependency array at all");
    //will run when component is loaded and component is updated
    // i.e, componentDidMount and componentDidUpdate
  });
  useEffect(() => {
    console.log("2- Empty dependency array");
    // will run when component is loaded
    //i.e, componentDidMount
  }, []);
  useEffect(() => {
    console.log("3- Dependency array with state");
    //will run when component is loaded and component is updated
    // i.e, componentDidMount and componentDidUpdate
  }, [name]);

  useEffect(() => {
    console.log("4- Dependency array with state and return value");
    return () => console.log("return--- cleaning all previous effects");
    //will run when component is loaded and component is updated
    // i.e, componentDidMount and componentDidUpdate and componentWillUnmount
  }, [name]);

  const clickHandler = () => {
    setName("prashant_");
  };
  return (
    <div className="App">
      <button onClick={clickHandler}>Click to update state</button>
      <p>{`Name: ${name}`}</p>
    </div>
  );
}

export default App;
