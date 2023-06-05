import React from "react";
import ContexComp from "./Contex.jsx";
import ChildStateComponent from "./Child";

function ParentStateComp() {
  return (
    <div>
      <h1>Parent component</h1>
      <ContexComp>
        <ChildStateComponent />
      </ContexComp>
    </div>
  );
}

export default ParentStateComp;
