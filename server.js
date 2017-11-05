var express = require('express');
var app = express();
var http  = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
  console.log("We have a connection");
  socket.on("new-message", function(msg){
    console.log(msg);
    io.emit("receive-message", msg);
  })
  socket.on("test", function(){
    console.log("Mounted");
  })
});

http.listen('3030', function(){
  console.log("We are connected");
});
