import { FunctionComponent, PropsWithoutRef, useMemo } from 'react';
import { Background } from '~components/Background';
import { ResetPasswordScreen } from '~screens/ResetPassword';
import { SignInScreen } from '~screens/SignIn';
import { SignUpScreen } from '~screens/SignUp';
import { WelcomeScreen } from '~screens/Welcome';

import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** GuestRouter props. */
export type GuestRouterProps = PropsWithoutRef<{}>;

/** GuestRouter component. */
export type GuestRouterComponent = FunctionComponent<GuestRouterProps>;

/** GuestRouter param list. */
export type GuestRouterParamList = {
  Welcome: undefined;
  SignIn: undefined;
  SignUp: undefined;
  ResetPassword: undefined;
};

/** GuestRoute name. */
export type GuestRouteName = keyof GuestRouterParamList;

/** GuestScreen props. */
export type GuestScreenProps<Route extends GuestRouteName> = StackScreenProps<GuestRouterParamList, Route>;

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Component
// --------------------------------------------------------------------------------

/** GuestRouter component. */
export const GuestRouter: GuestRouterComponent = function () {
  const { Navigator, Screen } = useMemo(createStackNavigator<GuestRouterParamList>, []);

  return (
    <Background flex={1} paddingTop={500} overlay>
      <Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="Welcome" component={WelcomeScreen} />
        <Screen name="SignIn" component={SignInScreen} />
        <Screen name="SignUp" component={SignUpScreen} />
        <Screen name="ResetPassword" component={ResetPasswordScreen} />
      </Navigator>
    </Background>
  );
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
