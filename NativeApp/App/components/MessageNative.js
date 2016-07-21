import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class Message extends Component {
  render() {
    const { message } = this.props;
    switch (message.type) {
    case 'connect':
      return (
        <View style={styles.container}>
          <Text style={styles.content}>
            {message.user} is connect
          </Text>
        </View>
      );
      break;
    case 'disconnect':
      return (
        <View style={styles.container}>
          <Text style={styles.content}>
            {message.user} is disconnect
          </Text>
        </View>
      );
      break;
    case 'message':
      return (
        <View style={styles.container}>
          <View style={style.left}>
            <Text style={styles.title}>{message.user.slice(0,1)}</Text>
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{message.user}</Text>
            <Text style={styles.year}>{message.msg}</Text>
          </View>
        </View>
      );
      break;
    default:
      return (
        <View style={styles.container}></View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    fontSize: 20,
    textAlign: 'center'
  },
  left: {
    width: 40,
    height: 40,
    textAlign: 'center',
    lineHeight:40
  }
});
