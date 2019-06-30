import React, { Component } from 'react';
import { AppRegistry, StyleSheet,Text,View, TouchableHighlight, Image } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import { Header, PricingCard, Input,Card, Button, Icon, ButtonGroup, Slider } from 'react-native-elements';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

class TestApp extends React.Component{
  constructor(props) {
    const audioRecorderPlayer = new AudioRecorderPlayer();
    super(props);
    this.state = {
      timerStart: false,
      stopwatchStart: false,
      totalDuration: 90000,
      timerReset: false,
      stopwatchReset: false,
    };
    this.toggleTimer = this.toggleTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.toggleStopwatch = this.toggleStopwatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);
  }
 
  toggleTimer() {
    this.setState({timerStart: !this.state.timerStart, timerReset: false});
  }
 
  resetTimer() {
    this.setState({timerStart: false, timerReset: true});
  }
 
  toggleStopwatch() {
    this.setState({stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false});
  }
 
  resetStopwatch() {
    this.setState({stopwatchStart: false, stopwatchReset: true});
  }
  
  getFormattedTime(time) {
    this.currentTime = time;
  };

    onStartRecord = async () => {
    const result = await this.audioRecorderPlayer.startRecorder();
    this.audioRecorderPlayer.addRecordBackListener((e) => {
        this.setState({
        recordSecs: e.current_position,
        recordTime: this.audioRecorderPlayer.mmssss(Math.floor(e.current_position)),
        });
        return;
    });
    console.log(result);
    }
    
    onStopRecord = async () => {
    const result = await this.audioRecorderPlayer.stopRecorder();
    this.audioRecorderPlayer.removeRecordBackListener();
    this.setState({
        recordSecs: 0,
    });
    console.log(result);
    }
    
    onStartPlay = async () => {
    console.log('onStartPlay');
    const msg = await this.audioRecorderPlayer.startPlayer();
    console.log(msg);
    this.audioRecorderPlayer.addPlayBackListener((e) => {
        if (e.current_position === e.duration) {
        console.log('finished');
        this.audioRecorderPlayer.stopPlayer();
        }
        this.setState({
        currentPositionSec: e.current_position,
        currentDurationSec: e.duration,
        playTime: this.audioRecorderPlayer.mmssss(Math.floor(e.current_position)),
        duration: this.audioRecorderPlayer.mmssss(Math.floor(e.duration)),
        });
        return;
    });
    }
    
    onPausePlay = async () => {
    await this.audioRecorderPlayer.pausePlayer();
    }
    
    onStopPlay = async () => {
    console.log('onStopPlay');
    this.audioRecorderPlayer.stopPlayer();
    this.audioRecorderPlayer.removePlayBackListener();
    }
 
  render() {
    return (
      <View style={styles.stopwatch}>
        <Stopwatch laps msecs start={this.state.stopwatchStart}
          reset={this.state.stopwatchReset}
          />
        <Button
            buttonStyle={{margin: '5%', padding: '4%', backgroundColor:'white', 
            outline:'2px solid green', boxShadow: '0 0 10px #B1C1C0', textAlign: 'center' }}
            titleStyle={{color: 'black'}}
            title={!this.state.stopwatchStart ? "START" : "STOP"}
            icon={
            <Image
            style={{width: 20, height: 20, alignItems: 'center', marginRight: '20%'}}
            source={require('../images/power.svg')} />
            }
            onPress={this.toggleStopwatch}
        />
        <Text style={{fontSize: 30}}></Text>

        <Button
            buttonStyle={{margin: '5%', padding: '4%', backgroundColor:'white', 
            outline:'2px solid green', boxShadow: '0 0 10px #B1C1C0', textAlign: 'center' }}
            titleStyle={{color: 'black'}}
            title='RESET'
            icon={
            <Image
            style={{width: 20, height: 20, alignItems: 'center', marginRight: '20%'}}
            source={require('../images/delete.svg')} />
            }
            onPress={this.resetStopwatch}
        />
        
      </View>
    );
  }
}
 
const handleTimerComplete = () => alert("custom completion function");
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    padding: 5,
    borderRadius: 5,
    width: 220,
  },
  text: {
    fontSize: 30,
    color: '#FFF',
    marginLeft: 7,
  },
  stopwatch:{
    textAlign: 'center',

  }
});
 
export default TestApp;