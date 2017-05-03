/**
 * Created by zhaobin on 2017/4/18.
 */


import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity
} from 'react-native';

export default class Main extends Component {
    static navigationOptions = {
        title: '主界面',
        headerRight: (<Button onPress={()=>{}} title="注销" />),
    }

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.butArea}>
                    <TouchableOpacity onPress={()=>this._selected('Check',this)}>
                    <View style={styles.but}><Text>点检</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this._selected('Technology',this)}>
                    <View style={styles.but}><Text>工艺</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this._selected('Quality',this)}>
                    <View style={styles.but}><Text>质量</Text></View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    _selected(action,that){
        console.log('action: '+action);
        const { navigate } = that.props.navigation;
        if('Check'==action){
            navigate('CheckList');
            return;
        }
        if('Technology'==action){
            navigate('TechnologyList');
            return;
        }
        if('Quality'==action){
            navigate('QualityList');
            return;
        }
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    butArea:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width:800
    },
    but:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 100,
        backgroundColor: '#0099FF',
        borderRadius: 12
    }
});

