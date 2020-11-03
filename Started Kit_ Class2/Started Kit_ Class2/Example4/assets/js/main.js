console.log("JS is connected!");

mySize = () => {
    document.getElementById("widthHeight").innerHTML = ("W: " + window.innerWidth + "  H: " + window.innerHeight);
}

mySize();
window.onresize = mySize;