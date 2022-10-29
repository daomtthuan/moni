import { Text, VStack } from 'native-base';
import { FunctionComponent, PropsWithoutRef } from 'react';
import { GuestScreenProps } from '~routers/Guest';

import { PEXELS_API_KEY } from '@env';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** WelcomeScreen props. */
export type WelcomeScreenProps = PropsWithoutRef<GuestScreenProps<'Welcome'>>;

/** WelcomeScreen component. */
export type WelcomeScreenComponent = FunctionComponent<WelcomeScreenProps>;

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Component
// --------------------------------------------------------------------------------

/**
 * WelcomeScreen component.
 *
 * @returns The Welcome screen component.
 */
export const WelcomeScreen: WelcomeScreenComponent = function () {
  return (
    <VStack flex={1} alignItems={'center'} justifyContent={'center'}>
      <Text>{PEXELS_API_KEY}</Text>
    </VStack>
  );
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
