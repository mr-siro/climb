import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {styles} from './SignInStyles';
import {Button} from 'react-native-elements';

import {MyInput, FooterComponent} from '@components';

import {AppRoute, AuthNavigatorParams} from '@navigator';
import {StackNavigationProp} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import {signInByFacebook} from './facebookSignIn';

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin';

export interface SignInProps {
  navigation: StackNavigationProp<AuthNavigatorParams, AppRoute.SIGNIN>;
}
export type SocialType = 'Facebook' | 'Google';

export const SignInScreen = (props: SignInProps) => {
  const {navigation} = props;
  const [userName, setUserName] = useState('contact@abc.com'),
    [passWord, setPassWord] = useState('ABC@123');

    useEffect(() => {
      // GoogleSignin.configure({
      //   webClientId: "446080231387-55lng9brne3kkeaja9dglmkrld2hlato.apps.googleusercontent.com",
      //   offlineAccess: true
      // });
  
      GoogleSignin.configure({
        // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
        webClientId: "446080231387-55lng9brne3kkeaja9dglmkrld2hlato.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
        offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        // hostedDomain: '', // specifies a hosted domain restriction
        // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
        // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
        // accountName: '', // [Android] specifies an account name on the device that should be used
         //iosClientId: '446080231387-lm99obr8tra6o2e9jsg55el73a9tvjit.apps.googleusercontent.com', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      });
    },[]);

   const signInGG = async () => {
      try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        // this.setState({ userInfo });
        // console.log(userInfo.idToken);
        // if(userInfo.idToken) {
        //   navigation.navigate(AppRoute.HOME);
        // }

        AsyncStorage.setItem('@ggToken', userInfo.idToken).then(() => {
          console.log(userInfo.idToken);
          navigation.navigate(AppRoute.HOME);
        }).catch(() => {
          Alert.alert('', 'Error');
        })
      } catch (error) {
        console.log({error})
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
          // operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
        } else {
          // some other error happened
        }
      }
    };

    const signInFB = async () => {
      await signInByFacebook((accessToken: string) => {
        // console.log('asscessToken:',accessToken)
        AsyncStorage.setItem('@fbToken', accessToken).then(() => {
        
          navigation.navigate(AppRoute.HOME);
        }).catch(() => {
          Alert.alert('', 'Error');
        })
        navigation.navigate(AppRoute.HOME)
      });
    }
  const validForm = () => {
    if (userName !== 'contact@abc.com') {
      Alert.alert('', 'UserName not match');
      return false;
    }
    if (passWord !== 'ABC@123') {
      Alert.alert('', 'Password not match');
      return false;
    }
    AsyncStorage.setItem('@userName', userName).then(() => {
      navigation.navigate(AppRoute.HOME);
    }).catch(() => {
      Alert.alert('', 'Error');
    })
    return true;
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.headerContainer}>
          <Text style={styles.textLogo}>CLIMB</Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.inputContainer}>
            <MyInput
              iconName={'user'}
              iconType={'feather'}
              value={userName}
              onChangeText={(text) => setUserName(text)}
              placeholder={'User name'}
            />

            <MyInput
              iconName={'lock'}
              value={passWord}
              onChangeText={(text) => setPassWord(text)}
              containerStyle={{marginTop: '10%'}}
              placeholder={'Password'}
              secureTextEntry={true}
            />
          </View>
          <View>
            <Button
              buttonStyle={styles.signInBtn}
              containerStyle={styles.signInBtnContainer}
              title={'Sign in'}
              onPress={() => validForm()}
            />
            <Text style={styles.forgetPwd}>Forget password?</Text>
          </View>
        </View>
        <View style={styles.footerContainer}>
          
          <FooterComponent
            onFbPress={() => signInFB()}
            onGgPress={() => signInGG()}
            onAuthPress={() => navigation.navigate(AppRoute.SIGNUP)}
            authTitle={'Sign up'}
            authBtnContainer={{
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
