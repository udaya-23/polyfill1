let btn = document.querySelector(".btn");
let clickCount = document.querySelector(".clicked");
let FuncCount = document.querySelector(".triger");

let click_count = 0;
let Fun_count = 0;

function MyDeobounce(cb, d) {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
}

const debounce = MyDeobounce(() => {
  FuncCount.innerHTML = ++Fun_count;
}, 800);

btn.addEventListener("click", () => {
  clickCount.innerHTML = ++click_count;
  debounce();
});
