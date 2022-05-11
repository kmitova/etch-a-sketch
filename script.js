// grab container variable
const container = document.getElementById("container");
let customRows = 0
let customCols = 0
console.log(document.getElementById('rows-num').value)
const buttonApply = document.getElementById('apply')

// function to generate grid
function generateGrid(rows=8, cols=8) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let cell = 0; cell < rows * cols; cell++) {
    let cell = document.createElement("div");
    // cell.innerText = c + 1;
    container.appendChild(cell).className = "grid-item";
  }
}

function removeOldGrid() {
  const elements = document.getElementsByClassName('grid-item');
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}
buttonApply.addEventListener('click', () => {
  customRows = document.getElementById("rows-num").value;
  customCols = document.getElementById("cols-num").value;
  console.log(customCols)
  removeOldGrid()
  generateGrid(customRows, customCols)

} )
// generateGrid(8, 8);
