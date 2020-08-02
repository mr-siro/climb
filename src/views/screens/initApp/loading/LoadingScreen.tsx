import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AppRoute} from '@navigator';
import {connect} from 'react-redux';
import {UserActions} from '../../../../controllers/actions';

export interface LoadingScreenProps {
  getUserInfo?: () => Promise<any>;
  profile?: any;
}

export const Loading: React.FunctionComponent<LoadingScreenProps> = (
  props: LoadingScreenProps,
) => {
  const navigation = useNavigation()
  const {getUserInfo} = props;
  useEffect(() => {
    isUserLogin();
  }, []);
  const isUserLogin = () => {
    getUserInfo &&
      getUserInfo()
        .then(() => {
          navigateToHome();
        })
        .catch(() => {
          navigateToLogin();
        });
  };
  const navigateToHome = () => {
    navigation.navigate(AppRoute.HOME);
  };
  const navigateToLogin = () => {
    navigation.navigate(AppRoute.AUTH);
  };
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  profile: state.user.profile,
});

const mapDispatchToProps = (dispatch: Function) => ({
  getUserInfo: () =>
    new Promise((resolve: (user: any) => void, reject) => {
      dispatch(UserActions.getUserInfo(resolve, reject));
    }),
});

export const LoadingScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Loading);
