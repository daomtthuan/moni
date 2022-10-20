import { FunctionComponent, PropsWithoutRef } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ResetPasswordScreen } from '../screens/ResetPassword';
import { SignInScreen } from '../screens/SignIn';
import { SignUpScreen } from '../screens/SignUp';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** Navigation props. */
export type NavigationProps = PropsWithoutRef<{}>;

/** Navigation component. */
export type NavigationComponent = FunctionComponent<NavigationProps>;

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Component
// --------------------------------------------------------------------------------

/**
 * Navigation component.
 *
 * @returns The App navigation container component.
 */
export const Navigation: NavigationComponent = function () {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
