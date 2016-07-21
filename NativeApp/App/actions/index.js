import { INIT_MESSAGES, ADD_MESSAGE, INIT_USER } from './actionType';
import io from 'socket.io-client';
const socket = io('http://localhost:8000');

/////////////////
// Message actions //
/////////////////
/**
 * Initial Message
 */
export function initMessages() {
  return {
    type: INIT_MESSAGES
  };
}

/**
 * Add Message
 */
export function addMessage(data) {
  return {
    type: ADD_MESSAGE,
    data: data
  };
}

/////////////////
// User actions //
/////////////////
/**
 * Initial User
 */
export function initUser(nick) {
  return {
    type: INIT_USER,
    nick: nick,
    id: new Date().getTime()
  };
}
