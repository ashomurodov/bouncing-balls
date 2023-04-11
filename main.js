const dvd = document.querySelector(".dvd-container"), img = document.querySelector(".img");

let leftE = 0, topE = 0, topNumber = 2, leftNumber = 3, counter = 0;
setInterval(() => {
  leftE += leftNumber;
  topE += topNumber;
  dvd.style.left = `${leftE}px`;
  dvd.style.top = `${topE}px`;
  if (topE >= window.innerHeight - 137) {
    topNumber = -2;
    counter++;
    img.src = `dvdlogo-0${counter}.svg`;
  } else if (leftE >= window.innerWidth - 300) {
    leftNumber = -3;
    counter++;
    img.src = `dvdlogo-0${counter}.svg`;
  } else if (topE <= 0) {
    topNumber = 2;
    counter++;
    img.src = `dvdlogo-0${counter}.svg`;
  } else if (leftE <= 0) {
    leftNumber = 3;
    counter++;
    img.src = `dvdlogo-0${counter}.svg`;
  }
  if (counter == 7) counter = 0;
}, 15);

// console.log(window.innerWidth, window.innerHeight);
