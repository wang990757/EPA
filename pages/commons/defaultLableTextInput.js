/**
 * Created by wangkai on 2017/5/7.
 */
/**
 * Created by zhaobin on 2017/5/5.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

export default class DefaultLabelTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.left}>
                    <Text style={styles.label}>{this.props.label+":"}</Text>
                </View>
                <View style={styles.right}>
                    <TextInput style={styles.input}  underlineColorAndroid="transparent"/>
                </View>
            </View>
        );
    }


}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height : 60,
        marginTop:10
    },
    left:{
        flex:2,
        flexDirection: 'row',
        height : 60,
        justifyContent:'flex-end'
    },
    right:{
        flex:6,
        height:60,
        flexDirection: 'row',

        margin:6
    },
    label:{
        fontSize : 20,
        color : '#000000',
        alignSelf:'center'
    },
    input:{
        height : 60,
        flex:1,
        backgroundColor:'#fff',
        alignSelf:'center',
        fontSize:25,
        borderRadius:5,
        borderWidth:2,
    }

});
