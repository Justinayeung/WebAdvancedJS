//Express
var express = require('express');
var app = express();

var server = app.listen(process.env.PORT || 3000, listen);

function listen() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://' + host + ':' + port);
}

app.use(express.static('public'));

console.log("Socket server is running");


//Socket.io
var io = require('socket.io')(server);

io.sockets.on('connection', (socket) => {
    console.log("We have a new client: " + socket.id);
    socket.on('mouse', (data) => {
        console.log("Received: 'mouse' " + data.x + " " + data.y);
        socket.broadcast.emit('mouse', data);
    });
});

// io.sockets.on('connection', newConnection);

// function newConnection(socket) {
//     //console.log('new connection: ' + socket.id);
//     socket.on('mouse', mouseMessage);
// }

// function mouseMessage(data) {
//     console.log(data);
//     socket.broadcast.emit('mouse', data);
// }