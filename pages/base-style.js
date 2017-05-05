/**
 * Created by zhaobin on 2017/5/5.
 */


import React, {Component} from 'react';
import {
    StyleSheet
} from 'react-native';

var dimensions = require('Dimensions')
var {width, height} = dimensions.get('window')

const BaseStyles = StyleSheet.create({
    areaBut: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 4,
        width: 220,
        height: 60,
        backgroundColor: '#FFFFFF',
        borderRadius: 6
    },
    areaButText: {
        color: '#000000',
        fontSize: 20
    },
    titleText: {
        fontSize: 20,
        color: '#000000',
    },
    contentText: {
        fontSize: 18,
        color: '#000000',
    },
    /*左右区的页面宽度*/
    leftSide: {
        width: 280,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 2,
        borderRightColor: "#CCCCCC"
    },
    rightSide: {
        width: width - 280,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#00FF99'
    }
});

module.exports = BaseStyles