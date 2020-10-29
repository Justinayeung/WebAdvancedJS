// //You can put any information here and it will load in the browser
// // CTRL + / to uncomment and comment
// console.log("This is my JS File" + " " + 3857585);

// //Declare a variable and then naming it, you can assign a value to it
// var data1 = "This is the new syntax";

// //Instead of var you see will also see let
// //Let is a new syntax
// let data2 = "This is the old syntax"


// //Functions stores data, a series of steps

// function OldFunction() {
//     console.log(data2);
// }

// //This is an arrow function, the new syntax
// myFunction = ()=> {
//     let newVar = "Hello"; //Local variable
//     console.log(newVar);
//     console.log(data1);
// }

// //You have to call the function in order for it to work
// myFunction();
// OldFunction();



//Global variables
let columns = document.getElementsByClassName("column");
console.log(columns.length);

let imageNum = 0;
let imageSwitch = 0;

//Array
let images = [
    "img01.jpg",
    "img02.jpg",
    "img03.jpg",
    "img04.jpg",
    "img05.jpg",
    "img06.jpg",
    "img07.jpg",
    "img08.jpg",
    "img09.jpg",
    "img10.jpg",
    "img11.jpg",
    "img12.jpg",
    "img13.jpg",
    "img14.jpg",
    "img15.jpg"
]


for (let i = 0; i < images.length; i++) {
    let newImg = document.createElement("img"); //Create an image for everything in the array
    newImg.className = "images";
    newImg.id = i;
    newImg.src = "./assets/images/" + images[i]; //src = source

    columns[imageNum].appendChild(newImg);
    imageNum++;

    //Checks if columns get to 3 then it will reset to 0
    if (imageNum > columns.length - 1) {
        imageNum = 0;
    }

    //Has events like keypress, clicking, hover etc.
    newImg.addEventListener("click", (tempValue) => {
        popUp(tempValue.target.id);
        imageSwitch = tempValue.target.id; //Keeps track of which # image you click on so that it displays that same images
    })
}

//imgCount = a temporary attribute
popUp = (imgCount) => {
    imageSwitch = imgCount
    let popup = document.getElementById("popup");
    let img = document.getElementById("pic");
    popup.style.zIndex = 1;
    popup.style.display = "block";
    img.src = "./assets/images/" + images[imgCount];
}