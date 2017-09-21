/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import _ from 'underscore';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import WatchFace from './js/WatchFace.js';
import WatchFaceControl from './js/WatchFaceControl.js';
import WatchRecord from './js/WatchRecord.js';
import TimeRecord from './modal/TimeRecord.js';
export default class watchface extends Component {

  constructor(props) {
    super(props);

    this.state = {
      watchOn: true,
      resetWatch: true,
      initialTime: 0,
      currentTime: 0,
      timeAccumulation: 0,
      recordTime:0,
      sectionTime: '00:00:00',
      totalTime: '00:00:00',
      recordList: []
    }
  }

  handleStartWatch() {
    if (this.state.watchOn) { //开始
      this.setState({
        watchOn: false,
        timeAccumulation: 0,
        initialTime: (new Date()).getTime()
      })
    } else {
      this.setState({ //暂停
        watchOn: false,
        initialTime: (new Date()).getTime()
      });
    }

    let milSecond, second, minute, countingTime, secmilSecond, secsecond, secminute, seccountingTime;
    let interval = setInterval(
        () => { 
          this.setState({
            currentTime: (new Date()).getTime()
          })
          countingTime = this.state.timeAccumulation + this.state.currentTime + 10 - this.state.initialTime;
          const min = countingTime/(60*1000)
          minute = Math.floor(min);
          second = Math.floor((min*60)%60);
          milSecond = Math.floor((countingTime%1000)/10);
          seccountingTime = countingTime - this.state.recordTime;
          const secMin = seccountingTime/(60*1000)
          secminute = Math.floor(secMin);
          secsecond = Math.floor((secMin*60)%60);
          secmilSecond = Math.floor((seccountingTime%1000)/10);
          this.setState({
            totalTime: (minute<10? "0"+minute:minute)+":"+(second<10? "0"+second:second)+"."+(milSecond<10? "0"+milSecond:milSecond),
            sectionTime: (secminute<10? "0"+secminute:secminute)+":"+(secsecond<10? "0"+secsecond:secsecond)+"."+(secmilSecond<10? "0"+secmilSecond:secmilSecond),
          })
          if (this.state.watchOn) {
            this.setState({
              watchOn: false, //暂停后，要开始还是用这个
              timeAccumulation: countingTime 
            })
            clearInterval(interval)
          };
        },10);
  }

  handleStopWatch() {
    this.setState({
      watchOn: true
    })
  }

  handleRecordWatch(watchOn) {
    
    if (watchOn) { //点击记次
      const {sectionTime ,recordList, timeAccumulation, currentTime,initialTime} = this.state;
      const timeRecord = new TimeRecord({title: '计次'+recordList.length, time:sectionTime})
      recordList.unshift(timeRecord)

      this.setState({
        resetWatch: false,
        recordTime: timeAccumulation + currentTime - initialTime,
        recordList
      })

    } else {  //点击复位    
      this.setState({
        initialTime: 0,
        resetWatch: true,
        watchOn: true,
        currentTime: 0,
        timeAccumulation: 0,
        recordTime:0,
        sectionTime: '00:00:00',
        totalTime: '00:00:00',
        recordList: []
      });
    }
  }

  render() {
    const {sectionTime, totalTime, recordList} = this.state

    return (
      <View style={styles.watchContainer}>
        <WatchFace sectionTime={sectionTime} totalTime={totalTime}/>
        <WatchFaceControl startWatch={this.handleStartWatch.bind(this)} stopWatch={this.handleStopWatch.bind(this)} recordWatch={this.handleRecordWatch.bind(this)} />
        <WatchRecord timeList={recordList}/>
      </View>
    );
  }
}

const styles = {
  watchContainer: {
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    marginTop: 60
  }
}

AppRegistry.registerComponent('watchface', () => watchface);
