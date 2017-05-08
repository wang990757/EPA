/**
 * Created by wangkai on 2017/5/7.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    ScrollView,
    TouchableOpacity
} from 'react-native';

var datas=[{id:1,img:"../../images/81右前门1.bmp"}];
export default class QualityBlock extends Component {
    static navigationOptions = {
        title: '选择区块'
    }

    constructor(props) {
        super(props);

    }

    componentWillMount(){

    }


    render() {

        return (
            <ScrollView >
                    <View style={{flex:1, alignItems: 'center'}}>
                        <View  style={styles.container}>
                            <TouchableOpacity style={styles.dataImage} onPress={()=>this._pressRow()}>
                            <Image style={styles.dataImage}
                                    source={require('../../images/81右前门1.bmp')}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.dataImage} onPress={()=>this._pressRow()}>
                                <Image style={styles.dataImage}
                                       source={require('../../images/81右前门1.bmp')}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.dataImage} onPress={()=>this._pressRow()}>
                                <Image style={styles.dataImage}
                                       source={require('../../images/81右前门1.bmp')}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.dataImage} onPress={()=>this._pressRow()}>
                                <Image style={styles.dataImage}
                                       source={require('../../images/81右前门1.bmp')}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.dataImage} onPress={()=>this._pressRow()}>
                                <Image style={styles.dataImage}
                                       source={require('../../images/81右前门1.bmp')}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.dataImage} onPress={()=>this._pressRow()}>
                                <Image style={styles.dataImage}
                                       source={require('../../images/81右前门1.bmp')}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.dataImage} onPress={()=>this._pressRow()}>
                                <Image style={styles.dataImage}
                                       source={require('../../images/81右前门1.bmp')}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.dataImage} onPress={()=>this._pressRow()}>
                                <Image style={styles.dataImage}
                                       source={require('../../images/81右前门1.bmp')}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.dataImage} onPress={()=>this._pressRow()}>
                                <Image style={styles.dataImage}
                                       source={require('../../images/81右前门1.bmp')}/>
                            </TouchableOpacity>
                        </View>
                    </View>
            </ScrollView>
        );
    }
    _pressRow(){
        const {navigate} = this.props.navigation;
        navigate('QualityDetail');
    }

}
const styles = StyleSheet.create({
    container:{
        width:900,
        flexWrap:'wrap',
        flexDirection: 'row'
    },
    dataImage:{
        width:300,
        height: 300,
    }

});
