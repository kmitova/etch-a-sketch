// grab container variable
const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let cell = 0; cell < rows * cols; cell++) {
    let cell = document.createElement("div");
    // cell.innerText = c + 1;
    container.appendChild(cell).className = "grid-item";
  }
}

makeRows(8, 8);
