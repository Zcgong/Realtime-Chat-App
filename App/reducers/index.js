import { INIT_MESSAGES, ADD_MESSAGE, INIT_USER } from '../actions/actionType';
import {
  combineReducers
} from 'redux';

// Initial data
const _initial_userInfo = {
  nick: ''
};

function messages(state = [], action) {
  // create a new array
  let _new_messages = [];
  switch (action.type) {
    // Init messages
    case INIT_MESSAGES:
      return _new_messages;
    // Add a message
    case ADD_MESSAGE:
      _new_messages = [
        ...state, action.data
      ];

      return _new_messages;
  }
  return state;
}

function userInfo(state = _initial_userInfo, action) {
  switch (action.type) {
    // Init a user
    case INIT_USER:
      return Object.assign({}, state, {
        nick: action.nick
      });
  }
  return state;
}

const RealtimeChatApp = combineReducers({
  messages,
  userInfo
});

export default RealtimeChatApp;
