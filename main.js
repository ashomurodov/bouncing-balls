const dvd = document.querySelector(".dvd-container");
let leftE = 0;
let topE = 0;
let topNumber = 2;
let leftNumber = 3;
console.log(window.innerHeight - 135.5);
setInterval(() => {
  leftE += leftNumber;
  topE += topNumber;
  dvd.style.left = `${leftE}px`;
  dvd.style.top = `${topE}px`;
  if (topE >= window.innerHeight - 136) {
    console.log("pastga urilding nomard");
    topNumber = -2;
  } else if (leftE >= window.innerWidth - 300) {
    console.log("chapga urilding nomard");
    leftNumber = -3;
  } else if (topE <= 0) {
    console.log("tepaga urilding nomard");
    topNumber = 2;
  } else if (leftE <= 0) {
    console.log("chapga urilding nomard");
    leftNumber = 3;
  }
}, 20);

// console.log(window.innerWidth, window.innerHeight);
