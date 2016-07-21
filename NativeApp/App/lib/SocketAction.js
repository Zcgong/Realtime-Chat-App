// import React from 'react-native';
// window.navigator.userAgent = "react-native";
import io from 'socket.io-client';
const socket = io('http://192.183.3.122:3002',{jsonp: false});
import {initMessages, addMessage} from '../actions';

export default class SocketAction {
  constructor(dispatch) {
    const _ = this;
    _.dispatch = dispatch;
    _.init();
    return this;
  }
  init() {
    const { socket, dispatch, fireScoketEvent, emitSocketEvent } = this;

    this.fireScoketEvent('user connect',(data) => {
      dispatch(addMessage({
        type:'connect',
        user:data
      }));
    });

    this.fireScoketEvent('user disconnect',(data) => {
      dispatch(addMessage({
        type:'disconnect',
        user:data
      }));
    });

    this.fireScoketEvent('chat message',(data) => {
      dispatch(addMessage({
        type: 'message',
        user: data.user,
        msg: data.msg
      }));
    });

    return this;
  }

  fireScoketEvent(event, cb) {
    socket.on(event, (data) => {
      cb(data);
    });
    return this;
  }

  emitSocketEvent(event, params) {
    socket.emit(event, params);
    return this;
  }
}
