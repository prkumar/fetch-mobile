# Fetch


**TODO:** Add app description

## Building

### Facebook SDK

Building the Facebook SDK requires the following steps:

1. Install and link the Facebook SDK for React Native packages and dependencies.

    ```
    react-native install react-native-fbsdk
    react-native link react-native-fbsdk
    ```

2. Install the plist package, the xcode package, and the adm-zip package, by executing the following command.

    ```
    npm install plist xcode adm-zip
    ```
    
3. Run the script ios_setup.js by executing the following command:

    ```
    node ios_setup.js [App ID] Fetch
    ```
    
    Locate the project’s `App ID` on [the Facebook Developer site](https://developers.facebook.com/apps/).
    
    **NOTE:** executing this script may take a while, as it involves downloading a ~50MB zip file.  