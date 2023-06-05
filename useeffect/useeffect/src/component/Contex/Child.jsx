import React from "react";
import GreatGrandChildStateComponent from "./GreatGrandChild";

function ChildStateComponent() {
  return (
    <div>
      <h1> child component </h1>
      <GreatGrandChildStateComponent />
    </div>
  );
}

export default ChildStateComponent;
