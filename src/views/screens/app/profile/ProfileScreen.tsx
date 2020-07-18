import React from 'react';
import {View,Text,Alert} from 'react-native';
import {Button} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import {AppRoute} from '@navigator';
export const ProfileScreen =() => {
    const navigation = useNavigation();
    const handlerLogout = () => {
        AsyncStorage.setItem('@userName', '').then(() => {
            navigation.navigate(AppRoute.AUTH);
          }).catch(() => {
            Alert.alert('', 'Error');
          })
    }
    return (
        <View style={{flex:1, justifyContent:'center'}}>
            <Button onPress={() => handlerLogout()} title={'Logout'}/>
        </View>
    )
}