import {View, Text} from 'react-native';
import React, {Component, PropTypes} from 'react';
import Style from '../styles/style.js'

class WatchFace extends Component {
    render() {
        const {sectionTime, totalTime} = this.props;

        return (
            <View style={Style.watchFaceContainer}>
                <Text style={Style.sectionTime}>{sectionTime}</Text>
                <Text style={Style.totalTime}>{totalTime}</Text>
            </View>
        );
    }  
}

WatchFace.propTypes = {
    sectionTime: PropTypes.string.isRequired,
    totalTime: PropTypes.string.isRequired    
}

export default WatchFace;