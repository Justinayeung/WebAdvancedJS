var socket;

function setup() {
    createCanvas(2000, 3000);
    background(0);
    socket = io.connect('http://localhost:3000');
    socket.on('mouse', (data) => {
        console.log("Got: " + data.x + " " + data.y);
        fill(0, 0, 255);
        noStroke();
        ellipse(data.x, data.y, 20, 20);
    });
}

// function newDrawing(data) {
//     noStroke();
//     fill(255, 0, 255);
//     ellipse(data.x, data.y, 36, 36);
// }

function mouseDragged() {
    //console.log('Sending:' + mouseX + ',' + mouseY);

    fill(255);
    noStroke();
    ellipse(mouseX, mouseY, 20, 20);

    var data = {
        x: mouseX,
        y: mouseY
    }
    socket.emit('mouse', data);
}

function draw() {

}