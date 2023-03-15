// // _promise
// let name = " ";
// const api = " https://disease.sh/v3/covid-19/countries";

// let myPromise = new Promise((resolve, reject) => {
    
//     let data; //synchronusly chalega.

//    fetch(api).then((res) =>  res.json()).then((dta) => data =  dta); //asynchronous aur future run hogi. seven number line promise ke ander aa raha hai future me ans ayega.


//   resolve(data)
//   console.log(data)

//   if (name === "prashant") {
//     resolve(true);
//   }
//   reject("name dosent matched");
// });
// // console.log(myPromise, "mypromise")
// myPromise.then((data) => console.log(data, "resolved"));
// // .catch((err) => console.log(err, "rejected"))

let name = " prashant";
const api = " https://disease.sh/v3/covid-19/countries";

 let mpromise = new Promise((reject, resolve)=>{
 reject(40) // js will always take 1st parameter as resolve
            //  and second parameter as reject
resolve(12)
 }) 

 mpromise.then((res) => console.log(res))
 .catch((err) => console.log(err, "err"))

 console.log("kya ageka code break hoga...")
