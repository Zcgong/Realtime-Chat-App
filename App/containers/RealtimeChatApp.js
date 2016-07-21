import React, {Component} from 'react';
import Message from '../components/Message';
import MsgEditor from '../components/MsgEditor';
import UserCreator from '../components/UserCreator';
import {connect} from 'react-redux';
import SocketAction from '../lib/SocketAction';

export default class RealtimeChatApp extends Component {
  componentWillMount() {
    const {dispatch} = this.props;
    this.initSocketAction = new SocketAction(dispatch);
  }

  render() {
    const {messages, userInfo, dispatch} = this.props;
    let messagesArr = [];
    messages.map((message, index) => {
      messagesArr.push(<Message message={message} key={index}/>);
    });
    return (
        <div id="RealtimeChatApp">
            <h2 className="title">弹幕啦啦啦</h2>
            <div className="message-list">
                <ul>
                  {messagesArr}
                </ul>
            </div>
            {!userInfo.nick ? <UserCreator emitSocketEvent={this.initSocketAction.emitSocketEvent} dispatch={dispatch}/> : ''}
            <MsgEditor emitSocketEvent={this.initSocketAction.emitSocketEvent}/>
        </div>
    );
  }
}

export default connect(state => {
  return {
      messages: state.messages,
      userInfo: state.userInfo
  }
})(RealtimeChatApp);
