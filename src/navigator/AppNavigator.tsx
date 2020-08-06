import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabsNavigator} from './BottomTabNavigator';
import {AppRoute} from './AppRoute';
import {
  HomeNavigatorParams,
  MyWorkNavigatorParams,
  MessageNavigatorParams,
  ProfileNavigatorParams,
  NewScreenNavigatorParams
} from './AppParamList';
import {AuthNavigator} from './AuthNavigator';
import {LoadingScreen,DetailNewScreen} from '@screens';

type StackNavigatorProps = React.ComponentProps<typeof RootStack.Navigator>;
export type AppNavigatorParams = {
  [AppRoute.MAINSTACK]:undefined;
  [AppRoute.AUTH]: undefined;
  [AppRoute.HOME]: undefined;
  [AppRoute.DETAILNEWDAIL]:{
    id:number;
    title:string;
    imageUrl:string;
    short:string;
  };
} & HomeNavigatorParams &
  MyWorkNavigatorParams &
  MessageNavigatorParams &
  ProfileNavigatorParams &
  NewScreenNavigatorParams;

const RootStack = createStackNavigator<AppNavigatorParams>();
const MainStack = createStackNavigator();

const MainNavigator = (): React.ReactElement => {
  return (
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen name={AppRoute.LOADING} component={LoadingScreen} />
      
    </MainStack.Navigator>
  );
};

export const AppNavigator = (
  props: Partial<StackNavigatorProps>,
): React.ReactElement => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={AppRoute.MAINSTACK}
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled:false
        }}
        {...props}
        headerMode="none">
        <RootStack.Screen name={AppRoute.MAINSTACK} component={MainNavigator} />
        <RootStack.Screen name={AppRoute.AUTH} component={AuthNavigator} />
        <RootStack.Screen
          name={AppRoute.HOME}
          component={BottomTabsNavigator}
        />
        <MainStack.Screen name={AppRoute.DETAILNEWDAIL} component={DetailNewScreen}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
