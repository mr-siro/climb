import React from 'react';
import {View, Text, Alert} from 'react-native';
import {Button} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import {AppRoute} from '@navigator';
import {CONSTANT} from '@config';
import {useDispatch, useSelector} from 'react-redux';

export const MyWorkScreen = () => {
  const navigation = useNavigation();

  const logOut = () => {
    AsyncStorage.setItem(CONSTANT.USER_STORAGE_KEY, '')
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

  const profile = useSelector((state: any) => state.user.profile);

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View style={{justifyContent:'center', alignItems:'center', flexGrow:2}}>
        <Text>{profile}</Text>
      </View>

      <View style={{alignItems: 'center',flexGrow:3, flex:1}}>
        <Button
          buttonStyle={{width: 300}}
          onPress={() => handlerLogout()}
          title={'Logout'}
        />
      </View>
    </View>
  );
};
