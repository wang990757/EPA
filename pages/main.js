/**
 * Created by zhaobin on 2017/4/18.
 */


import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    Image
} from 'react-native';

export default class Main extends Component {
    static navigationOptions = {
        title: '主界面',
        headerRight: (<Button onPress={() => {
        }} title="注销"/>),
    }

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                {/* 登录信息 */}
                <View style={styles.infoView}>
                    <Image style={styles.userHeader}
                           source={require('./images/user-header.png')}/>
                    <View style={styles.infoRight}>
                        <Text style={styles.infoText}>用户：高老师 欢迎使用涂装数字化管理系统</Text>
                        <Text style={styles.infoText}>登录时间：2017-05-01 12:00:00</Text>
                        <Text style={styles.infoText}>最近提交时间：2017-05-01 12:00:00</Text>
                    </View>
                </View>
                {/* 点检、工艺、质量 入口 */}
                <View style={styles.butArea}>
                    <TouchableOpacity onPress={() => this._selected('Check', this)}>
                        <View style={styles.but}><Text>点检</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this._selected('Technology', this)}>
                        <View style={styles.but}><Text>工艺</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this._selected('Quality', this)}>
                        <View style={styles.but}><Text>质量</Text></View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    _selected(action, that) {
        console.log('action: ' + action);
        const {navigate} = that.props.navigation;
        if ('Check' == action) {
            navigate('CheckList');
            return;
        }
        if ('Technology' == action) {
            navigate('TechnologyList');
            return;
        }
        if ('Quality' == action) {
            navigate('QualityList');
            return;
        }
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    infoView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 40,
        width: 800
    },
    userHeader: {
        width : 140,
        height: 140
    },
    infoRight: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingLeft : 20,
        height : 140
    },
    infoText: {
        fontSize: 22
    },
    butArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 800,
        marginTop: 50
    },
    but: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 200,
        backgroundColor: '#0099FF',
        borderRadius: 12
    }
});

