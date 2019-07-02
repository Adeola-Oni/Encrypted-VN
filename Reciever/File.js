import React, { Component } from 'react';
import { AppRegistry, StyleSheet,Text,View, TouchableHighlight, Image, TextInput } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
// import * as RNFS from 'react-native-fs';
import { Header, PricingCard, Input,Card, Button, Icon, ButtonGroup, Slider} from 'react-native-elements';

class FileSent extends React.Component {
    state = { 
        file: ''
    }

    // uploadFile(data){
    //     console.log(data)
    // }

    uploadFile(files) {
        console.log(files)
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          console.log(file)
          
        //   if (!file.type.startsWith('image/')){ continue }
          
        //   const img = document.createElement("img");
        //   img.classList.add("obj");
        //   img.file = file;
        //   preview.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.
          
        //   const reader = new FileReader();
        //   reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
        //   reader.readAsDataURL(file);
        }
    }

    
    render() {
        return (
            <View style={styles.filepart}>
                <Text style={styles.inputPart}>
                    <input type="file"  onChange={(res)=>this.uploadFile(res.data)}/>
                </Text>

                <Button
                    icon={{name: 'microphone', type: 'font-awesome', color: 'white'}}
                    buttonStyle={{ backgroundColor: 'purple', borderWidth: '1',
                    borderColor: '#336633'}}
                    
                    title="ENCRYPT VOICE RECORDING"
                    titleStyle={{color: 'white'}}
                    // onPress={this.analyzeVoiceFile()}
                />
            </View>
        )
    }
}
export default FileSent

const styles = StyleSheet.create({
    inputPart:{
        padding: '10%'
    }
})

