import './reactroConfig';

import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import Store from './src/Store';
import HomeScreenRouter from './src/Router';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <HomeScreenRouter/>
          {/* <Header />
          <CryptoContainer /> */}
      </Provider>
    );
  }
}
