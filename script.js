// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

const table = document.getElementById('grid');

// Add a row
function addR() {
    const newRow = document.createElement('tr');

    // These lines are now run once, outside the conditional


    // This handles the first cell being added to the grid
    if (numCols === 0) {
        numCols = 1;
    }

    // This loop adds the correct number of cells to the new row
    for (let i = 0; i < numCols; i++) {
        const newCol = document.createElement('td');
        newRow.appendChild(newCol);
    }

    table.appendChild(newRow);
    numRows++;

    console.log("numRows: " + numRows);
}

// Add a column
function addC() {
    const newRow = document.createElement('tr');

    if (numRows === 0) {
        addR();
        return; //exit function since addR has started the grid
    }

    // If rows exist, loop through them and add one cell to each
    for (let i = 0; i < numRows; i++){
        const newCol = document.createElement('td');
        const currentRow = table.children[i];
        currentRow.appendChild(newCol);
    }

    numCols++; // Increment column count

    console.log("numCols: " + numCols);
}

// Remove a row
function removeR() {
    if (numRows == 0){
        return;
    }
    const lastRow = table.lastElementChild;
    if (lastRow){
        lastRow.remove(); 
        numRows--;
    }

    console.log("numRows: " + numRows);
    if (numRows == 0){ //does not run function again if there is no more grid
        numCols = 0;
        return;
    }
}

// Remove a column
function removeC() {
    if (numCols == 0){
        return;
    }
    for (let i = 0; i < numRows; i++) {
        const currentRow = table.children[i];
        if (currentRow) {
            currentRow.lastElementChild.remove();
        }
    }
    numCols--;     
    
    if (numCols === 0) {
        // ...you must clear the actual HTML table...
        table.innerHTML = "";
        // ...and then reset the row count.
        numRows = 0;
    }
    console.log("numCols: " + numCols);
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);

    const cells = document.querySelectorAll("#grid td");
    cells.forEach(td => {
        td.onclick = function() {
            td.style.backgroundColor = colorSelected;
        }
    });
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
    const cells = document.querySelectorAll("#grid td");

    cells.forEach(td => {
        td.style.backgroundColor = "";
    });
}
