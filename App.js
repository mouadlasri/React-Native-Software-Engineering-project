import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationStack from './Navigation/NavigationStack.js';
import NavigationTab from './NavigationTab.js';
import { createStackNavigator } from 'react-navigation';

export default class App extends React.Component {
  
  render() {
    return ( 
      <NavigationStack />
    );
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
