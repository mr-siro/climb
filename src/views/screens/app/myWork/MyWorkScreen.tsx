import React from 'react';
import {View, Text, Alert} from 'react-native';
import {Button} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import {AppRoute} from '@navigator';

export const MyWorkScreen = () => {
  const navigation = useNavigation();

  const logOut = () => {
    AsyncStorage.setItem('@userName', '')
      .then(() => {
        navigation.navigate(AppRoute.AUTH);
      })
      .catch(() => {
        Alert.alert('', 'Error');
      });

    AsyncStorage.setItem('@ggToken', '')
      .then(() => {
        navigation.navigate(AppRoute.AUTH);
      })
      .catch(() => {
        Alert.alert('', 'Error');
      });

    AsyncStorage.setItem('@fbToken', '')
      .then(() => {
        navigation.navigate(AppRoute.AUTH);
      })
      .catch(() => {
        Alert.alert('', 'Error');
      });
  };

  const handlerLogout = () => {
    Alert.alert(
      'Are you sure logout?',
      '',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => logOut()},
      ],
      {cancelable: false},
    );
  };
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Button onPress={() => handlerLogout()} title={'Logout'} />
    </View>
  );
};
