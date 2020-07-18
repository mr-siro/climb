import React, {useState} from 'react';
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

export interface SignInProps {
  navigation: StackNavigationProp<AuthNavigatorParams, AppRoute.SIGNIN>;
}

export const SignInScreen = (props: SignInProps) => {
  const {navigation} = props;
  const [userName, setUserName] = useState(''),
    [passWord, setPassWord] = useState('');

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
            onFbPress={() => {}}
            onGgPress={() => {}}
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
