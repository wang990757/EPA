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

var area_data = ['PTED', 'EDS',
    'UBC', 'PRM', 'MSD', 'TCT', 'FNS', 'VQ', 'VQ', 'VQ', 'VQ'];
var data_data = [
    {dataName: '工程黄1', date: '2017-04-20 08:00:00'},
    {dataName: '工程黄1', date: '2017-04-20 08:00:00'},
    {dataName: '工程黄2', date: '2017-04-20 08:00:00'},
    {dataName: '工程黄3', date: '2017-04-20 08:00:00'},
    {dataName: '工程黄4', date: '2017-04-20 08:00:00'}
];

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
                <View style={styles.leftSide}>
                    <ListView style={styles.areaList}
                              dataSource={this.state.areaList}
                              renderRow={(rowData) => this._renderAreaListRow(rowData, this)}
                              enableEmptySections={true}
                              automaticallyAdjustContentInsets={false}
                    />
                </View>
                {/*右侧数据条列表*/}
                <View style={styles.rightSide}>
                    <View style={styles.dataHeader}>
                        <ViewButton text="添加工艺"
                                    onPress={()=>this._addTechnology(this)}
                        />
                    </View>
                    {/*表头*/}
                    <View style={[styles.dataRowView, styles.greyBack]}>
                        <View style={styles.dataRowViewItem}>
                            <Text style={styles.titleText}>数据条名称</Text>
                        </View>
                        <View style={styles.dataRowViewItem}>
                            <Text style={styles.titleText}>创建时间</Text>
                        </View>
                        <View style={styles.dataRowViewItem}>
                            <Text style={styles.titleText}>操作</Text>
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

    _renderAreaListRow(rowData, that) {
        return (
            <View style={styles.renderAreaListRow}>
                <ViewButton text={rowData}
                            onPress={() => this._selectedTechnology(rowData, this)}
                            boxStyle={styles.areaBut}
                            textStyle={styles.areaText}
                />
            </View>
        );
    }

    _renderDataListRow(rowData,that){
        return (
            <View style={styles.dataRowView}>
                <View style={styles.dataRowViewItem}>
                    <Text style={styles.titleText}>{rowData.dataName}</Text>
                </View>
                <View style={styles.dataRowViewItem}>
                    <Text style={styles.titleText}>{rowData.date}</Text>
                </View>
                <View style={styles.dataRowViewItem}>
                    <Text style={styles.titleText}>操作</Text>
                </View>
            </View>
        )
    }

    _addTechnology(that) {
        console.log('添加工艺');
    }

    _selectedTechnology(areaId, that) {
        console.log('选择区域：' + areaId);
        var data = data_data;
        for (var i in data){
            data[i].dataName = areaId + '工程黄'+i;
        }
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
            dataList: ds.cloneWithRows(data),
            selectedArea : areaId
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
    },
    areaList: {
        width: 280,
        // backgroundColor: '#ccb5c5',
    },
    renderAreaListRow: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 280,
    },
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
    areaText: {
        color: '#000000',
        fontSize: 20
    },
    dataRowView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: width - 280,
        borderBottomWidth:1,

    },
    dataHeader:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: width - 280,
        paddingRight:20
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
        borderRightWidth:1,
    },
    titleText: {
        fontSize: 20,
        color: '#000000',
    },
    contentText: {
        fontSize: 18,
        color: '#000000',
    },
    dataList:{
        width: width - 280
    }
});
