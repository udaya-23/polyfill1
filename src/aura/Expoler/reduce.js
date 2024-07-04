// let result = array.reduce(function(accumulator, currentValue, index, array) {

//   }, initialValue);

let arr = [1, 2, 3, 4, 5];

const res = arr.reduce((accumulator, currentvalue) => {
  return (accumulator += currentvalue);
}, 0);
console.log(res);

// * Now let Write Custom Polly Fills

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue === undefined ? this[0] : initialValue;
  let startIndex = initialValue === undefined ? 1 : 0;

  for (let i = startIndex; i < this.length; i++) {
    accumulator = cb(accumulator, this[i], i, this);
  }

  return accumulator;
};

const res2 = arr.myReduce((accumulator, currentvalue) => {
  return (accumulator += currentvalue);
}, 0);
console.log(res2);
