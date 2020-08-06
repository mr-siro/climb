import React from 'react';
import {Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HomeNavigatorParams,
  MyWorkNavigatorParams,
  MessageNavigatorParams,
  ProfileNavigatorParams,
  NewScreenNavigatorParams,
} from './AppParamList';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabsNavigatorParams} from './AppParamList';
import {AppRoute} from './AppRoute';
import {Colors} from '@shared';
import {
  HomeScreen,
  MyWorkScreen,
  MessageScreen,
  ProfileScreen,
  NewScreen
} from '@screens';
import {Icon} from 'react-native-elements';
import {Images} from '@assets';

const BottomTab = createBottomTabNavigator<BottomTabsNavigatorParams>();

const HomStack = createStackNavigator<HomeNavigatorParams>();
const MyWorkStack = createStackNavigator<MyWorkNavigatorParams>();
const MessageStack = createStackNavigator<MessageNavigatorParams>();
const ProfileStack = createStackNavigator<ProfileNavigatorParams>();
const NewScreenStack = createStackNavigator<NewScreenNavigatorParams>();

export const HomeNavigator = (): React.ReactElement => {
  return (
    <HomStack.Navigator headerMode="none" initialRouteName={AppRoute.HOME}>
      <HomStack.Screen name={AppRoute.HOME} component={HomeScreen} />
    </HomStack.Navigator>
  );
};

export const MyWorkNavigator = (): React.ReactElement => {
  return (
    <MyWorkStack.Navigator headerMode="none" initialRouteName={AppRoute.MYWORK}>
      <MyWorkStack.Screen name={AppRoute.MYWORK} component={MyWorkScreen} />
    </MyWorkStack.Navigator>
  );
};

export const MessageNavigator = (): React.ReactElement => {
  return (
    <MessageStack.Navigator
      headerMode="none"
      initialRouteName={AppRoute.MESSAGE}>
      <MessageStack.Screen name={AppRoute.MESSAGE} component={MessageScreen} />
    </MessageStack.Navigator>
  );
};

export const ProfileNavigator = (): React.ReactElement => {
  return (
    <ProfileStack.Navigator
      headerMode="none"
      initialRouteName={AppRoute.PROFILE}>
      <ProfileStack.Screen name={AppRoute.PROFILE} component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
};

export const NewScreenNavigator = (): React.ReactElement => {
  return (
    <NewScreenStack.Navigator
      headerMode="none"
      initialRouteName={AppRoute.NEWSCREEN}>
      <NewScreenStack.Screen name={AppRoute.NEWSCREEN} component={NewScreen} />
    </NewScreenStack.Navigator>
  );
};

export const BottomTabsNavigator = (): React.ReactElement => {
  return (
    <React.Fragment>
      <BottomTab.Navigator
        initialRouteName={AppRoute.HOME}
        tabBarOptions={{
          activeTintColor: Colors.tabBar.Active,
        }}>
        <BottomTab.Screen
          name={AppRoute.HOME}
          component={HomeNavigator}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon
                name={'calendar'}
                size={size}
                color={color}
                type={'evilicon'}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name={AppRoute.MYWORK}
          component={MyWorkNavigator}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon
                name={'briefcase'}
                type={'simple-line-icon'}
                size={18}
                color={color}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name={AppRoute.MESSAGE}
          component={MessageNavigator}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon
                name={'commenting-o'}
                type={'font-awesome'}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name={AppRoute.PROFILE}
          component={ProfileNavigator}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name={'user'} type={'feather'} size={size} color={color} />
            ),
          }}
        />

        <BottomTab.Screen
          name={AppRoute.NEWSCREEN}
          component={NewScreenNavigator}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name={'create'} size={size} color={color} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </React.Fragment>
  );
};
