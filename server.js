var express = require('express');
var app = express();
var open = require('open');
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');

var config = {
  port: 8000
};

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', function (socket) {
  socket.broadcast.on('user connect', (data) => {
    console.log(socket);
    socket.nick = data.nick;
    socket.nick ? io.emit('user connect', socket.nick) : '';
  });

  socket.on('chat message', (data) => {
    data.user = socket.nick;
    io.emit('chat message', data);
  });

  socket.on('disconnect', () => {
    socket.nick ? io.emit('user disconnect', socket.nick) : '';
  });
});

http.listen(config.port, function () {
  console.log(`listening on *:${config.port}`);
  open(`http://localhost:${config.port}`);
});
