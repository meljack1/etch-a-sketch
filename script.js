const container = document.querySelector('#container');
const clearButton = document.querySelector('#clearButton');
const sizeButton = document.querySelector('#sizeButton');


function makeDivs(number) {
    for (let i = 0; i < (number*number); i++) {
        let gridDiv = document.createElement("div");
        gridDiv.classList.add("gridDiv");
        container.appendChild(gridDiv);  
        // outside function to add hover effect not working? 
        gridDiv.addEventListener('mouseover', () => {
            gridDiv.classList.add("gridDivHover");
        })
        container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    }
}; 

makeDivs(10);


sizeButton.addEventListener('click', () => {
    let number = sizeButton.value;
    removeDivs();
    makeDivs(number);
});
    

clearButton.addEventListener('click', () => {
    let gridDivAll = document.querySelectorAll('.gridDiv');
    let gridDivArray = Array.from(gridDivAll);
    gridDivArray.forEach(element => element.classList.remove("gridDivHover"));
});

function removeDivs() {
    let gridDivAll = document.querySelectorAll('.gridDiv');
    let gridDivArray = Array.from(gridDivAll);
    for (let a = 0; a < gridDivArray.length; a++){
        gridDivArray[a].parentNode.removeChild(gridDivArray[a]);
    } 
}

// broken: function to add hover effect from outside main function
/* gridDivArray.forEach(element => element.addEventListener('mouseover', () => {
    element.classList.add("gridDivHover");
})); */
