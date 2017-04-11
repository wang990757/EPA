/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
// import ImageTest from './pages/demo/ImageTest';
// import UserTest from './pages/demo/UserTest';

import Login from './pages/login';

export default class epaApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }

 _press(){
   console.log('pressed')
 }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

});

AppRegistry.registerComponent('epaApp', () => epaApp);
