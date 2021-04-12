const container = document.querySelector('#container');
const button = document.querySelector('#button');



 function makeDivs() {
    for (let i = 0; i < 100; i++) {
        let gridDiv = document.createElement("div");
        gridDiv.classList.add("gridDiv");
        container.appendChild(gridDiv);  
    }
}; 

/* function makeDivs() {
    let number;
    button.addEventListener('click', () => {
        number = prompt("Type a number between 10 and 50")
        for (i = 0; i < (number*number); i++) {
            let gridDiv = document.createElement("div");
            gridDiv.classList.add("gridDiv");
            container.appendChild(gridDiv);  
        }
    })
    
}; */

makeDivs();

let gridDivAll = document.querySelectorAll('.gridDiv');
let gridDivArray = Array.from(gridDivAll);

gridDivArray.forEach(element => element.addEventListener('mouseover', () => {
    element.classList.add("gridDivHover");
}));

button.addEventListener('click', () => {
    gridDivArray.forEach(element => element.classList.remove("gridDivHover"));
});



