import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    ListView,
    TouchableOpacity
} from 'react-native';

export default class TableView extends Component {
    constructor(props) {
      super(props);
    }

    componentWillMount(){
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1!== r2});
      this.state = {
        dataSource: ds.cloneWithRows(this.props.dataSource)
      }
    }
    componentWillReceiveProps(nextProps){
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1!== r2});
        this.state = {
            dataSource: ds.cloneWithRows(nextProps.dataSource)
        }
    }
    _pressRow(data, sectionID, rowID){
        if(this.props.callback!=null){
            this.props.callback(data);
        }
    }
    render() {
      let columns=new Array();
      for(var i =0;i<this.props.field.length;i++){
          columns[i]=this.renderListCloumnNameItem(this.props.field[i].name);
      }
        return (
          <View style={{height:'100%'}}>
          <View style={styles.head}>
            {columns}
          </View>
          <ListView
             dataSource={this.state.dataSource}
             renderRow={this._renderRow.bind(this)}
          />
          </View>
        );
    }

    _renderRow(rowData, sectionID, rowID){
        let datas=new Array();
        for(var i =0;i<this.props.field.length;i++){
            datas[i]=this.renderListCloumnItem(rowData,this.props.field[i]);
        }

        return (
            <TouchableOpacity onPress={()=>this._pressRow(rowData,sectionID, rowID)}>
                <View key={rowData} style={styles.row}>
                  {datas}
                </View>
            </TouchableOpacity>
          );

    }

    renderListCloumnNameItem(columnName){
      return (
        <View key={columnName} style={{flex:1,justifyContent:'center', alignItems: 'center'}}>
        <Text style={{fontSize:20}}>{columnName}</Text>
        </View>
      )
    }
    renderListCloumnItem(item,column){

        if(column.type=='text') {
            return this.columnText(item[column.column]);
        }else if(column.type=='codeList'){
           if(column.keys!=null){
               for(var i=0;i<column.keys.length;i++){
                    if(column.keys[i].key==item[column.column]){
                        return this.columnText(column.keys[i].value);
                    }
               }
               return this.columnText("");
           }else{
               return this.columnText(item[column.column]);
           }
        }
    }
    columnText(cName){
        return (
            <View key={cName} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 20}}>{cName}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  row:{
    borderBottomWidth:1,
    flex: 1,
    flexDirection: 'row',
    height:50,
    borderColor:'#e5e5e5',
    backgroundColor:'#fff'
  },
  head:{
    flexDirection: 'row',
    height:50,
    backgroundColor:'#0099FF'
  }
});
module.exports = TableView
;
