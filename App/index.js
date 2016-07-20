import { Provider } from 'react-redux';
import React from 'react';
import configureStore from './configureStore';
import RealtimeChatApp from './containers/RealtimeChatApp';
import { render } from 'react-dom';

// create a store object
let store = configureStore();

const App = React.createClass({
  render() {
    return (
      <Provider store={ store } >
        <RealtimeChatApp/>
      </Provider>
    );
  }
});

render(
  <App />,
  document.getElementById('root')
);
