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

import CheckList from './pages/app/check/check-list';
import QualityList from './pages/app/quality/quality-list';
import TechnologyList from './pages/app/technology/technology-list';


import { StackNavigator } from 'react-navigation';
import { NavigationActions } from 'react-navigation';

class epaApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userLogin: false
        };
    }

    static navigationOptions = {
        title : '涂装数字化管理系统'
    }

    componentWillMount() {
        this.clearLog();
        const resetMainAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Main'})
            ]
        })
        const resetLoginAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Login'})
            ]
        })
        if(this.state.userLogin){
            this.props.navigation.dispatch(resetMainAction);
        }else{
            this.props.navigation.dispatch(resetLoginAction);
        }
    }

    _afterLogin(state){
        console.log('login状态更新');
        this.setState({
            userLogin:state
        });
    }

    render() {
        return null;
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


//注册APP页面
const EpaApp = StackNavigator({
    Index: { screen: epaApp },
    Login: { screen: Login },
    Main: { screen: Main },
    CheckList: {screen: CheckList},
    QualityList: {screen: QualityList},
    TechnologyList: {screen: TechnologyList},
})

AppRegistry.registerComponent('epaApp', () => EpaApp);
