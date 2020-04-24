import React from 'react';
import LottieView from 'react-native-lottie-loader';
import loader from '../animations/loading.json';



export default class Loader extends React.Component {
  render() {
    return <LottieView source={loader} autoPlay loop />;
  }
}