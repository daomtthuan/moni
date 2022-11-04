import { Button, HStack, useColorMode } from 'native-base';
import { FunctionComponent, PropsWithoutRef, useMemo } from 'react';
import { EmptyObject } from 'type-fest';
import { Background } from '~components/Background';
import { ColorModeType } from '~configs/theme';
import { useBackgroundColor, useTextColor } from '~hooks/theme';
import { ResetPasswordScreen } from '~screens/ResetPassword';
import { SignInScreen } from '~screens/SignIn';
import { SignUpScreen } from '~screens/SignUp';
import { WelcomeScreen } from '~screens/Welcome';

import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** GuestRouter props. */
export type GuestRouterProps = PropsWithoutRef<EmptyObject>;

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

  const { toggleColorMode } = useColorMode();

  const textColor = useTextColor();
  const buttonBackgroundColor = useBackgroundColor(ColorModeType.primary);

  return (
    <Background flex={1} justifyContent="space-between" overlay>
      <HStack flexDirection="row-reverse" reversed padding={4}>
        <Button onPress={toggleColorMode} backgroundColor={buttonBackgroundColor} color={textColor}>
          <FontAwesomeIcon icon={faMoon} color="red" />
        </Button>
      </HStack>
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
