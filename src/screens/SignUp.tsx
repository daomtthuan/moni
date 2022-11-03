import { Text, VStack } from 'native-base';
import { FunctionComponent, PropsWithoutRef } from 'react';
import { GuestScreenProps } from '~routers/Guest';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** SignUpScreen props. */
export type SignUpScreenProps = PropsWithoutRef<GuestScreenProps<'SignUp'>>;

/** SignUpScreen component. */
export type SignUpScreenComponent = FunctionComponent<SignUpScreenProps>;

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Component
// --------------------------------------------------------------------------------

/** SignUpScreen component. */
export const SignUpScreen: SignUpScreenComponent = function () {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center">
      <Text>Sign up screen</Text>
    </VStack>
  );
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
