import React, { PropTypes, Component } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import Util from '../Util.js';

class WatchFaceControl extends Component {
    constructor(props) {
        super(props);

        this.state = {
            watchOn: false,
            startBtnText: '开始',
            stopBtnText: '记次'
        };
    }

    startWatch() {
        const {watchOn} = this.state;
        const startBtnText = watchOn ? '开始' : '停止';
        const stopBtnText = watchOn ? '记次' : '复位';

        this.setState({
            watchOn: !watchOn,
            startBtnText,
            stopBtnText
        });
    }


    render() {
        const {startBtnText, stopBtnText} = this.state

        return (
            <View style={styles.watchFaceControl}>
                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                    <TouchableHighlight style={styles.btnStart} underlayColor='#eee' onPress={() => this.startWatch()}>
                        <Text style={styles.btnStartText}>{startBtnText}</Text>
                    </TouchableHighlight>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <TouchableHighlight style={styles.btnStop} underlayColor='#eee' onPress={() => { }}>
                        <Text style={styles.btnStopText}>{stopBtnText}</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    };
}

const styles = {
    watchFaceControl: {
        width: Util.size.width,
        height: 100,
        flexDirection: 'row',
        backgroundColor: '#f3f3f3',
        paddingTop: 10,
        paddingRight: 60,
        paddingLeft: 60,
        paddingBottom: 0
    },
    btnStart: {
        width: 70,
        height: 70,
        backgroundColor: '#fff',
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnStartText: {
        fontSize: 14,
        backgroundColor: 'transparent'
    },
    btnStop: {
        width: 70,
        height: 70,
        backgroundColor: '#fff',
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnStopText: {
        fontSize: 14,
        backgroundColor: 'transparent'
    }
}

export default WatchFaceControl;