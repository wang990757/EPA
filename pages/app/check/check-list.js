/**
 * Created by zhaobin on 2017/5/3.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class CheckList extends Component {
    static navigationOptions = {
        title: '点检'
    }

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <View style={styles.container}>
                <Text>点检页面</Text>
            </View>
        );
    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});
