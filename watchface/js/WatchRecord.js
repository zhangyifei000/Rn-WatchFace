import React,{Component, PropTypes} from 'react';
import {View, Text, ListView} from 'react-native';
import TimeRecord from '../modal/TimeRecord.js';
import Util from '../Util.js';

class WatchRecord extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        const data = this.props.timeList;
        const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
        const dataSource = ds.cloneWithRows(data);
        return(
            <ListView 
                style={styles.recordList}
                dataSource={dataSource}
                renderRow={(rowData) => 
                    <View style={styles.recordItem}>
                        <Text style={styles.title}>{rowData.title}</Text>
                        <Text style={styles.time}>{rowData.time}</Text>
                    </View>
                }
            >
            </ListView>
        );
    }
}

WatchRecord.propTypes = {
    timeList: PropTypes.arrayOf(
        PropTypes.instanceOf(TimeRecord)
    ).isRequired
}

const styles = {
    recordList:{
        width: Util.size.width,
        height: Util.size.height - 330, //330分别是 170 + 60 + 100 上面的高度
        paddingLeft: 10,
        backgroundColor: 'white'
    },
    recordItem:{
        height: 40,
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:5,
        paddingRight:5,
        borderBottomWidth: 0.5,
        borderBottomColor:'#ddd',
        flexDirection:'row',
        alignItems:'center'
    },
    title:{
        backgroundColor:'transparent',
        paddingLeft: 20,
        width: '30%',
        textAlign: 'left',
        textColor: '#777'
    },
    time: {
        backgroundColor:'transparent',
        textAlign: 'center',
        width: '50%',
        paddingRight: 20,
        textColor: '#222'
    }
}

export default WatchRecord;