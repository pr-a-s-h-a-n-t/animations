//you are given a array of stars and a number of stars to be selected
//after selecting the stars you have to change the color of previous stars adjacent to the selected star from left side.

export default function App() {
  let arr = ["*", "*", "*", "*", "*"];
  let setColor = 3; // this can be dynamic we get it from  props

  const styles = {
    wrapper: {
      width: "fit-content",

      justifyContent: "space-between",
      padding: "0px 4px",

      display: "flex",
      columnGap: "1rem",
      margin: "auto",
      fontSize: "5.5rem",
    },
    targetStar: {
      color: "red",
    },
  };

  //   -------------------------
  //
  //   function Name(name) {
  //     this.name = name;
  //   }

  //   const obj = new Name("prashant");
  //   console.log(obj);

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <div style={styles.wrapper}>
        {arr.map((ele, index) => {
          return (
            <p
              key={index}
              style={index + 1 < setColor ? styles.targetStar : {}}
            >
              {ele}
            </p>
          );
        })}
      </div>
    </div>
  );
}
