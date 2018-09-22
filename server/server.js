const path = require("path");
const publicpath =  path.join(__dirname,"../public");
const express = require("express");
const http =require("http");
const socketio = require("socket.io");

console.log(publicpath);
console.log(__dirname+"/../public");

var port =  process.env.PORT || 3000;

var app = express();
app.use(express.static(publicpath));

var server =  http.createServer(app);
var io =  socketio(server);

io.on("connection",(socket)=>{
    console.log("Connected to client");

    socket.on("disconnect",()=>{
        console.log("Client is disconnected");
    });

});

// app.listen(port,()=>{
//     console.log(`connection is up on port ${port}`);
// });

server.listen(port,()=>{
    console.log(`connection is up on port ${port}`);
});




