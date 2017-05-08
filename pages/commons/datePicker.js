/**
 * Created by wangkai on 2017/5/6.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    DatePickerAndroid
} from 'react-native';

export default class DatePicker extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){

        let d=this.props.date==null ?  new Date(): this.props.date;
        this.setState({
            date:d,
            dateStr:d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate()
        });
    }


    render() {
        return (
            <View>
                <TouchableOpacity onPress={()=>this.openDatePick()}>
                    <TextInput
                        style={styles.datePick}
                        editable={false}
                        value={this.state.dateStr}
                    />
                </TouchableOpacity>
            </View>
        );
    }
    async openDatePick(){
        try {
            const {action, year, month, day} = await DatePickerAndroid.open({
                // 要设置默认值为今天的话，使用`new Date()`即可。
                // 下面显示的会是2020年5月25日。月份是从0开始算的。
                date: this.state.date
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                // 这里开始可以处理用户选好的年月日三个参数：year, month (0-11), day
                let d=new Date();
                d.setYear(year);
                d.setMonth(month);
                d.setDate(day);
                this.setState({
                    date:d,
                    dateStr:d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate()
                });
            }
        } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
        }
    }
}

const styles = StyleSheet.create({
    datePick:{
        width:200,
        backgroundColor:'#c1c1c1',
        color:'#000',
        borderRadius:8
    }
});
module.exports = DatePicker
;
