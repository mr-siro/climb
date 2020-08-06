import React from 'react';
import {View, Text, Alert} from 'react-native';
import {Button} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import {AppRoute} from '@navigator';
import {CONSTANT} from '@config';
import {useDispatch, useSelector} from 'react-redux';
import {connect} from 'react-redux';
import {UserActions} from '../../../../controllers/actions';

export const MyWork = () => {
  
  const profile = useSelector((state: any) => state.user.profile);
  const times = useSelector((state: any) => state.user.counter);
  const dispatch = useDispatch();

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

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View
        style={{justifyContent: 'center', alignItems: 'center', flexGrow: 2}}>
        <Text>{profile}</Text>
      </View>

      <View style={{alignItems: 'center', flexGrow: 3, flex: 1}}>
        <Button
          buttonStyle={{width: 300}}
          onPress={() => handlerLogout()}
          title={'Logout'}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          flexGrow: 1,
        }}>
        <Button
          onPress={() => dispatch(UserActions.decrementCount(1))}
          title={'-'}
        />
        <Button
          onPress={() => dispatch(UserActions.incrementCount(1))}
          title={'+'}
        />
      </View>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 20,
          justifyContent: 'center',
          alignSelf: 'center',
          width: 100,
          height: 100,
        }}>
        <Text style={{fontSize: 24, textAlign: 'center'}}>{times}</Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state:any) => {
  return {
      times: state.counter ? state.counter : 0
  }
};

const mapDispatchToProps = (dispatch:any) => {
  return {
      onDecrement: (count:number) => {
          dispatch(UserActions.decrementCount(count));
      },
      onIncrement: (count:number) => {
          dispatch(UserActions.incrementCount(count));
      }
  };
}

export const MyWorkScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyWork);