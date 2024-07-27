const board = document.querySelector("#board");

const colors = [];


const SQUARES_NUM = 552;

for (let i = 0; i < SQUARES_NUM; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));

  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(elem) {
  const color = randomColor();
  elem.style.backgroundColor = color;
  elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(elem) {
  elem.style.backgroundColor = "rgb(57, 55, 55)";
  elem.style.boxShadow = "0 0 2px rgb(57, 55, 55)";
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
