let obj = {
  name: "zubair",
  lastName: " Sadaqat",
};

function printSomething(state, num) {
  console.log(this.name, this.lastName, state, num);
}

printSomething.call(obj, "punjab", "44");

// *  Now Lets create our Own PollyFill for Call with using of apply method

Function.prototype.myCall = function (context, ...params) {
  return this.apply(context, params);
};

printSomething.myCall(obj, "punjab", "450");

// * Without using Apply Method

Function.prototype.myCall2 = function (context, ...params) {
  context.fn = this;
  context.fn(...params);
};

printSomething.myCall2(obj, "punjab", "450");
