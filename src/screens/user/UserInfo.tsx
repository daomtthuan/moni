import { Text, VStack } from 'native-base';
import { FunctionComponent, PropsWithoutRef } from 'react';
import { EmptyObject } from 'type-fest';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** UserInfoScreen props. */
export type UserInfoScreenProps = PropsWithoutRef<EmptyObject>;

/** UserInfoScreen component. */
export type UserInfoScreenComponent = FunctionComponent<UserInfoScreenProps>;

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Component
// --------------------------------------------------------------------------------

/** UserInfoScreen component. */
export const UserInfoScreen: UserInfoScreenComponent = function () {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center">
      <Text>User info screen</Text>
    </VStack>
  );
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
