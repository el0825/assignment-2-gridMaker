// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

const table = document.getElementById('grid');

// Add a row
function addR() {
    const newRow = document.createElement('tr');

    // These lines are now run once, outside the conditional
    table.appendChild(newRow);
    numRows++;

    // This handles the first cell being added to the grid
    if (numCols === 0) {
        numCols++;
    }

    // This loop adds the correct number of cells to the new row
    for (let i = 0; i < numCols; i++) {
        const newCol = document.createElement('td');
        newRow.appendChild(newCol);
    }
}

// Add a column
function addC() {

    numCols++;
    
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}



