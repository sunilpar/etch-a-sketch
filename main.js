let container = document.querySelector(".container");
let board = document.querySelector(".board");
let color="black";
let size;

function printBoard(size){
    let amt = size*size;
    let by = document.querySelector(".sthbysth");
    by.innerHTML=`${size}X${size}`;
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;
    for( let i=0; i<=amt;i++){
        let diva = document.createElement("div");
        diva.addEventListener('mouseover', changeColor);
        diva.style.backgroundColor="white";
        board.insertAdjacentElement("beforeend",diva);
        
    }
}

 printBoard(16);


function getSize(input){
    if(input>2 && input < 100){
        printBoard(input)
        return input;
    }else{
        console.log("too many ot to little square");
    }
}

function resetBoard(){
    let square= board.querySelectorAll("div");
    square.forEach((div) => div.style.backgroundColor="white");
}

function changeColor(){
    if(color === "random"){
        this.style.backgroundColor =`hsl(${Math.random()*360}, 100%, 50%)`;
    }else{
        this.style.backgroundColor = color;
    }   
}

function colorUpdate(x){
    color =x
}







