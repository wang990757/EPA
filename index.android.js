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

  componentWillMount(){
    this.clearLog();
  }
  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }

  /**
   * 为提升性能，正式包运行时替换console一些打印输出
   */
  clearLog(){
    console.log('开发环境：'+__DEV__);
    if (!__DEV__) {
      global.console = {
        info: () => {},
        log: () => {},
        warn: () => {},
        error: () => {},
      };
    }
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
