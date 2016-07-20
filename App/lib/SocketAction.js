import io from 'socket.io-client';
import {initMessages, addMessage} from '../actions';
const socket = io('http://localhost:8000');

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
