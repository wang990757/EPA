import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    ListView,
    TouchableOpacity
} from 'react-native';

export default class Radio extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
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
            dataSource:this.props.dataSource
        }
    }

    /**
     * 按钮事件处理
     * @param data
     * @private
     */
    _pressRow(data){
        if(!data.selected){
            for(var i=0;i<this.props.dataSource.length;i++){
                if(data.key==this.props.dataSource[i].key){
                    this.props.dataSource[i].selected=true;
                }else{
                    this.props.dataSource[i].selected=false;
                }
            }
            if(this.props.callback!=null){
                this.props.callback(data);
            }
        }

        this.setState({
            dataSource: this.props.dataSource
        });
    }
    render() {
        let datas=new Array();
        for(var i =0;i<this.state.dataSource.length;i++){
            const dt=this.state.dataSource[i];
            if(i==0) {
                if(this.state.dataSource[i].selected){
                    datas[i] = (
                        <TouchableOpacity key={this.state.dataSource[i].key} onPress={()=>this._pressRow(dt)}>
                            <View style={{backgroundColor:'#0099FF',paddingLeft:20,paddingRight:20,borderBottomLeftRadius:30,borderTopLeftRadius:30,height:50,justifyContent:'center', alignItems: 'center'}}>
                                <Text style={{fontSize:20,color:'#000'}}>{this.state.dataSource[i].name}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                }else{
                    datas[i] =( <TouchableOpacity key={this.state.dataSource[i].key} onPress={()=>this._pressRow(dt)}>
                        <View style={{paddingLeft:20,paddingRight:20,borderBottomLeftRadius:30,borderTopLeftRadius:30,height:50,justifyContent:'center', alignItems: 'center'}}>
                            <Text style={{fontSize:20,color:'#000'}}>{this.state.dataSource[i].name}</Text>
                        </View>
                    </TouchableOpacity>);
                }
            }else if(i==this.state.dataSource.length-1){
                if(this.state.dataSource[i].selected) {
                    datas[i] = (
                        <TouchableOpacity key={this.state.dataSource[i].key} onPress={() => this._pressRow(dt)}>
                            <View style={{
                                backgroundColor:'#0099FF',
                                paddingLeft: 20,
                                paddingRight: 20,
                                borderBottomRightRadius: 30,
                                borderTopRightRadius: 30,
                                height: 50,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{fontSize: 20, color: '#000'}}>{this.state.dataSource[i].name}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                }else{
                    datas[i] = (
                        <TouchableOpacity key={this.state.dataSource[i].key} onPress={() => this._pressRow(dt)}>
                            <View style={{
                                paddingLeft: 20,
                                paddingRight: 20,
                                borderBottomRightRadius: 30,
                                borderTopRightRadius: 30,
                                height: 50,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{fontSize: 20, color: '#000'}}>{this.state.dataSource[i].name}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                }
            }else{
                if(this.state.dataSource[i].selected) {
                    datas[i] = (
                        <TouchableOpacity key={this.state.dataSource[i].key} onPress={() => this._pressRow(dt)}>
                            <View style={{
                                backgroundColor:'#0099FF',
                                paddingLeft: 20,
                                paddingRight: 20,
                                height: 50,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{fontSize: 20, color: '#000'}}>{this.state.dataSource[i].name}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                }else{
                    datas[i] = (
                        <TouchableOpacity key={this.state.dataSource[i].key} onPress={() => this._pressRow(dt)}>
                            <View style={{
                                paddingLeft: 20,
                                paddingRight: 20,
                                height: 50,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{fontSize: 20, color: '#000'}}>{this.state.dataSource[i].name}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                }
            }
        }

        return (
            <View style={styles.btns}>
                {datas}
            </View>
        );
    }



}

const styles = StyleSheet.create({
    btns: {
        flexDirection: 'row',
        borderRadius:30,
        borderWidth:2,
        borderColor:'#c1c1c1'
    }
});
module.exports = Radio
;
