import { View, Text, Alert, StyleSheet } from 'react-native'
import React from 'react'
import SystemSetting from 'react-native-system-setting';
import RNExitApp from 'react-native-exit-app';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const App = () => {
  run()
  function run() {
    console.log("hello there");
    
    SystemSetting.setBrightnessForce(1).then(success => {
      !success &&
        Alert.alert(
          'Permission Deny',
          'You have no permission to change settings',
          [
            { text: 'Ok', style: 'cancel' },
            {
              text: 'Open Setting',
              onPress: () => SystemSetting.grantWriteSettingPermission(), // Fixed typo in method name
            },
          ],
        );
      if (success) {
        ReactNativeHapticFeedback.trigger('soft');
        RNExitApp.exitApp();
      }
    });
  }

  return (
    <View style={styles.container}>
        <Text style={styles.text}> Brightness is setting to maximum </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {
    fontSize: 20,
    color: '#fff',
  }
});

export default App;