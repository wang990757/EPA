/**
 * Created by zhaobin on 2017/5/3.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Button,
    TouchableOpacity
}
    from
        'react-native';

var dimensions = require('Dimensions');
var {width, height} = dimensions.get('window');

var area_data = [
    {id: 1, name: 'PTED'},
    {id: 2, name: 'EDS'},
    {id: 3, name: 'UBC'},
    {id: 4, name: 'PRM'},
    {id: 5, name: 'MSD'},
    {id: 6, name: 'TCT'},
    {id: 7, name: 'FNS'},
    {id: 8, name: 'VQ'},
    {id: 9, name: 'RS'},
    {id: 10, name: 'TW'},
    {id: 11, name: 'ZH'}
];
var data_data = [
    {dataName: '工程黄1', date: '2017-04-20 08:00:00'},
    {dataName: '工程黄1', date: '2017-04-20 08:00:00'},
    {dataName: '工程黄2', date: '2017-04-20 08:00:00'},
    {dataName: '工程黄3', date: '2017-04-20 08:00:00'},
    {dataName: '工程黄4', date: '2017-04-20 08:00:00'}
];


import BaseStyles from '../../base-style';
import ViewButton from '../../commons/ViewButton';


export default class TechnologyList extends Component {
    static navigationOptions = {
        title: '工艺'
    }

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            areaList: ds.cloneWithRows(area_data),
            dataList: ds.cloneWithRows(data_data)
        };
    }


    render() {
        return (
            <View style={styles.container}>
                {/*左侧区域列表*/}
                <View style={BaseStyles.leftSide}>
                    <ListView style={styles.areaList}
                              dataSource={this.state.areaList}
                              renderRow={(rowData) => this._renderAreaListRow(rowData)}
                              enableEmptySections={true}
                              automaticallyAdjustContentInsets={false}
                    />
                </View>
                {/*右侧数据条列表*/}
                <View style={BaseStyles.rightSide}>
                    <View style={styles.dataHeader}>
                        <ViewButton text="添加工艺"
                                    onPress={() => this._addTechnology(this)}
                        />
                    </View>
                    {/*表头*/}
                    <View style={[styles.dataRowView, styles.greyBack]}>
                        <View style={styles.dataRowViewItem}>
                            <Text style={BaseStyles.titleText}>数据条名称</Text>
                        </View>
                        <View style={styles.dataRowViewItem}>
                            <Text style={BaseStyles.titleText}>创建时间</Text>
                        </View>
                        <View style={styles.dataRowViewItem}>
                            <Text style={BaseStyles.titleText}>操作</Text>
                        </View>
                    </View>
                    {/*数据条列表表头*/}
                    <ListView style={styles.dataList}
                              dataSource={this.state.dataList}
                              renderRow={(rowData) => this._renderDataListRow(rowData, this)}
                              enableEmptySections={true}
                              automaticallyAdjustContentInsets={false}
                    />
                </View>
            </View>
        );
    }

    _renderAreaListRow(rowData) {
        return (
            <View style={styles.renderAreaListRow}>
                <ViewButton text={rowData.name}
                            onPress={() => this._selectedTechnology(rowData)}
                            boxStyle={(rowData.selected == true) ? BaseStyles.areaButSeleted : BaseStyles.areaBut}
                            textStyle={BaseStyles.areaButText}
                />
            </View>
        );
    }

    _renderDataListRow(rowData, that) {
        return (
            <View style={styles.dataRowView}>
                <View style={styles.dataRowViewItem}>
                    <Text style={BaseStyles.contentText}>{rowData.dataName}</Text>
                </View>
                <View style={styles.dataRowViewItem}>
                    <Text style={BaseStyles.contentText}>{rowData.date}</Text>
                </View>
                <View style={styles.dataRowViewItem}>
                    <Text style={BaseStyles.contentText}>操作</Text>
                </View>
            </View>
        )
    }

    _addTechnology(that) {
        console.log('添加工艺');
        const {navigate} = that.props.navigation;
        navigate('TechnologyAdd');
        return;
    }

    _selectedTechnology(areaObj) {
        console.log('选择区域：' + areaObj.name);
        var data = data_data;
        for (var i in data) {
            data[i].dataName = areaObj.name + '工程黄' + i;
        }
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var areaData = area_data;
        for(var i in areaData){
            areaData[i].selected = false;
        }
        areaObj.selected = true;
        this.setState({
            areaList: ds.cloneWithRows(areaData),
            dataList: ds.cloneWithRows(data)
        });
    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    areaList: {
        width: 280,
    },
    renderAreaListRow: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 280,
    },
    dataRowView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: width - 280,
        borderBottomWidth: 1,

    },
    dataHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: width - 280,
        paddingRight: 20
    },
    greyBack: {
        backgroundColor: '#CCCCCC'
    },
    dataRowViewItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: (width - 280) / 3,
        height: 60,
        borderRightWidth: 1,
    },
    dataList: {
        width: width - 280
    }
});
