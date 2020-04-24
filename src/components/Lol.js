import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Animation from 'lottie-react-native';
import ani from '../animations/loading.json'

export default class Lottieloader extends Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
          <Animation
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: 80,
              height: 80
            }}
            loop={true}
            source={ani}
          />
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A6207E'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  }
});
