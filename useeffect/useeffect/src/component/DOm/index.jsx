import React, { useRef, useState } from "react";

function Index() {
  const [inputType, setInputType] = useState("password");

  const handleToggle = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <div>
      <input type={inputType} />
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
}

export default Index;
