import React from 'react';
import { StyleSheet, Text, View , Image, } from 'react-native';
import image1 from './images/img1.svg';

import startIcon from './images/start.png';
// import SlidePart from './Reciever/SlidePart';
import TestApp from './Reciever/Stopwatch'
import Overlay from './Reciever/Overlay'
import { Header, PricingCard, Input,Card, Button, Icon, ButtonGroup, Slider } from 'react-native-elements';
import styling from './Reciever/stylesheet';
import File from './Reciever/File'

export default function App() {
  const buttons = ['Start', 'Stop']
  return (
    <View style={styles.container}>
        <Header
          containerStyle={{
            backgroundColor: 'purple',
            justifyContent: 'space-around',
            width: '100%'
          }}
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'VOICE DATA ENCRYPTION', style: { color: '#fff', fontSize: 20 } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />

        <View style={styles.body}>
          <Image
              style={{width: 180, height: 180, alignItems: 'center', marginTop: '30%', 
              marginBottom: '10%', borderRadius:'100%', padding: '5%'}}
              source={require('./images/microphone.svg')} 
          />
          <Image
              style={{width: 50, height: 50, alignItems: 'center', marginBottom: '10%'}}
              source={require('./images/pulse.svg')} 
          />
          
          <File />
        </View>
        

        {/* <View style={styling.abovefullpack}> */}
            {/* <div style={styling.pack}> */}
              
              {/* <Image
                  style={{width: 50, height: 50, alignItems: 'center', marginBottom: '30%'}}
                  source={require('./images/pulse.svg')} 
              />
            </div>
            < */}
        {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text:{
    color: 'black',
    // marginTop: '13%',
    alignItems: 'center'
  },

  card:{
    alignItems: 'center',
  },
  icon:{
    // padding: '5%'
  },
  stopwatch:{
    textAlign: 'center',
    margin: 'auto',
    width: '100%', 
    color: 'red'
  },
  body:{
    alignItems: 'center'
  }
});
