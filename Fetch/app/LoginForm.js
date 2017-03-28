/**
 * Created by AnilJethani on 3/27/17.
 */
import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';


export default class LoginForm extends Component {
    render() {
      return (
        <View style={styles.container}>
          <TextInput style={styles.input}
            placeholder={'username or email'}
            placeholderTextColor='rgba(255,255,255,0.7)'
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType= 'email-address'
            returnKeyType='next'
          />
          <TextInput style={styles.input}
            placeholder={'password'}
            placeholderTextColor='rgba(255,255,255,0.7)'
            secureTextEntry
            returnKeyType='go'
          />
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
                LOGIN
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
}


const styles = StyleSheet.create({
    container: {
      padding: 20
    },
    input: {
      height: 40,
      backgroundColor: 'rgba(255,255,255,0.2)',
      marginBottom: 10,
      color: '#FFF',
      paddingHorizontal: 10
    },
    buttonContainer: {
      backgroundColor: '#2980b9',
      paddingVertical: 15,
    },
    buttonText: {
      color: '#FFF',
      textAlign: 'center',
      fontWeight: '700'
    },
});
