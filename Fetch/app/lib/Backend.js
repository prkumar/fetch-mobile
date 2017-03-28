/*
TODO: Install Facebook API
TODO: Implement set methods for basic user information
TODO: Implement method to add Tasks
TODO: Implement method to get Tasks within an area
TODO: Settle on the structure for the data (see Firebase post about this)
 */
'use strict';

import * as firebase from "firebase"
const geofire = require('geofire');


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAkmoNCcRV8cw-ofH2UbaGHAmWJj2b1JLs",
    authDomain: "fetch-f7f06.firebaseapp.com",
    databaseURL: "https://fetch-f7f06.firebaseio.com",
    storageBucket: "fetch-f7f06.appspot.com",
    messagingSenderId: "677989998969"
});

// const geofireRef = new geofire(firebaseApp.database().ref());


function isUserEqual(facebookUserID, firebaseUser) {
    if (firebaseUser) {
        var providerData = firebaseUser.providerData;
        let PROVIDER_ID = firebase.auth.FacebookAuthProvider.PROVIDER_ID;
        for (var i = 0; i < providerData.length; i++) {
            if (providerData[i].providerId === PROVIDER_ID
                && providerData[i].uid === facebookUserID) {
                // We don't need to re-auth the Firebase connection.
                return true;
            }
        }
    }
    return false
}


export default class Backend {
    static onAuthStateChanged(listener) {
        firebaseApp.auth().onAuthStateChanged(function(user) {
            if (user) {
                // User is signed in.
                return listener(user);
            } else {
                // No user is signed in.
                return null;
            }
        })
    }

    // TODO: Throw custom error when signInWithCredential fails.
    // https://firebase.google.com/docs/auth/web/facebook-login
    static async signInWithFacebook(userID, access_token) {
        if (userID && access_token) {
            var unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
                unsubscribe();
                if (!isUserEqual(userID, user)) {
                    return firebase.auth().signInWithCredential(
                        firebase.auth.FacebookAuthProvider.credential(access_token)
                    );
                }
            });
        } else {
            firebase.auth().signOut();
        }
    }

    static async signOut() {
        return firebase.auth().signOut();
    }
}
