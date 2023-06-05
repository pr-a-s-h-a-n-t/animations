import React, { useContext, useState } from "react";
import { UserContext } from "./Contex.jsx";

function GreatGrandChildStateComponent() {
  // const { age, name, email } = useContext(UserContext);
  const [user, setUser] = useContext(UserContext);
  const { age, name, email } = user;
  console.log("user_name", name, "user_age", age, "user_email", email);
  const [selectedFeild, setSelectedField] = useState("");
  const [input, setInput] = useState("");
  const inputRef = React.createRef();
  const updateField = () => {
    switch (selectedFeild) {
      case "name":
        setUser({ ...user, name: input });
        break;
      case "age":
        setUser({ ...user, age: input });
        break;
      case "email":
        setUser({ ...user, email: input });
        break;
      default:
        break;
    }
    setInput("");
  };

  const handleClick = (e) => {
    setSelectedField(e.target.id);
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>
        GreatGrandChild component name is was able to access the contex.
        <input
          type="text"
          ref={inputRef}
          id="input"
          placeholder={selectedFeild}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button onClick={updateField}> Update </button>
        <p
          style={{
            cursor: "pointer",
          }}
          onClick={handleClick}
          id="name"
        >
          user name is {name}
        </p>
        <p
          style={{
            cursor: "pointer",
          }}
          onClick={handleClick}
          id="age"
        >
          user age is {age}
        </p>
        <p
          style={{
            cursor: "pointer",
          }}
          onClick={handleClick}
          id="email"
        >
          user email is {email}
        </p>
      </h1>
    </div>
  );
}

export default GreatGrandChildStateComponent;

