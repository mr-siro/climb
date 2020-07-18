import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {styles} from './SignUpStyles';
import {Button} from 'react-native-elements';

import {MyInput, FooterComponent} from '@components';
import {Metrics} from '@shared';
import {AppRoute, AuthNavigatorParams} from '@navigator';
import {StackNavigationProp} from '@react-navigation/stack';

export interface SignUpProps {
  navigation: StackNavigationProp<AuthNavigatorParams, AppRoute.SIGNUP>;
}

export const SignUpScreen = (props: SignUpProps) => {
  const {navigation} = props;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.headerContainer}>
          <Text style={styles.textLogo}>CLIMB</Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.inputContainer}>
            <MyInput
              placeholder={'User name'}
              iconName={'user'}
              iconType={'feather'}
            />
            <MyInput
              iconName={'envelope-o'}
              iconType={'font-awesome'}
              containerStyle={{marginTop: '10%'}}
              placeholder={'Email Address'}
            />
            <MyInput
              placeholder={'Password'}
              iconName={'lock'}
              containerStyle={{marginTop: '10%'}}
            />
            <MyInput
              placeholder={'Confirm Password'}
              iconName={'lock'}
              containerStyle={{marginTop: '10%'}}
            />
          </View>
          <View>
            <Button
              buttonStyle={styles.signInBtn}
              containerStyle={styles.signInBtnContainer}
              title={'Next'}
              onPress={() => {}}
            />
          </View>
        </View>
        <View style={styles.footerContainer}>
          <FooterComponent
            onFbPress={() => {}}
            onGgPress={() => {}}
            onAuthPress={() => navigation.navigate(AppRoute.SIGNIN)}
            authTitle={'Sign in'}
            contentStyle={{flexDirection: 'row-reverse'}}
            authBtnContainer={{
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
            }}
            socialContainer={{paddingLeft: Metrics.spacing.large}}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
