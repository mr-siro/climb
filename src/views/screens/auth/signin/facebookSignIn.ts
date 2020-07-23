import {Platform, ToastAndroid, Alert} from 'react-native'
import {LoginManager, AccessToken} from 'react-native-fbsdk';

export const signInByFacebook = async (callback: Function) => {
  const result = await LoginManager.logInWithPermissions(["public_profile", "email"]);
  if (result.isCancelled) {
    if (Platform.OS === 'android') {
      ToastAndroid.show('Cancel request', ToastAndroid.SHORT);
    } else {
      Alert.alert('Cancel request');
    }
    return;
  }
  const data = await AccessToken.getCurrentAccessToken();
  if (data) {
    const accessToken = data.accessToken.toString();
    callback(accessToken);
  } else {
    Alert.alert('Something went wrong!');
    return;
  }
}