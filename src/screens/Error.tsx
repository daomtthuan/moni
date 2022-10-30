import { Text, VStack } from 'native-base';
import { FunctionComponent, PropsWithoutRef } from 'react';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** ErrorScreen props. */
export type ErrorScreenProps = PropsWithoutRef<{}>;

/** ErrorScreen component. */
export type ErrorScreenComponent = FunctionComponent<ErrorScreenProps>;

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Component
// --------------------------------------------------------------------------------

/**
 * ErrorScreen component.
 *
 * @returns The Error screen component.
 */
export const ErrorScreen: ErrorScreenComponent = function () {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center">
      <Text fontSize="lg">Error</Text>
    </VStack>
  );
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
