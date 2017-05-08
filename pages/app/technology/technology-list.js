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
    TouchableOpacity,
    Alert
}
    from
        'react-native';

var dimensions = require('Dimensions');
var {width, height} = dimensions.get('window');


/**
 * 假数据
 * @type {[*]}
 */
var area_data = [
    {id: 1, name: 'PTED',selected:true},
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
    {id: 1,dataName: '工程黄1', date: '2017-04-20 08:00:00',selected:true},
    {id: 2,dataName: '工程黄1', date: '2017-04-20 08:00:00',selected:false},
    {id: 3,dataName: '工程黄2', date: '2017-04-20 08:00:00',selected:false},
    {id: 4,dataName: '工程黄3', date: '2017-04-20 08:00:00',selected:false},
    {id: 5,dataName: '工程黄4', date: '2017-04-20 08:00:00',selected:false}
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
            dataList: ds.cloneWithRows(data_data),
            selectedAreaId : '1'
        };
    }


    render() {
        return (
            <View style={styles.container}>
                {/*左侧区域列表*/}
                <View style={BaseStyles.leftSide}>
                    <ViewButton text="提交数据"
                                onPress={()=>{Alert.alert('提交结果：',
                                    '数据提交成功!',
                                    [
                                        {text: 'OK', onPress: () => console.log('OK Pressed')}
                                    ],
                                    { cancelable: false });}}
                    />
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
                                    onPress={this._addTechnology.bind(this)}
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
                            <Text style={BaseStyles.titleText}>状态</Text>
                        </View>
                    </View>
                    {/*数据条列表表头*/}
                    <ListView style={styles.dataList}
                              dataSource={this.state.dataList}
                              renderRow={(rowData) => this._renderDataListRow(rowData)}
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

    _renderDataListRow(rowData) {
        return (
            <TouchableOpacity onPress={()=>{this._toDetailPage(rowData)}}>
            <View style={styles.dataRowView}>
                <View style={styles.dataRowViewItem}>
                    <Text style={BaseStyles.contentText}>{rowData.dataName}</Text>
                </View>
                <View style={styles.dataRowViewItem}>
                    <Text style={BaseStyles.contentText}>{rowData.date}</Text>
                </View>
                <View style={styles.dataRowViewItem}>
                    <Text style={BaseStyles.titleText}>状态</Text>
                </View>
            </View>
            </TouchableOpacity>
        )
    }

    _toDetailPage(rowData){
        console.log('点击数据ID:'+rowData.id);
        const {navigate} = this.props.navigation;
        navigate('TechnologyDetail',{selectedDataId:rowData.id,selectedAreaId:this.state.selectedAreaId,dataList:data_data});
    }

    /**
     * 转到添加页面，传参 selectedAreaId dataList
     * @param that
     * @private
     */
    _addTechnology() {
        console.log('添加工艺'+this.state.selectedAreaId);
        const {navigate} = this.props.navigation;
        navigate('TechnologyAdd',{selectedAreaId:'selectedAreaId',dataList:data_data});
    }

    /**
     * 选择左侧区域
     * @param areaObj
     * @private
     */
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
            dataList: ds.cloneWithRows(data),
            selectedAreaId : areaObj.id
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
