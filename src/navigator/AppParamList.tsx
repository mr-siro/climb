import {AppNavigatorParams} from './AppNavigator';
import {AppRoute} from './AppRoute';

export type AuthNavigatorParams = AppNavigatorParams & {
    [AppRoute.SIGNIN]: undefined;
    [AppRoute.SIGNUP]: undefined;
}

export type BottomTabsNavigatorParams = {
  [AppRoute.HOME]: undefined;
  [AppRoute.MYWORK]: undefined;
  [AppRoute.MESSAGE]: undefined;
  [AppRoute.PROFILE]: undefined;
  [AppRoute.NEWSCREEN]: undefined;
};

export type HomeNavigatorParams = {
  [AppRoute.HOME]: undefined;
};

export type MyWorkNavigatorParams = {
  [AppRoute.MYWORK]: undefined;
};

export type MessageNavigatorParams = {
  [AppRoute.MESSAGE]: undefined;
};

export type ProfileNavigatorParams = {
  [AppRoute.PROFILE]: undefined;
};

export type NewScreenNavigatorParams = {
  [AppRoute.NEWSCREEN]: undefined;
  
};