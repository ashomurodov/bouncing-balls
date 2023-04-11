const dvd = document.querySelector(".dvd-container");
const img = document.querySelector(".img");

let leftE = 0;
let topE = 0;
let topNumber = 2;
let leftNumber = 3;
let counter = 0;
console.log(window.innerHeight - 135.5);
setInterval(() => {
  leftE += leftNumber;
  topE += topNumber;
  dvd.style.left = `${leftE}px`;
  dvd.style.top = `${topE}px`;
  if (topE >= window.innerHeight - 136) {
    console.log("pastga urilding nomard");
    topNumber = -2;
    counter++;
    img.src = `dvdlogo-0${counter}.svg`;
  } else if (leftE >= window.innerWidth - 300) {
    console.log("chapga urilding nomard");
    leftNumber = -3;
    counter++;
    img.src = `dvdlogo-0${counter}.svg`;
  } else if (topE <= 0) {
    console.log("tepaga urilding nomard");
    topNumber = 2;
    counter++;
    img.src = `dvdlogo-0${counter}.svg`;
  } else if (leftE <= 0) {
    console.log("chapga urilding nomard");
    leftNumber = 3;
    counter++;
    img.src = `dvdlogo-0${counter}.svg`;
  }

  if (counter == 7) counter = 0;
}, 15);

// console.log(window.innerWidth, window.innerHeight);
