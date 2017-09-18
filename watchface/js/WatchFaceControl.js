import React, {PropTypes, Component} from 'react';
import {View} from 'react-native';
import Util from '../Util.js';

class WatchFaceControl extends Component {
    render() {
        return (
            <View style={styles.watchFaceControl}>

            </View>
        );
    };
}

const styles = {
    watchFaceControl: {
        width: Util.size.width,
        height: 100,
        flexDirection:'row',
        backgroundColor: '#f3f3f3'
    }
}

export default WatchFaceControl;