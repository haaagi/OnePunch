import * as React from 'react';
import {useState} from 'react';
import {Component} from 'react';  
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import {  createAppContainer } from "react-navigation";


import DetailScreen from './src/DetailScreen';
import HomeScreen from './src/HomeScreen';
import ResultScreen from './src/ResultScreen';
import SQLite from 'react-native-sqlite-storage';



export default class App extends Component {
  render() {
    return (
       <AppContainer />
    )
  }
}
const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Result: {
    screen: ResultScreen
  }
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

