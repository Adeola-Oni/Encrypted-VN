import React from 'react';
import { StyleSheet, Text, View , Image, } from 'react-native';
import image1 from './images/img1.svg';
// import './App.css';
import startIcon from './images/start.png';
// import SlidePart from './Reciever/SlidePart';
import TestApp from './Reciever/Stopwatch'
import Overlay from './Reciever/Overlay'
import { Header, PricingCard, Input,Card, Button, Icon, ButtonGroup, Slider } from 'react-native-elements';

export default function App(props) {
  const buttons = ['Start', 'Stop']
  return (
    <View style={styles.container}>
        <Header
          containerStyle={{
            backgroundColor: 'purple',
            outline: 'purple',
            justifyContent: 'space-around',
            width: '100vw'
          }}
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'VOICE DATA ENCRYPTION', style: { color: '#fff', fontSize: '20px' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />

        <Text>
          <div className='above-full-pack'>
              <div className='pack'>
                <Image
                    style={{width: 180, height: 180, alignItems: 'center', marginTop: '20%', marginBottom: '10%'}}
                    source={require('./images/microphone.svg')}
                />
                <br/>
                <Image
                    style={{width: 50, height: 50, alignItems: 'center', marginBottom: '30%'}}
                    source={require('./images/pulse.svg')}
                />
              </div>
              <div className='stopwatch'>
                <TestApp style={styles.stopwatch}/>
              </div>

          </div>
        </Text>
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
});
