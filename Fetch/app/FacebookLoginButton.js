'use strict'
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Backend from './lib/Backend';

const FBSDK = require('react-native-fbsdk');
const {
    LoginManager,
    AccessToken
} = FBSDK;

export default class FacebookLoginButton extends Component {

    onPress(readPermissions, onLoginFinished) {
        LoginManager.logOut();
        LoginManager.logInWithReadPermissions(readPermissions).then(
            function(result) {
                if (result.isCancelled) {
                    alert('Login cancelled');
                } else {
                    AccessToken.getCurrentAccessToken().then(
                        (data) => {
                            Backend.signInWithFacebook(data.userID, data.accessToken).then(() => onLoginFinished());
                        }
                    )
                }
            },
            function(error) {
                alert('Login fail with error: ' + error);
            }
        );
    }


    render() {
        return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => this.onPress(this.props.readPermissions, this.props.onLoginFinished)}>
                <Text style={styles.buttonText}>
                    LOG IN WITH FACEBOOK
                </Text>
            </TouchableOpacity>
        </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    buttonContainer: {
        borderRadius: 25,
        backgroundColor: '#3b5998',
        paddingVertical: 15,
    },
    buttonText: {
        color: '#FFF',
        backgroundColor: 'rgba(0,0,0,0)',
        textAlign: 'center',
        fontWeight: '700'
    },
});