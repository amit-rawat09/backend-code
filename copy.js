let obj = {};
function br(str) {
  let arr = new Array(str.length);
  for (let i = 0; i < str.length; i++) {
    arr[str.charAt(i)] = (arr[str.charAt(i)] || 0) + 1;
  }

  for (let i = 0; i < arr.length; i++) {
    let char = str.charAt(i);

    let count = arr[char];
    obj[char] = count;
  }
}

br("users");

console.log(obj);

// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.end("hello");
// });

// server.listen(3000, () => {
//   console.log("database is connected");
// });

// console.log("amit" - 100);

// let arr = [1, "a", "b", 3, "3", "amit"];

// let numArray = new Array();
// let strArray = new Array();
// function seperate(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 0 && arr[i] < 10) {
//       numArray.push(arr[i]);
//     } else if (arr[i] >= "a" && arr[i] <= "z") {
//       strArray.push(arr[i]);
//     }
//   }
// }
// seperate(arr);
// console.log(numArray);
// console.log(strArray);

// let arr = [1, 2, 3, 4, 5];

// let arr2 = arr.map((x) => (x > 5));

// console.log(arr2);

if (([] == true)) {
  console.log("amit");
} else {
  console.log("rawat");
}

let arr=[];
console.log(arr)