import React from "react";
import "../App.css";
/*
Q. you have array of items and you have to select the items and show the selected items in a list.
 you have to use checkbox to select the items.

*/
function CheckboxSelect() {
  const [myArmor, setMyArmor] = React.useState(() => []); // ["Mark I", "Mark II"
  const armorOptions = [
    { id: 1, armor: "Mark I" },
    { id: 2, armor: "Mark II" },
    { id: 3, armor: "Mark III" },
    { id: 4, armor: "Mark IV" },
    { id: 5, armor: "Mark V" },
    { id: 6, armor: "Mark VI" },
  ];

  const handleArmorSelect = (id, isChecked) => {
    console.log(id, isChecked, "----");
    if (isChecked) {
      const selectedArmor = armorOptions.filter((ele) => {
        return ele.id === id;
      });
      const [armor] = selectedArmor;
      setMyArmor((prev) => [...prev, armor]);
    } else if (isChecked === false) {
      const selectedArmor = myArmor.filter((ele) => {
        return ele.id !== id;
      });

      console.log(selectedArmor, "filtered armor..");

      setMyArmor(selectedArmor);
    }
  };

  console.log(myArmor, "myArmor");
  // Q. what is the output of the below function and why?
  // function guessTheOutPut() {
  //   return;
  //   const obj = {
  //     guess: "the output",
  //   };
  // }
  // console.log(guessTheOutPut(), "guessTheOutPut function invoked");
  // o/p - undefined

  return (
    <div className="App">
      <h1>Select Armor </h1>
      {armorOptions.map((ele) => {
        return (
          <div key={ele.id}>
            <span>
              <input
                type="checkbox"
                name="select"
                id="selectArmor"
                onClick={(e) => handleArmorSelect(ele.id, e.target.checked)}
              />
            </span>{" "}
            <span>{ele.armor}</span>
          </div>
        );
      })}

      <div>
        <h1>Selected Armor : </h1>

        {myArmor && myArmor.length === 0 ? (
          <h2>No Armor Selected </h2>
        ) : myArmor && myArmor.length > 0 ? (
          myArmor.map((ele) => <h2 key={ele.id}>{ele.armor}</h2>)
        ) : null}
      </div>
    </div>
  );
}

export default CheckboxSelect;
