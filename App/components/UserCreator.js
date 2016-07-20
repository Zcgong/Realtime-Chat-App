import React, { Component } from 'react';
import { initUser } from '../actions';

export default class UserCreator extends Component {
  initUser(e) {
    e.preventDefault();
    const { emitSocketEvent, dispatch } = this.props;
    const nick = this.refs.nick.value;
    dispatch(initUser(nick));
    emitSocketEvent('user connect', {nick:nick,type:'connect'});
  }
  render() {
    return (
      <div className="user-creator">
        <input type="text" ref="nick"/>
        <button onClick={(e) => this.initUser(e)}>Confirm</button>
      </div>
    );
  }
}
