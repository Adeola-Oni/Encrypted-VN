import React from "react";
import { AppRegistry, StyleSheet, View, Text } from "react-native";

class Overlay extends React.Component {
  state = {
    isVisible: false
  };

  render() {
    return (
      <View style={{width: '80vw', marginLeft: '10%', marginBottom: '5%'}}>
        <Overlay isVisible={this.state.isVisible}>
            <Text>Hello from Overlay!</Text>
            </Overlay>

            {
            this.state.visible && (
                <Overlay isVisible>
                <Text>Hello from Overlay!</Text>
                </Overlay>
            )
            }

            <Overlay
            isVisible={this.state.isVisible}
            windowBackgroundColor="rgba(255, 255, 255, .5)"
            overlayBackgroundColor="red"
            width="auto"
            height="auto"
            >
            <Text>Hello from Overlay!</Text>
            </Overlay>

            <Overlay
            isVisible={this.state.isVisible}
            onBackdropPress={() => this.setState({ isVisible: false })}
            >
            <Text>Hello from Overlay!</Text>
        </Overlay>
      </View>
    )
  }
}

export default Overlay

