'use strict';

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';


import SQLiteStorage from 'react-native-sqlite-storage';
SQLiteStorage.DEBUG(true);
SQLiteStorage.enablePromise(false);

const database_name = "Test.db";
const database_version = "1.0";
const database_displayname = "SQLite Test Database";
const database_size = 200000;
let db;


class SQLiteDB {

    open(){
        if(!db){
            db = SQLiteStorage.openDatabase(
                database_name,
                database_version,
                database_displayname,
                database_size,
                ()=>{
                    this._successCB('open');
                },
                (err)=>{
                    this._errorCB('open',err);
                });
        }
        console.log(db);
    }

    close(){
        if(db){
            this._successCB('close');
            db.close();
        }else {
            console.log("SQLiteStorage not open");
        }
        db = null;
    }

    _successCB(name){
        console.log("SQLiteStorage "+name+" success");
    }
    
    _errorCB(name, err){
        console.log("SQLiteStorage "+name+" error:"+err);
    }
}


module.exports = SQLiteDB;

