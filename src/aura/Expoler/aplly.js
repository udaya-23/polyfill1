let obj = {
  name: "zubair",
  lastName: " Sadaqat",
};

function printSomething(state, num) {
  console.log(this.name, this.lastName, state, num);
}

printSomething.apply(obj, ["punjab", "44"]);

// *  Now Lets create our Own PollyFill for Apply  with using of call method

Function.prototype.myApply = function (context, params = []) {
  if (!Array.isArray(params)) {
    throw new Error(this + " is not Array");
  }

  return this.call(context, ...params);
};

printSomething.myApply(obj, ["punjab", "404"]);

//   * Now lets create without using call

Function.prototype.myApply2 = function (context, ...params) {
  if (!Array.isArray(params)) {
    throw new Error(this + " is not Array");
  }
  context.fn = this;
  context.fn(context, ...params);
};

printSomething.myApply(obj, ["Sialkot", "504"]);
