import React, { Component } from 'react';

export default class Message extends Component {
  render() {
    const { message } = this.props;
    switch (message.type) {
    case 'connect':
      return (
        <li className = "message-item message-connect" >
          {message.user} is connect
        </li>
      );
      break;
    case 'disconnect':
      return (
        <li className = "message-item message-connect" >
          {message.user} is disconnect
        </li>
      );
      break;
    case 'message':
      return (
        <li className = "message-item message-message" >
          <span className="message-item__user">{message.user}: </span>
          <span className="message-item__msg">{message.msg}</span>
        </li>
      );
      break;
    default:
      return (
        <li className = "message-item" >
        </li>
      )
    }
  }
}
