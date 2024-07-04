//
//
//

function PromicePollyFill(executor) {
  let onResolve,
    onReject,
    value,
    isFullFiled = false,
    isRejected = false,
    isCalled = false;

  function resolve(val) {
    isFullFiled = true;
    value = val;
    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }
  function reject(val) {
    isRejected = true;
    value = val;
    if (typeof onReject === "function") {
      onReject(val);
      called = true;
    }
  }
  this.then = function (callback) {
    onResolve = callback;

    if (isFullFiled && !isCalled) {
      called = true;
      onResolve(value);
    }

    return this;
  };
  this.catch = function (callback) {
    onReject = callback;
    if (isRejected && !isCalled) {
      isCalled = true;
      onReject(value);
    }

    return this;
  };

  executor(resolve, reject);
}

const examplePollyFill = new PromicePollyFill((resolve, reject) => {
  setTimeout(() => {
    reject(2);
  }, 1000);
});

examplePollyFill
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });
