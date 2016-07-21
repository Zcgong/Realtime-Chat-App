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
          <div className="message-item__avatar">{message.user.slice(0,1)}</div>
          <div className="message-item__content">
              <p className="message-item__user">{message.user}</p>
              <p className="message-item__msg">{message.msg}</p>
          </div>
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
