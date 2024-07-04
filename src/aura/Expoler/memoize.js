//
//

function memoized(fn, context) {
  let cache = {};
  return (...param) => {
    let key = JSON.stringify(param);
    if (cache[key]) {
      return cache[key];
    }
    cache[key] = fn.call(context || this, ...param);
    return cache[key];
  };
}

function calculate(a, b) {
  for (let index = 0; index < 10000000; index++) {}

  return a * b;
}

const newMemo = memoized(calculate);

console.time("one");
console.log(newMemo(229, 992));
console.timeEnd("one");

console.time("two");
console.log(newMemo(229, 992));
console.timeEnd("two");
