/////////////////////test update
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/AppNavigator'

export default class App extends React.Component {
  render() {
    return (
      <Navigator />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
