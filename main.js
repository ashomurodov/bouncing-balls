const dvd = document.querySelectorAll(".dvd-container");
const img = document.querySelectorAll(".img");
document.body.style.backgroundColor = `black`;

function randomColor() {
  let color = Math.floor(Math.random() * 16777215).toString(16);
  return color;
}

function handleClick(element) {
  [document.body.style.backgroundColor, element.style.backgroundColor] = [element.style.backgroundColor, document.body.style.backgroundColor];
}

function createBox([topR, leftR, topNumber1, leftNumber1]) {
  let counter = 0;
  let div = document.createElement("div");
  let _randomColor = randomColor();

  div.style.backgroundColor = `#${_randomColor}`;
  div.classList.add("box");
  div.innerText = counter;
  div.addEventListener("click", () => handleClick(div));
  document.body.appendChild(div);

  return setInterval(() => {
    leftR += leftNumber1;
    topR += topNumber1;

    div.style.left = `${leftR}px`;
    div.style.top = `${topR}px`;

    const makeShorter = (arg) => {
      arg == "top" ? (topNumber1 = topNumber1 * -1) : (leftNumber1 = leftNumber1 * -1);
      _randomColor = randomColor();
      div.style.backgroundColor = `#${_randomColor}`;
      div.style.boxShadow = `-1px -2px 170px 24px #${_randomColor}75`;
      counter++;
      div.innerText = counter;
    };

    if (topR >= window.innerHeight - 125 || topR <= 0) {
      // <---> by top and bottom
      makeShorter("top");
    } else if (leftR >= window.innerWidth - 120 || leftR <= 0) {
      // <---> by left and right 
      makeShorter("left");
    }
  }, 15);
}

const newElement = createBox([200, 23, -3, -2]);
const newElement1 = createBox([300, 263, -5, -2]);
const newElement2 = createBox([70, 242, -3, -2]);
const newElement3 = createBox([4, 200, 3, -3]);
const newElement4 = createBox([340, 143, -2, -3]);

// console.log(window.innerWidth, window.innerHeight);
