import React, {Component} from 'react';
import MessageNative from '../components/MessageNative';
// import MsgEditorNative from '../components/MsgEditorNative';
// import UserCreatorNative from '../components/UserCreatorNative';
import {connect} from 'react-redux';
import SocketAction from '../lib/SocketAction';
import { ListView, StyleSheet, View} from 'react-native';

export default class RealtimeChatAppNative extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    this.initSocketAction = new SocketAction(dispatch);
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
  }
  render() {
    const {messages, userInfo, dispatch} = this.props;
    this.dataSource.cloneWithRows(messages);
    return (
      <ListView
          dataSource={this.dataSource}
          renderRow={this.renderMessage}
          style={styles.listView}
      />
    );
  }
  renderMessage(message) {
    return (
      <MessageNative message={message}/>
    )
  }
}

const styles = StyleSheet.create({
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

export default connect(state => {
  return {
      messages: state.messages,
      userInfo: state.userInfo
  }
})(RealtimeChatAppNative);
