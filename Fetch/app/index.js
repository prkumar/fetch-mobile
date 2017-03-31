import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView
} from 'react-native';
import LoginForm from './LoginForm';
import FacebookLoginButton from './FacebookLoginButton'


export default class Fetch extends Component {

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo}
              source={require('../images/gl-5-triton.png')}
            />
            <Text style={styles.textImage}>
              An app made for UCSD using React Native
            </Text>
          </View>
          <View>
              <View>
                  <FacebookLoginButton readPermissions={["public_profile", "email"]} onLoginFinished={() => alert("Login successful!")}/>
                  <Text style={styles.textImage}>
                      or
                  </Text>
              </View>
            <LoginForm />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3498db'
    },
    logo: {
      width: 100,
      height: 100,
    },
    logoContainer: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textImage: {
      color: '#FFF',
      // marginTop: 10,
      // width: 160,
      textAlign: 'center',
      opacity: 0.8
    },
});

AppRegistry.registerComponent('Fetch', () => Fetch);
