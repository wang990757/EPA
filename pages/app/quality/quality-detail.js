/**
 * Created by wangkai on 2017/5/7.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image
} from 'react-native';

import TableView from '../../commons/tableView';
import ReaioButtons from '../../commons/redioButtons';
import Radio from '../../commons/radio';
import DefaultLabelTextInput from '../../commons/defaultLableTextInput';
var data=[{id:1,tag:'批次',value:'PC20170106'},
    {id:2,tag:'温度',value:'80'},
    {id:3,tag:'胎压',value:'200'},
    {id:4,tag:'标签1',value:'-'},
    {id:5,tag:'标签2',value:'-'}
];
var dataV=[{id:1,name:'数据条1'},
    {id:2,name:'数据条1'},
    {id:3,name:'数据条1'},
    {id:4,name:'数据条1'},
    {id:5,name:'数据条1'}
];
export default class QualityDetail extends Component {
    static navigationOptions = {
        title: '质量明细'
    }

    constructor(props) {

        super(props);
        this.state = {
            listData: data
        }
        ;
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.head}>
                    <View>
                        <Radio
                            dataSource={[{key:'SV61',name:'SV61'},{key:'SV71',name:'SV71'},{key:'SV81',name:'SV81'},{key:'SV91',name:'SV91'},{key:'SV62',name:'SV62'},{key:'SV69',name:'SV69'},{key:'SV79',name:'SV79'}]}
                            callback={
                                (data)=>{
                                    const v=data.key;
                                    this.getDataByQuery([{key:'status',value:v}]);
                                }
                            }
                        />
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.content_left}>
                        <View style={styles.content_left_head}>
                            <Text style={styles.head_text}>车辆信息</Text>
                        </View>
                        <View style={{flex:1, flexDirection: 'column'}}>
                            <DefaultLabelTextInput label="TPS"  />
                            <DefaultLabelTextInput label="车身颜色"  />
                            <View style={{flex:1, flexDirection: 'row',marginTop:15,padding:20}}>
                                <Image style={styles.dataImage}
                                       source={require('../../images/81右前门1.bmp')}/>
                            </View>
                        </View>
                    </View>
                    <View style={styles.content_left}>
                        <View style={styles.content_left_head}>
                            <Text style={styles.head_text}>数据条</Text>
                        </View>
                        <View>
                            <ReaioButtons dataSource={dataV} callback={(data)=>{
                                this.getDataByQuery([{key:'id',value:data.id}]);
                            }}/>
                        </View>
                    </View>
                    <View style={styles.content_right}>
                        <TableView
                            dataSource={this.state.listData}
                            field={[{column:'tag',name:'标签',type:'text'},{column:'value',name:'值',type:'text'}]}
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
        alignItems: 'center',
        justifyContent:'center'
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
        flex:2,
        paddingRight:5
    },
    content_right:{
        flex:3
    },
    dataImage:{
        flex:1,
        height:300
    }
});
