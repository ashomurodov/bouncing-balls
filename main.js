const dvd = document.querySelectorAll(".dvd-container"),
  img = document.querySelectorAll(".img");

function randomColor() {
  let color = Math.floor(Math.random() * 16777215).toString(16);
  console.log(color);
  return color;
}

function createBox(...[topR, leftR, topNumber1, leftNumber1]) {
  let counter = 0;
  let div = document.createElement("div");
  let _randomColor = Math.floor(Math.random() * 16777215).toString(16);
  div.style.backgroundColor = `#${_randomColor}`;
  div.classList.add("box");
  div.innerText = counter;
  document.body.appendChild(div);
  return setInterval(() => {
    leftR += leftNumber1;
    topR += topNumber1;

    div.style.left = `${leftR}px`;
    div.style.top = `${topR}px`;
    if (topR >= window.innerHeight - 125) {
      topNumber1 = topNumber1 * -1;
      _randomColor = randomColor();
      div.style.backgroundColor = `#${_randomColor}`;
      counter++;
      div.innerText = counter;
    } else if (leftR >= window.innerWidth - 120) {
      leftNumber1 = leftNumber1 * -1;
      _randomColor = randomColor();
      div.style.backgroundColor = `#${_randomColor}`;
      counter++;
      div.innerText = counter;
    } else if (topR <= 0) {
      topNumber1 = topNumber1 * -1;
      _randomColor = randomColor();
      div.style.backgroundColor = `#${_randomColor}`;
      counter++;
      div.innerText = counter;
    } else if (leftR <= 0) {
      leftNumber1 = leftNumber1 * -1;
      _randomColor = randomColor();
      div.style.backgroundColor = `#${_randomColor}`;
      counter++;
      div.innerText = counter;
    }
  }, 15);
}

const newElement = createBox(400, 20, -3, 2);
const newElement1 = createBox(400, 643, -4, -1);
const newElement2 = createBox(50, 242, -3, -2);
const newElement3 = createBox(0, 900, 3, -3);
const newElement4 = createBox(300, 143, 4, -2);

// console.log(window.innerWidth, window.innerHeight);
