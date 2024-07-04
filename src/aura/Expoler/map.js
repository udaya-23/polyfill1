// let newArray = array.map(function(currentValue, index, array) {

//   });

let arr = [1, 2, 3, 4, 5];

const res = arr.map((currentValue) => currentValue * 2);
console.log(res);

// * Now lets create you own Map function

Array.prototype.myMap = function (cb, ...param) {
  let newArr = [];
  let array = this;
  for (let i = 0; i < array.length; i++) {
    newArr.push(cb(array[i], i, array));
  }
  return newArr;
};

const res2 = arr.myMap((currentValue) => currentValue * 2);
console.log(res2);
