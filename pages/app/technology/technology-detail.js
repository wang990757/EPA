/**
 * Created by zhaobin on 2017/5/6.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    ScrollView
} from 'react-native';


import BaseStyles from '../../base-style';
import ViewButton from '../../commons/ViewButton';
import LabelTextInput from '../../commons/LabelTextInput'

var data_data = [
    {dataName: '工程黄1', date: '2017-04-20 08:00:00',selected:true},
    {dataName: '工程黄1', date: '2017-04-20 08:00:00'},
    {dataName: '工程黄2', date: '2017-04-20 08:00:00'},
    {dataName: '工程黄3', date: '2017-04-20 08:00:00'},
    {dataName: '工程黄4', date: '2017-04-20 08:00:00'}
];

export default class TechnologyDetail extends Component {
    static navigationOptions = {
        title: '工艺明细'
    }

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            selectedAreaId: this.props.navigation.state.params.selectedAreaId,
            dataList: ds.cloneWithRows(data_data)
        };
    }

    componentWillMount(){

    }
    componentDidMount(){
        var ddList = this.props.navigation.state.params.dataList;
        for(var i in ddList){
            console.log(ddList[i].dataName);
        }
    }



    render() {
        return (
            <View style={styles.container}>
                {/*左侧区域列表*/}
                <View style={BaseStyles.leftSide}>
                    <Image style={styles.areaImage}
                           source={require('../../images/81右前门1.bmp')}/>
                    <ListView
                        dataSource={this.state.dataList}
                        renderRow={(data) => this._renderDataListRow(data)}
                        enableEmptySections={true}
                        automaticallyAdjustContentInsets={false}
                    />
                </View>
                {/*右侧数据条列表*/}
                <View style={[BaseStyles.rightSide,{paddingLeft:20}]}>
                    <ScrollView style={{width:'100%'}}>
                    <Image style={styles.dataImage}
                           source={require('../../images/81右前门1.bmp')}/>
                    <LabelTextInput label="批次"  />
                    <LabelTextInput label="温度"  />
                    <LabelTextInput label="标签1"  />
                    <LabelTextInput label="标签2"  />
                    <LabelTextInput label="标签3"  />
                    <LabelTextInput label="标签4"  />
                    <LabelTextInput label="标签5"  />
                    <View style={styles.bottomBut}>
                        <ViewButton text="删除" onPress={()=>{}} />
                        <ViewButton text="保存" onPress={()=>{}} />
                    </View>
                    </ScrollView>
                </View>
            </View>
        );
    }

    _renderDataListRow(dd) {
        return (
            <ViewButton text={dd.dataName}
                        onPress={() => this._selectedTechnologyData(dd)}
                        boxStyle={(dd.selected == true) ? BaseStyles.areaButSeleted : BaseStyles.areaBut}
                        textStyle={BaseStyles.areaButText}
            />
        );
    }

    _selectedTechnologyData(dataObj) {
        var data = this.props.navigation.state.params.dataList;
        for(var i in data){
            data[i].selected = false;
            if(data[i].id == dataObj.id){
                data[i].selected = true;
            }
        }
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
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
    areaImage: {
        width: 220,
        height: 220,
        marginTop: 10,
        marginBottom: 10,
    },
    dataImage: {
        width: 120,
        height: 120,
        marginTop: 10,
        marginBottom: 10,

    },
    bottomBut:{
        width : '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

});
