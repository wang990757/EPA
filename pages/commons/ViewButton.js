/**
 * Created by zhaobin on 2017/5/5.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';


/**
 * 封装的按钮组件：TouchableOpacity、View、Text
 * 参数：
 * text : 按钮显文本(必需)
 * onPress : 点击事件(必需)
 * textStyle : 文本样式(可选，拥有默认样式)
 * boxStyle : 底框样式(可选，拥有默认样式)
 */

export default class ViewButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <TouchableOpacity onPress={(that) => this._onPress(that)}>
                <View style={[styles.but,this.props.boxStyle]}>
                    <Text style={[styles.text,this.props.textStyle]}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    _onPress(that){
        this.props.onPress(that);
    }


}
const styles = StyleSheet.create({
    but: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 4,
        width: 220,
        height: 50,
        backgroundColor: '#3399FF',
        borderRadius: 6
    },
    text:{
        color: '#FFFFFF',
        fontSize: 18
    }

});
