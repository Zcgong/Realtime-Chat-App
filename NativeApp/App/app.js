import { Provider } from 'react-redux';
import React from 'react';
import configureStore from './configureStore';
import RealtimeChatNativeApp from './containers/RealtimeChatNativeApp';

// create a store object
let store = configureStore();

export default NativeApp = React.createClass({
  render() {
    return (
      <Provider store={ store } >
        <RealtimeChatNativeApp/>
      </Provider>
    );
  }
});
