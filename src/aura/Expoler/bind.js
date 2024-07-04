let obj = {
  name: "zubair",
  lastName: " Sadaqat",
};

function printSomething(state, num, state2) {
  console.log(this.name, this.lastName, state, num, state2);
}

const built_in_bind = printSomething.bind(obj, "punjab", "404", "state");

built_in_bind();

// *  Now Lets create our Own PollyFill for Bind  with using of apply method

Function.prototype.myBind = function (context, ...params) {
  let fn = this;

  return function (...args) {
    return fn.apply(context, [...params, ...args]);
  };
};

const my_bind = printSomething.myBind(obj, "Islamabad", "100", "state");
my_bind();

// *  without Bind method

Function.prototype.myBind2 = function (context, ...params) {
  context.fn = this;
  return function (...args) {
    context.fn(context, [...params, ...args]);
  };
};

const my_bind2 = printSomething.myBind(obj, "kasur", "100", "state");
my_bind2();
