import { FunctionComponent, PropsWithoutRef, useMemo } from 'react';
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

/**
 * GuestRouter component.
 *
 * @returns The Guest router component.
 */
export const GuestRouter: GuestRouterComponent = function () {
  const { Navigator, Screen } = useMemo(createStackNavigator<GuestRouterParamList>, []);

  return (
    <Navigator initialRouteName="Welcome">
      <Screen name="Welcome" component={WelcomeScreen} />
      <Screen name="SignIn" component={SignInScreen} />
      <Screen name="SignUp" component={SignUpScreen} />
      <Screen name="ResetPassword" component={ResetPasswordScreen} />
    </Navigator>
  );
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
