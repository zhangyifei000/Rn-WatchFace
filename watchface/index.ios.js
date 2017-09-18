/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Styles from './styles/style.js';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import WatchFace from './js/WatchFace.js';
import WatchFaceControl from './js/WatchFaceControl.js';
export default class watchface extends Component {
  render() {
    return (
      <View style={Styles.watchContainer}>
        <WatchFace sectionTime="12" totalTime="0:0:1"/>
        <WatchFaceControl />
      </View>
    );
  }
}

AppRegistry.registerComponent('watchface', () => watchface);
