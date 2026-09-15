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



