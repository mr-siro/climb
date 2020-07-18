import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthNavigatorParams } from './AppParamList';
import { AppRoute } from './AppRoute';

import {SignInScreen,SignUpScreen} from '@screens';

const AuthStack = createStackNavigator<AuthNavigatorParams>();

export const AuthNavigator = (): React.ReactElement => (
    <AuthStack.Navigator headerMode='none'>
        <AuthStack.Screen name={AppRoute.SIGNIN} component={SignInScreen} />
        <AuthStack.Screen name={AppRoute.SIGNUP} component={SignUpScreen} />
        
    </AuthStack.Navigator>
);