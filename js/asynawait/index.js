// let temp;

// let data = async function () {
//   let p1 = async function () {
//     return Promise.resolve("1st promise is resolved");
//   };

//   let p2 = async function () {
//     return Promise.resolve("2st promise is resolved");
//   };

//   let p3 = async function () {
//     return Promise.resolve("3st promise is resolved");
//   };
//   //   console.log(p1(), p2(), p3());
//   temp = Promise.all([p1(), p2(), p3()]);
//   console.log(await temp); // to access the value use await it is alternative for .then!.

//   (await temp).forEach((Element) => {
//     console.log(Element, "resolved value ___");
//   });
// };

// data();

//Q. what is polyfills ?
// ans: It is a peace of code that is not supported by the  browsers.
// so we have to write the polyfills for that code or function or method.

//Q. write a polyfill for forEach method.
// -- by default all browsers support forEach method

// to simulate the polyfills for for each we fire remove the support of forEach method
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// simulate the browser incompatibility
// Array.prototype.forEach = null;

// // array.forEach((ele) => console.log(ele, "console"));

// if (!Array.prototype.forEach) {
//   // polyfills...

//   Array.prototype.forEach = function (callbackFunction) {
//     // argument..

//     let arr = this;
//     for (let val of arr) {
//       callbackFunction(val);
//     }
//   };
// }

// array.forEach((val) => {
//   console.log(val * 2);
// });

// polyfill
// map, filter, reduce, forEach, call , apply, bind, length, slice,
// Push, pop,

//Q. write a polyfill for length property.
// -- by default all browsers support length method

// to simulate the polyfills for length we fire remove the support of forEach method

// simulate the browser incompatibility
Array.prototype.length = null;

// array.forEach((ele) => console.log(ele, "console"));

if (!Array.prototype.length) {
  // polyfills...
  let val = 0;
  array.forEach((ele) => val++);
  Array.prototype.length = val;
}

console.log(array.length);
