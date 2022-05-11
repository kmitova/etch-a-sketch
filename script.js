// VARIABLES
const container = document.getElementById("container");
let customRows = 0;
let customCols = 0;
console.log(document.getElementById("rows-num").value);
const buttonApply = document.getElementById("apply");
const DEFAULTCOLOR = "#000000"; // black
let customColor = false;
let oldGridRemoved = false;
let currentColor

// always generates an 8x8 grid upon loading
window.onload = generateGrid(8, 8);

// FUNCTIONS

// function to generate grid and apply color
function generateGrid(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let cell = 0; cell < rows * cols; cell++) {
    let cell = document.createElement("div");
    // cell.innerText = c + 1;
    container.appendChild(cell).className = "grid-item";
  }
  applyColor();
}

// color the cells when mouse passes over them
function applyColor() {
  let currentCells = document.querySelectorAll(".grid-item");
  // make cells change color; currently works only in the default case
  currentCells.forEach((currentCell) =>
    currentCell.addEventListener("mouseover", () => {
      // console.log(e.type);
      currentCell.style.backgroundColor = colorChange(currentColor);
    })
  );
}

function colorChange(color) {
  return color = DEFAULTCOLOR
}

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
