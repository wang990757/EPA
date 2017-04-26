/**
 * Created by zhaobin on 2017/4/18.
 */


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

export default class Add extends Component {

    constructor(props) {
        super(props);
        this.state = {
            msg : 'test'
        };
    }

    componentWillMount() {
        console.log('add componentWillMount');
    }


    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._click.bind(this)}>
                    <Text>click</Text>
                </TouchableOpacity>
                <Text>{this.state.msg}  --  </Text>
            </View>
        );
    }

    _click(){
        console.log('clicked');
        var that = this;
        that.setState({
            msg: ' Logined.'
        });
        that.props.errorMsg('0000');
    }



}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#666633'
    }

});



