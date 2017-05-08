/**
 * Created by wangkai on 2017/5/5.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

import TableView from '../../commons/tableView'
import ReaioButtons from '../../commons/redioButtons'
import DatePicker from '../../commons/datePicker'
import Radio from '../../commons/radio'
var data=[{id:1,name:'任务1',createDate:'2017-01-03',status:'0'},
    {id:1,name:'任务2',createDate:'2017-01-04',status:'0'},
    {id:1,name:'任务3',createDate:'2017-01-05',status:'0'},
    {id:1,name:'任务4',createDate:'2017-01-06',status:'1'},
    {id:1,name:'任务5',createDate:'2017-01-07',status:'1'}
    ];
export default class CheckList extends Component {
    static navigationOptions = {
        title: '点检'
    }

    constructor(props) {
        super(props);
        this.state = {
            listData: [{id:1,name:'任务1',createDate:'2017-01-03',status:'0'}]
        }
        ;
    }
    render() {
        return (
            <View style={styles.container}>
              <View style={styles.head}>
                  <View style={styles.head_left}>
                    <DatePicker/>
                  </View>
                  <View style={styles.head_right}>
                    <View>
                        <Radio
                            dataSource={[{key:'0',name:'未完成'},{key:'1',name:'未提交'}]}
                            callback={
                                (data)=>{
                                    const v=data.key;
                                    this.getDataByQuery([{key:'status',value:v}]);
                                }
                            }
                        />
                    </View>
                  </View>
              </View>
              <View style={styles.content}>
                <View style={styles.content_left}>
                  <View style={styles.content_left_head}>
                    <Text style={styles.head_text}>区域{this.state.listData.length}</Text>
                  </View>
                  <View>
                    <ReaioButtons dataSource={data} callback={(data)=>{
                        const v=data.key;
                        this.getDataByQuery([{key:'name',value:data.name}]);
                    }}/>
                  </View>
                </View>
                <View style={styles.content_right}>
                    <TableView
                    dataSource={this.state.listData}
                    field={[{column:'name',name:'任务名称',type:'text'},{column:'createDate',name:'任务截止时间',type:'text'},{column:'status',name:'状态',type:'codeList',keys:[{key:'0',value:'未完成'},{key:'1',value:'未提交'}]}]}
                    callback={(data)=>{
                        this.nav(data);
                    }}
                    />
                </View>
              </View>
            </View>
        );
    }

    /**
     * 跳转到编辑页面
     * @param data
     */
    nav(data){
        const {navigate} = this.props.navigation;
        navigate('CheckEdit',data);
    }
    getDataByQuery(query){
        var list=new Array();

        for(var i=0;i<data.length;i++){

            for(var j=0;j<query.length;j++){
                if(data[i][query[j].key]==query[j].value){
                    list[list.length]=data[i];
                    break;
                }
            }
        }

        this.setState({
            listData: list
        });
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    head:{
        height:80,
        flexDirection:'row',
        alignItems: 'center'
    },
    head_left:{
        flex:1,
        paddingLeft:10
    },
    head_right:{
        flex:3,
        justifyContent:'center',
        alignItems: 'center'
    },
    head_text:{
        fontSize:20
    },
    content:{
        flex:1,
        flexDirection:'row'
    },
    content_left_head:{
        height:50,
        backgroundColor:'#0099FF',
        justifyContent:'center',
        alignItems: 'center'
    },
    content_left:{
        flex:1,
        paddingRight:5
    },
    content_right:{
        flex:3
    },

});
