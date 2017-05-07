/**
 * Created by zhaobin on 2017/5/3.
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
var data=[{id:1,name:'aaa',title:'title1'},{id:2,name:'bbb',title:'title1'},{id:3,name:'ccc',title:'title1'}];
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
              <View style={styles.head}>
                  <View style={styles.head_left}>
                    <DatePicker/>
                  </View>
                  <View style={styles.head_right}>
                    <View>
                        <View ></View>
                        <View></View>
                    </View>
                  </View>
              </View>
              <View style={styles.content}>
                <View style={styles.content_left}>
                  <View style={styles.content_left_head}>
                    <Text style={styles.head_text}>区域</Text>
                  </View>
                  <View>
                    <ReaioButtons dataSource={data} callback={()=>{}}/>
                  </View>
                </View>
                <View style={styles.content_right}>
                    <TableView
                    dataSource={[{id:1,name:'aaa',title:'title1'},{id:2,name:'bbb',title:'title1'},{id:3,name:'2222222222111111222222',title:'title1'}]}
                    field={[{column:'id',name:'ID',isKey:true},{column:'title',name:'標題'},{column:'name',name:'名稱'}]}
                    />
                </View>
              </View>
            </View>
        );
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
