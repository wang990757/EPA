/**
 * Created by zhaobin on 2017/5/5.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

export default class LabelTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.left}>
                    <Text style={styles.label}>{this.props.label}</Text>
                </View>
                <View style={styles.right}>
                    <TextInput style={styles.input}
                               underlineColorAndroid="transparent"/>
                </View>
            </View>
        );
    }


}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 800,
        height : 60,
        borderWidth:2,
        borderColor : '#666666',
        borderRadius : 5,
        backgroundColor : '#CCCCCC',
        marginTop : 10,
    },
    left:{
        width:260,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    right:{
        width:538,
        backgroundColor : '#FFFFFF',
        height:60,
        borderColor : '#666666',
        borderWidth:2,
        borderTopRightRadius:5,
        borderBottomRightRadius:5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
    label:{
        fontSize : 30,
        color : '#000000'
    },
    input:{
        width : 430,
        height : 60,
        padding: 0,
        fontSize : 30,
        paddingLeft : 4,
    }

});
