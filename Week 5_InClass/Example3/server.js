let express = require("express");
let socket = require("socket.io");

let app = express();

let server = app.listen(5000, () => {
    console.log("Server running on PORT: 5000");
});

app.use(express.static("public"));

let io = socket(server);

io.on("connection", (tempSocket) => {
    tempSocket.on("chat", (data) => {
        io.sockets.emit("chat", data);
    })

    tempSocket.on("typing", (data) => {
        socket.broadcast.emit("typing", data)
    })
})