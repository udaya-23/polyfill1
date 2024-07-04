let btn = document.querySelector(".btn");
let clickCount = document.querySelector(".clicked");
let FuncCount = document.querySelector(".triger");

let click_count = 0;
let Fun_count = 0;

function MyThortall(cb, d) {
  let last_time;

  return (...args) => {
    let now_time_is = new Date().getTime();
    if (now_time_is - last_time < d) return;
    last_time = now_time_is;
    return cb(...args);
  };
}

const Throtall = MyThortall(() => {
  FuncCount.innerHTML = ++Fun_count;
}, 1000);

btn.addEventListener("click", () => {
  clickCount.innerHTML = ++click_count;
  Throtall();
});
