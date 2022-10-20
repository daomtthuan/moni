import { Text, VStack } from 'native-base';
import { FunctionComponent, PropsWithoutRef } from 'react';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** ResetPasswordScreen props. */
export type ResetPasswordScreenProps = PropsWithoutRef<{}>;

/** ResetPasswordScreen component. */
export type ResetPasswordScreenComponent = FunctionComponent<ResetPasswordScreenProps>;

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Component
// --------------------------------------------------------------------------------

/**
 * ResetPasswordScreen component.
 *
 * @returns The Reset password screen component.
 */
export const ResetPasswordScreen: ResetPasswordScreenComponent = function () {
  return (
    <VStack flex={1} alignItems={'center'} justifyContent={'center'}>
      <Text>Reset password screen</Text>
    </VStack>
  );
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------