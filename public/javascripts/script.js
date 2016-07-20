(function() {
    var socket = io();
    $('form').submit(function() {
        socket.emit('chat message', {
            nick: window.nickName,
            msg: $('#m').val()
        });
        $('#m').val('');
        return false;
    });

    $('.cover button').click(function(e) {
        e.preventDefault();
        var roomId = $('#roomId').val();
        var nickStr = $('#nickName').val();
        if (nickStr != '') {
            window.nickName = nickStr;
            $('.cover').addClass('hide');
            socket.emit('user con', roomId,nickName);
        } else {
            alert('请输入昵称');
        }
    });

    socket.on('user con', function(msg) {
        $('#messages').append($('<li class="connect">').text(msg + " is connected"));
    });
    socket.on('user discon', function(msg) {
        $('#messages').append($('<li class="connect">').text(msg + " is disconnected"));
    });
    socket.on('chat message', function(data) {
        $('#messages').append($('<li>').append($('<span class="nick">').text(data.nick + ' : ')).append($('<span class="msg">').text(data.msg)));
    });
}())
