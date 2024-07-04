// * let newArray = array.filter(callback(element[, index[, array]])[, thisArg])

let arr = [1, 2, 3, 4, 5];

console.log(arr.filter((element, index, array) => element > 2));

// * Lets create now our own filter Function

Array.prototype.myFilter = function (cb, ...params) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) newArr.push(this[i]);
  }
  return newArr;
};

console.log(arr.myFilter((element, index, array) => element > 2));
