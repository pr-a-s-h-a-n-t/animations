import { useState, useMemo, useEffect } from "react";
export default function OptimizeWithMemo() {
  const [grade, setGrade] = useState(3);
  const countPopulation = (grade) => {
    return grade ** 2;
  };
  const memoizedVal = useMemo(
    () => countPopulation(grade),
    [
      /* empty */
    ]
  );

  useEffect(() => {
    console.log(`Initial Memoized Value is: ${memoizedVal}`);
  }, [memoizedVal]);

  return (
    <div className="App">
      <RenderVal grade={grade} val={memoizedVal} />
      <button onClick={() => setGrade((prevGrade) => (prevGrade += 1))}>
        Increase Grade
      </button>
    </div>
  );
}
const RenderVal = ({ grade, val }) => {
  return (
    <>
      <p>Current Grade: {grade}</p>
      <p>Current Population: {val}</p>
    </>
  );
};
