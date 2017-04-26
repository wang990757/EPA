/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry
} from 'react-native';

import Login from './pages/login';
import Main from './pages/main';

import Add from './pages/demo/curd/add';

export default class epaApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userLogin: false
        };
    }

    componentWillMount() {
        this.clearLog();
    }

    _afterLogin(state){
        console.log('login状态更新');
        this.setState({
            userLogin:state
        });
    }

    render() {
        // if(this.state.userLogin){
        //     return(<Main />);
        // }else{
        //     return(<Login afterLogin={(state)=>{this._afterLogin(state)}} />);
        // }
        return(<Add errorMsg={(str)=>{this._callback(str)}} />);
    }

    _callback(str){
        console.log('callback:'+str);
    }

    /**
     * 为提升性能，正式包运行时替换console一些打印输出
     */
    clearLog() {
        console.log('开发环境：' + __DEV__);
        if (!__DEV__) {
            global.console = {
                info: () => {
                },
                log: () => {
                },
                warn: () => {
                },
                error: () => {
                },
            };
        }
    }

}
AppRegistry.registerComponent('epaApp', () => epaApp);
