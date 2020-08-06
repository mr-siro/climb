import {StackNavigationProp} from '@react-navigation/stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';
import {AppRoute} from './AppRoute';
import {
  AuthNavigatorParams,
  BottomTabsNavigatorParams,
  HomeNavigatorParams,
  MyWorkNavigatorParams,
  MessageNavigatorParams,
  ProfileNavigatorParams,
  NewScreenNavigatorParams
} from './AppParamList';
import {AppNavigatorParams} from './AppNavigator';

// Authenticate
export interface SignInScreenProps {
  navigation: StackNavigationProp<AuthNavigatorParams, AppRoute.SIGNIN>;
  route: RouteProp<AuthNavigatorParams, AppRoute.SIGNIN>;
}

export interface SignUpScreenProps {
  navigation: StackNavigationProp<AuthNavigatorParams, AppRoute.SIGNUP>;
  route: RouteProp<AuthNavigatorParams, AppRoute.SIGNUP>;
}

// BottomTabs
export type HomeTabNavigationProp = BottomTabNavigationProp<
  BottomTabsNavigatorParams,
  AppRoute.HOME
>;
export type MyWorkTabNavigationProp = BottomTabNavigationProp<
  BottomTabsNavigatorParams,
  AppRoute.MYWORK
>;
export type MessageTabNavigationProp = BottomTabNavigationProp<
  BottomTabsNavigatorParams,
  AppRoute.MESSAGE
>;
export type ProfileTabNavigationProp = BottomTabNavigationProp<
  BottomTabsNavigatorParams,
  AppRoute.PROFILE
>;

export type NewScreenNavigationProp = BottomTabNavigationProp<
  BottomTabsNavigatorParams,
  AppRoute.NEWSCREEN
>;

export interface DetailNewScreenProps {
  navigation: StackNavigationProp<AppNavigatorParams, AppRoute.DETAILNEWDAIL>;
  route: RouteProp<AppNavigatorParams, AppRoute.DETAILNEWDAIL>;
}