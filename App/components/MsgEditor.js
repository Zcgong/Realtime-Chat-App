import React, { Component } from 'react';

export default class MsgEditor extends Component {
  createMsg(e) {
    e.preventDefault();
    const { emitSocketEvent } = this.props;
    const ele = this.refs.msg;
    const msg = ele.value;
    ele.value = '';
    msg != '' ? emitSocketEvent('chat message', {msg:msg,type:'message'}) : '';
  }

  render() {
    return (
      <div className="msg-editor">
        <input type="text" ref="msg"/>
        <button onClick={(e) => this.createMsg(e)}>发送</button>
      </div>
    );
  }
}
