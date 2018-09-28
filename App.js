
import {Provider} from 'react-redux';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Main from './src/Main';
import reducers from './src/reducers';
import { createStore } from 'redux'



const store = createStore(reducers)


export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
     
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#33d9b2',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  },
 
});
