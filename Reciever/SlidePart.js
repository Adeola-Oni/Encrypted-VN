import React from "react";
import Slider from "react-native-slider";
import { AppRegistry, StyleSheet, View, Text } from "react-native";

class SlidePart extends React.Component {
  state = {
    value: 0.2
  };

  render() {
    return (
      <View style={{width: '80vw', marginLeft: '10%', marginBottom: '5%'}}>
        <Slider
          value={this.state.value}
          onValueChange={value => this.setState({ value })}
        />
      </View>
    )
  }
}

export default SlidePart