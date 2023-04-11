const dvd = document.querySelectorAll(".dvd-container"),
  img = document.querySelectorAll(".img");

function createInterval(topE, leftE, topNumber, leftNumber) {
  let leftR = leftE;
  let topR = topE;
  let leftNumber1 = leftNumber;
  let topNumber1 = topNumber;
  let div = document.createElement("div");
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  div.style.backgroundColor = `#${randomColor}`;
  div.classList.add("box");
  document.body.appendChild(div);
  return setInterval(() => {
    leftR += leftNumber1;
    topR += topNumber1;

    div.style.left = `${leftR}px`;
    div.style.top = `${topR}px`;
    if (topR >= window.innerHeight - 137) {
      console.log(topR);
      topNumber1 = topNumber1 * -1;
    } else if (leftR >= window.innerWidth - 300) {
      leftNumber1 = leftNumber1 * -1;
    } else if (topR <= 0) {
      topNumber1 = topNumber1 * -1;
    } else if (leftR <= 0) {
      leftNumber1 = leftNumber1 * -1;
    }
  }, 15);
}

const newElement = createInterval(400, 0, -3, 2);
const newElement1 = createInterval(400, 550, -4, -1);
const newElement2 = createInterval(50, 550, -3, -2);
const newElement3 = createInterval(0, 100, 3, -3);
const newElement4 = createInterval(300, 100, 3, -2);
const newElement5 = createInterval(500, 400, 3, 2);
const newElement6 = createInterval(250, 300, -5, 2);
const newElement7 = createInterval(200, 800, 3, -2);

// console.log(window.innerWidth, window.innerHeight);
