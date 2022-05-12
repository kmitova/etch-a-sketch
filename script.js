// VARIABLES
const container = document.getElementById("container");
let customRows = 0;
let customCols = 0;
const buttonApply = document.getElementById("apply");
const DEFAULTCOLOR = "#000000"; // black
let defaultColorOn = true;
let customColor = false;
let oldGridRemoved = false;
let currentColor;
const randomColorChange = document.getElementById("random-color");
const blackColorChange = document.getElementById("default-color");
const eraserOn = document.getElementById("transparent-color");
let eraserSelected = false;


// always generates an 8x8 grid upon loading
window.onload = generateGrid(8, 8);

// FUNCTIONS

// function to generate grid and apply color
function generateGrid(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let cell = 0; cell < rows * cols; cell++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
  applyColor();
}

// color the cells when mouse passes over them
function applyColor() {
  let currentCells = document.querySelectorAll(".grid-item");
  currentCells.forEach((currentCell) =>
    currentCell.addEventListener("mouseover", () => {
      currentCell.style.backgroundColor = colorChange(currentColor);
    })
  );
}
// change color
function colorChange(color) {
  if (eraserSelected) {
    return (color = "#ffffff");
  }
  if (defaultColorOn) {
    return (color = DEFAULTCOLOR);
  } else {
    return (color = generateRandomColor());
  }
}
// generate random color
function generateRandomColor() {
  let maxValue = 0xffffff;
  let randomNumber = Math.random() * maxValue;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randomColor = randomNumber.padStart(6, 0);  // pads until needed length reached
  return `#${randomColor.toUpperCase()}`;
}
// erase cells' color
function eraser() {
  currentCells.forEach((currentCell) =>
    currentCell.addEventListener("mouseover", () => {
      // console.log(e.type);
      currentCell.style.backgroundColor = "white";
    })
  );
}
// generate new grid
function renewGrid() {
  // let elements = document.getElementsByClassName("grid-item");
  // while (elements.length > 0) {
  //   elements[0].parentNode.removeChild(elements[0]);
  // }
  container.replaceChildren();
  generateGrid(customRows, customCols);
  oldGridRemoved = true;
}

// EVENT LISTENERS

// make new custom grid
buttonApply.addEventListener("click", () => {
  customRows = document.getElementById("rows-num").value;
  customCols = document.getElementById("cols-num").value;
  
  if (customCols > 10 || customRows > 10) {
    alert(
      "Maximum row and column size is ten cells. Please enter a smaller number."
    );
    return;
  } else if (customCols <= 0 || customRows <= 0) {
    alert("Please enter a positive number.");
    return;
  }
  renewGrid();
});

// change to random color
randomColorChange.addEventListener("click", () => {
  blackColorChange.checked = false;
  eraserOn.checked = false;
  defaultColorOn = false;
  eraserSelected = false;
  colorChange();
  applyColor();
});

// change back to black
blackColorChange.addEventListener("click", () => {
  randomColorChange.checked = false;
  defaultColorOn = true;
  eraserOn.checked = false;
  eraserSelected = false;
  colorChange();
  applyColor();
});

// activate eraser
eraserOn.addEventListener("click", () => {
  eraserSelected = true;
  randomColorChange.checked = false;
  blackColorChange.checked = false;
  colorChange();
  applyColor();
});
