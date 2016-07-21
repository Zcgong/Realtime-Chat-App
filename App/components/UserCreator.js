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
        <div className="user-creator__container">
            <h2>弹幕啦啦啦~</h2>
            <input type="text" ref="nick" placeholder="输入用户名"/>
            <br/>
            <button onClick={(e) => this.initUser(e)}>确认</button>
        </div>
      </div>
    );
  }
}
