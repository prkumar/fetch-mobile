'use strict'
import React, { Component } from 'react';
import { View } from 'react-native';
import Backend from './lib/Backend';

const FBSDK = require('react-native-fbsdk');
const {
    LoginButton,
    AccessToken
} = FBSDK;

export default class FacebookLoginButton extends Component {
    render() {
        return (
        <View>
        <LoginButton
            readPermissions={["email", "public_profile"]}
            onLoginFinished={
                (error, result) => {
                    if (error) {
                        alert("Login has error: " + result.error);
                    } else if (result.isCancelled) {
                        alert("Login is cancelled.");
                    } else {
                        AccessToken.getCurrentAccessToken().then(
                            (data) => {
                                Backend.signInWithFacebook(data.userID, data.accessToken).then(() => this.props.onLoginFinished());
                            }
                        )
                    }
                }
            }
            onLogoutFinished={() => Backend.signOut()}/>
        </View>
        );
    }
};