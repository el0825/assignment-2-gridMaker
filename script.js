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
    if(!colorSelected) return; // If no color we leave it as is
    const cells = document.querySelectorAll("#grid td"); // #grid td selects all the elements inside the element with Id grid
    cells.forEach(td => {
        if(!td.style.backgroundColor){
            td.style.backgroundColor = colorSelected;
        }
    });
}

// Fill all cells
function fillAll(){
    if(!colorSelected) return;
    const cells = document.querySelectorAll("#grid td");
    cells.forEach(td => {
        td.style.backgroundColor = colorSelected;
    });

}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}



