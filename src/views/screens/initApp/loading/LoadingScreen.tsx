import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AppRoute} from '@navigator';
import AsyncStorage from '@react-native-community/async-storage';
export const LoadingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    checkToNavigate();
  }, []);
  const checkToNavigate = async () => {
    (await isLogin()) ? homeNavigate() : authNavigate();
  };
  const homeNavigate = () => {
    console.log('homeNavigate');
    navigation.navigate(AppRoute.HOME);
  };

  const authNavigate = () => {
    navigation.navigate(AppRoute.AUTH);
  };

  const isLogin = async () => {
    //Get id from storage. neu co return true nguoc lai returm false
    const value = await AsyncStorage.getItem('@userName');
    console.log('value', value);
    if (value) {
      return true;
    }
    return false;
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};
