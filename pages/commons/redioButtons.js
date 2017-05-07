import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    ListView,
    TouchableOpacity
} from 'react-native';

export default class ReaioButtons extends Component {
    constructor(props) {
      super(props);
    }

    componentWillMount(){
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.selected!== r2.selected});
        if(this.props.selectRowId!=null){
        for(var i=0;i<this.props.dataSource.length;i++){
          if(this.props.selectRowId==i){
            this.props.dataSource[i].selected=true;
          }else {
            this.props.dataSource[i].selected=false;
          }
        }
      }else{
        for(var i=0;i<this.props.dataSource.length;i++){
          if(i==0){
            this.props.dataSource[i].selected=true;
          }else {
            this.props.dataSource[i].selected=false;
          }
        }
      }
      this.state = {
        dataSource: ds.cloneWithRows(this.props.dataSource)
      }
    }

    _pressRow(data, sectionID, rowID){
      if(this.selectData!==data){
      for(var i=0;i<this.props.dataSource.length;i++){
          if(i==rowID){
            this.props.dataSource[i].selected=true;
            this.selectData=data;
            this.props.callback(data);
          }else {
            this.props.dataSource[i].selected=false;
          }
        }
      }
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.selected!== r2.selected});
      this.setState({
        dataSource: ds.cloneWithRows(this.props.dataSource)
      });
    }
    render() {
        return (
          <View>
          <Text>{this.state.selectRowId}</Text>
          <ListView
             dataSource={this.state.dataSource}
             renderRow={this._renderRow.bind(this)}
          />
          </View>
        );
    }

    _renderRow(rowData, sectionID, rowID){
      if(rowData.selected){
        return (
            <TouchableOpacity onPress={()=>this._pressRow(rowData,sectionID, rowID)}>
                <View style={styles.btn}>
                  <Text  style={styles.text}>{rowData.name}</Text>
                </View>
            </TouchableOpacity>
          );
      }else{
        return (
            <TouchableOpacity onPress={()=>this._pressRow(rowData,sectionID, rowID)}>
                <View style={styles.selectBtn}>
                  <Text  style={styles.selectText}>{rowData.name}</Text>
                </View>
            </TouchableOpacity>
          );
      }
    }


}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#0099FF',
    flex:1,
    height:50,
    margin:5,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
      color:'#fff',
      fontSize: 30
  },
  selectText:{
      color:'#0099FF',
      fontSize: 30
  },
  selectBtn: {
    backgroundColor: '#fff',
    borderColor:'#0099FF',
    flex:1,
    height:50,
    margin:5,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
module.exports = ReaioButtons
;
