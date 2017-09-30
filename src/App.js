import React, { Component } from 'react';
import IndexPageContainer from './redux/containers/IndexPageContainer.js';
import { Provider } from 'react-redux';
import setupStore from './redux/setupStore';

const store = setupStore();

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <IndexPageContainer />
        </Provider>
      </div>
    );
  }
}
