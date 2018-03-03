import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';
import Header from './components/Header';


type Props = {};
export default class App extends Component<Props> {
  componentWillMount() {
    firebase.initializeApp({
        apiKey: "AIzaSyC6gHEyMG66QpmHoL-4MAYjeBaxvBqAzf8",
        authDomain: "auth-33020.firebaseapp.com",
        databaseURL: "https://auth-33020.firebaseio.com",
        projectId: "auth-33020",
        storageBucket: "auth-33020.appspot.com",
        messagingSenderId: "404829938140"
      })
  }
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Authentication'} />
        <Text>
          yey
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },
});
