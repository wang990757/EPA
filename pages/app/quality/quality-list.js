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
} from 'react-native';


var dimensions = require('Dimensions');
var {width, height} = dimensions.get('window');


/**
 * 假数据
 * @type {[*]}
 */
var area_data = [
    {id: 1, name: 'SV61', selected: true},
    {id: 2, name: 'SV71'},
    {id: 3, name: 'SV81'},
    {id: 4, name: 'SV91'},
    {id: 5, name: 'SV62'},
    {id: 6, name: 'SV72'},
    {id: 7, name: 'SV82'},
    {id: 8, name: 'SV92'},
    {id: 9, name: 'SV69'},
    {id: 10, name: 'SV10'},
    {id: 11, name: 'SV21'}
];
var data_data = [
    {
        id: 1,
        qx: '流挂',
        carModel: 'SV61',
        TPS: '00115379',
        bj: '前盖',
        qk: '1.2',
        savedDate: '2017-04-20 08:00:00',
        selected: true
    },
    {
        id: 2,
        qx: '流挂',
        carModel: 'SV61',
        TPS: '00115379',
        bj: '前盖',
        qk: '1.2',
        savedDate: '2017-04-20 08:00:00',
        selected: false
    },
    {
        id: 3,
        qx: '流挂',
        carModel: 'SV61',
        TPS: '00115379',
        bj: '前盖',
        qk: '1.2',
        savedDate: '2017-04-20 08:00:00',
        selected: false
    },
    {
        id: 4,
        qx: '流挂',
        carModel: 'SV61',
        TPS: '00115379',
        bj: '前盖',
        qk: '1.2',
        savedDate: '2017-04-20 08:00:00',
        selected: false
    },
    {
        id: 5,
        qx: '流挂',
        carModel: 'SV61',
        TPS: '00115379',
        bj: '前盖',
        qk: '1.2',
        savedDate: '2017-04-20 08:00:00',
        selected: false
    }
];


import BaseStyles from '../../base-style';
import ViewButton from '../../commons/ViewButton';

export default class QualityList extends Component {
    static navigationOptions = {
        title: '质量'
    }


    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            areaList: ds.cloneWithRows(area_data),
            dataList: ds.cloneWithRows(data_data),
            selectedAreaId: '1'
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
                        <ViewButton text="添加"
                                    onPress={this._addTechnology.bind(this)}
                        />
                    </View>
                    {/*表头*/}
                    <View style={[styles.dataRowView, styles.greyBack]}>
                        <View style={styles.dataRowViewItem}>
                            <Text style={BaseStyles.titleText}>缺陷</Text>
                        </View>
                        <View style={styles.dataRowViewItem}>
                            <Text style={BaseStyles.titleText}>车型</Text>
                        </View>
                        <View style={styles.dataRowViewItem}>
                            <Text style={BaseStyles.titleText}>TPS</Text>
                        </View>
                        <View style={styles.dataRowViewItem}>
                            <Text style={BaseStyles.titleText}>部件</Text>
                        </View>
                        <View style={styles.dataRowViewItem}>
                            <Text style={BaseStyles.titleText}>区块</Text>
                        </View>
                        <View style={styles.dataRowViewItem}>
                            <Text style={BaseStyles.titleText}>保存时间</Text>
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
                    <Text style={BaseStyles.titleText}>{rowData.qx}</Text>
                </View>
                <View style={styles.dataRowViewItem}>
                    <Text style={BaseStyles.titleText}>{rowData.carModel}</Text>
                </View>
                <View style={styles.dataRowViewItem}>
                    <Text style={BaseStyles.titleText}>{rowData.TPS}</Text>
                </View>
                <View style={styles.dataRowViewItem}>
                    <Text style={BaseStyles.titleText}>{rowData.bj}</Text>
                </View>
                <View style={styles.dataRowViewItem}>
                    <Text style={BaseStyles.titleText}>{rowData.qk}</Text>
                </View>
                <View style={styles.dataRowViewItem}>
                    <Text style={BaseStyles.titleText}>{rowData.savedDate}</Text>
                </View>
            </View>
        )
    }

    /**
     * 转到添加页面
     */
    _addTechnology() {
        console.log('添加工艺' + this.state.selectedAreaId);
        const {navigate} = this.props.navigation;
        navigate('QualityBlock');
    }

    /**
     * 选择左侧区域
     * @param areaObj
     * @private
     */
    _selectedTechnology(areaObj) {
        console.log('选择区域：' + areaObj.carModel);
        var data = data_data;
        for (var i in data) {
            data[i].carModel = areaObj.name;
        }
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var areaData = area_data;
        for (var i in areaData) {
            areaData[i].selected = false;
        }
        areaObj.selected = true;
        this.setState({
            areaList: ds.cloneWithRows(areaData),
            dataList: ds.cloneWithRows(data),
            selectedAreaId: areaObj.id
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
        width: (width - 280) / 6,
        height: 60,
        borderRightWidth: 1,
    },
    dataList: {
        width: width - 280
    }

});
