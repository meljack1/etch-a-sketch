const container = document.querySelector('#container');
const clearButton = document.querySelector('#clearButton');
const sizeButton = document.querySelector('#sizeButton');

let color = "black";
const blackButton = document.querySelector('#blackButton');
const randomButton = document.querySelector('#randomButton');
const greyButton = document.querySelector('#greyButton');
const pickButton = document.querySelector('#pickButton');
const pickValue = document.querySelector('#pickValue');

blackButton.addEventListener('click', () => {
    color = "black";
});

pickButton.addEventListener('click', () => {
    color = `${pickValue.value}`;
});

randomButton.addEventListener('click', () => {
    color = "random";
});

greyButton.addEventListener('click', () => {
    color = "grey";
});


function makeDivs(number) {
    for (let i = 0; i < (number*number); i++) {
        let gridDiv = document.createElement("div");
        gridDiv.classList.add("gridDiv");
        container.appendChild(gridDiv);  
        container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    }
}; 

sizeButton.addEventListener('click', () => {
    let number = sizeButton.value;
    removeDivs();
    makeDivs(number);
    changeHoverColor()
});
    

clearButton.addEventListener('click', () => {
    let gridDivAll = document.querySelectorAll('.gridDiv');
    let gridDivArray = Array.from(gridDivAll);
    gridDivArray.forEach(element => element.style.backgroundColor = "rgb(255, 255, 255, 0.0)");
});

function removeDivs() {
    let gridDivAll = document.querySelectorAll('.gridDiv');
    let gridDivArray = Array.from(gridDivAll);
    for (let a = 0; a < gridDivArray.length; a++){
        gridDivArray[a].parentNode.removeChild(gridDivArray[a]);
    } 
};

function changeHoverColor() {
    let gridDivAll = document.querySelectorAll('.gridDiv');
    let gridDivArray = Array.from(gridDivAll);

    gridDivArray.forEach(element => element.addEventListener('mouseover', () => {
        if (color == "random") {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        } else if (color == "grey") {
            let o = Number(element.style.backgroundColor.slice(-3, -1));
            let r = 0;
            let g = 0;
            let b = 0;
            if (o < 0.9) {
                o += 0.1;
            }
            element.style.backgroundColor = `rgb(${r}, ${g}, ${b}, ${o})`; 
       } else {
            element.style.backgroundColor = `${color}`;
        }
    })); 
};

makeDivs(10);
changeHoverColor();