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
import {bindActionCreators} from 'redux';

export interface MyWorkProps {
  incrementCount?: () => void;
  decrementCount?: () => void;
}
export const MyWork = (props: MyWorkProps) => {
  const {incrementCount, decrementCount} = props

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
  const couter = useSelector((state:any) => state.user.counter);

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
        <Button onPress={() => decrementCount()} title={'-'} />
        <Button onPress={() => incrementCount()} title={'+'} />
      </View>
      <Text style={{textAlign:'center', fontSize:24, paddingBottom:20}}>{couter}</Text>
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  counter: state.user.counter,
});

const mapDispatchToProps = (dispatch: Function) => ({
  decrementCount: () => {
    dispatch(UserActions.decrementCount());
  },
  incrementCount: () => {
    dispatch(UserActions.incrementCount());
  },
});

export const MyWorkScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyWork);
