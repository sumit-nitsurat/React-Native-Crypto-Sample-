import React, { Component } from 'react';
import { View } from 'react-native';

import Header from './Header';
import CryptoContainer from './CryptoContainer';

const Root = () => {
    return (
        <View style={{backgroundColor: '#31445a', flex : 1}}>
          <Header title={'CryptoContorl'} />
          <CryptoContainer />
        </View>
    );
}

export default Root;
