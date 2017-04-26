/**
 * ES6
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            msg: '',
            username: '',
            password: ''
        };
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>涂装数字化管理系统</Text>
                <View style={styles.row}>
                    <Text style={styles.lable}>登录名：</Text>
                    <TextInput style={styles.input}
                               onChangeText={this.usernameInput.bind(this)}
                               editable={true}
                               maxLength={40}
                               placeholder={'请输入用户名'}
                    />
                </View>
                <View style={styles.row}>
                    <Text style={styles.lable}>密 码：</Text>
                    <TextInput style={styles.input}
                               onChangeText={this.passwordInput.bind(this)}
                               editable={true}
                               maxLength={40}
                               placeholder={'请输入密码'}
                    />
                </View>
                <TouchableOpacity onPress={this._submitLogin.bind(this)}>
                    <View style={styles.submit}>
                        <Text style={styles.submitText}>登录</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.info}>{this.state.msg}</Text>

            </View>
        );
    }


    usernameInput(text) {
        console.log(text);
        this.setState({
            username: text
        });
    }

    passwordInput(text) {
        console.log(text);
        this.setState({
            password: text
        });
    }

    /**
     * Login逻辑,请求后台，并存储token
     */
    _submitLogin() {
        console.log('__DEV__');
        var that = this;
        that.setState({
            msg: this.state.username + ' Logined.'
        });
        this.props.afterLogin(true);
    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#666633',
    },
    title: {
        fontSize: 28,
        paddingBottom: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: 300,
        // backgroundColor: '#666633',
    },
    lable: {
        // backgroundColor: '#CCCCCC',
        // width:120,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        fontSize: 20
    },
    input: {
        // backgroundColor: '#009933',
        width: 200,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontSize: 20
    },
    submit: {
        marginTop: 12,
        width: 280,
        height: 36,
        backgroundColor: '#3399CC',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    },
    submitText: {
        fontSize: 20,
        color: '#FFFFFF'
    },
    info: {
        fontSize: 14,
        color: '#FF0000',
        marginTop: 12
    }

});

module.exports = Login
