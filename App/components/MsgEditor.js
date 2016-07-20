import React, { Component } from 'react';

export default class MsgEditor extends Component {
  createMsg(e) {
    e.preventDefault();
    const { emitSocketEvent } = this.props;
    const msg = this.refs.msg.value;
    emitSocketEvent('chat message', {msg:msg,type:'message'});
  }
  render() {
    return (
      <div className="msg-editor">
        <input type="text" ref="msg"/>
        <button onClick={(e) => this.createMsg(e)}>Confirm</button>
      </div>
    );
  }
}
