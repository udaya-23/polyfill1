// * Lets Write a Polly Fill For Once Function using closure

function once(fn) {
  let ran;
  return function () {
    if (fn) {
      ran = fn.apply(this, arguments);
      fn = null;
    }
    return ran;
  };
}

function hello(name) {
  console.log(" Hello " + name);
}

let newHello = once(hello);

newHello("zubair");
newHello("zubair");
newHello("zubair");
