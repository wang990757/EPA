/**
 * Created by zhaobin on 2017/5/5.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';


import BaseStyles from '../../base-style';

export default class TechnologyAdd extends Component {
    static navigationOptions = {
        title: '添加工艺'
    }

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <View style={styles.container}>
                {/*左侧区域列表*/}
                <View style={BaseStyles.leftSide}>
                    <Text>左侧</Text>
                </View>
                {/*右侧数据条列表*/}
                <View style={BaseStyles.rightSide}>
                    <Text>右侧</Text>
                </View>
            </View>
        );
    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start'
    }

});
