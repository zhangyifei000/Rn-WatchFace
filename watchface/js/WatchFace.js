import {View, Text} from 'react-native';
import React, {Component, PropTypes} from 'react';
import Util from '../Util.js';

class WatchFace extends Component {
    render() {
        const {sectionTime, totalTime} = this.props;

        return (
            <View style={styles.watchFaceContainer}>
                <Text style={styles.sectionTime}>{sectionTime}</Text>
                <Text style={styles.totalTime}>{totalTime}</Text>
            </View>
        );
    }  
}

const styles = {
    watchFaceContainer: {
        width: Util.size.width,
        height: 170,
        paddingTop: 10, 
        paddingLeft: 10,
        paddingTop: 40,
        paddingBottom: 40,
        borderBottomWidth:1,
        borderBottomColor: '#ddd'
    },
    sectionTime: {
        position: 'absolute',
        fontSize:20,
        fontWeight:'100',
        paddingRight:30,
        right:30,
        color: '#555',
        top: 10
    },
    totalTime: {
        fontSize: 60,
        fontWeight:'100',
        paddingLeft: 20,
        color:'#222'
    }
}

WatchFace.propTypes = {
    sectionTime: PropTypes.string.isRequired,
    totalTime: PropTypes.string.isRequired    
}

export default WatchFace;