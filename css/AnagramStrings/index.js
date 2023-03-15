function AnagramStrings(N, StringArray, Q, Arr) {
  for (let i = 0; i < Q; i++) {
    let indexArray = Arr[i].split("");
    let check = indexArray.length;

    for (let j = 0; j < N; j++) {
      let ansIndexArray = StringArray[i];
      for (let k = 0; k < indexArray.length; k++) {
        if (ansIndexArray.includes(indexArray[k])) {
          check = check - 1;
        }
      }

      if (check === 0) {
        console.log(ansIndexArray);
      }
    }
  }
}

let arr = ["aas", "aas", "aas", "aas", "aas"];

AnagramStrings(6, arr, 6, arr);
