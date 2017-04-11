

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView
} from 'react-native';

import DB from '../db/SQLiteDB';


class UserTest extends Component {
 
 constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            process: ds.cloneWithRows([])
        };
    }

componentWillMount(){
    var that = this;
    DB.open().transaction(that.populateDB, that.errorCB, function () {
        console.log('populateDB success');
        that._findUser();
    });
}
populateDB(tx) {
    console.log('populateDB');
    // tx.executeSql('DROP TABLE IF EXISTS Users;');
    tx.executeSql('CREATE TABLE IF NOT EXISTS Users( '
            + 'user_id INTEGER PRIMARY KEY NOT NULL, '
            + 'name VARCHAR(30) ); ', [], DB._successCB, DB._errorCB);
    // tx.executeSql('INSERT INTO Users (name) VALUES ("users");', []);
 }
 _addUser(){
    console.log('add user clicked');
    var that = this;
    DB.open().transaction(that.add, that.errorCB, function () {
        console.log('add user success');
        that._findUser();
    });
  }
  add(){
      tx.executeSql('INSERT INTO Users (name) VALUES ("users");', []);
  }

errorCB(){
    console.log('errorCB');
}
successDB(){
    console.log('successDB');
}



  render() {
    return (
      <View style={styles.container}>
      <TouchableHighlight onPress={this._addUser}>
        <Text>add user</Text>
      </TouchableHighlight>
        <ListView
                        dataSource={this.state.process}
                        renderRow={this._renderRowProcess.bind(this)}
                        enableEmptySections={true}
                        automaticallyAdjustContentInsets={false}
                        />
      </View>
    );
  }

  

  _findUser(){
      console.log('_findUser');
      var that = this;
    DB.open().transaction((tx) => {
        tx.executeSql('SELECT * FROM Users', [], (tx, results) => {
        console.log("Query completed");
        var len = results.rows.length;
        console.log('找到用户数：'+len);
        var userArray = []
        for (let i = 0; i < len; i++) {
            console.log('-----------------------------');
            let row = results.rows.item(i);
            
            console.log("查询到用户: "+"row.name"+i);
            userArray.push("User name: "+"row.name"+i);
        }
        that.setState({
            process : that.state.process.cloneWithRows(userArray)
        });
        
        });
    });
  }

  

  _renderRowProcess(rowData){
    return (
        <View>
            <Text>{rowData}</Text>
        </View>
    )
}


}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = UserTest
