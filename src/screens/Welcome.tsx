import { Text, VStack } from 'native-base';
import { FunctionComponent, PropsWithoutRef } from 'react';
import { useBackgroundColor, useTextColor } from '~hooks/theme';
import { GuestScreenProps } from '~routers/Guest';

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

/** WelcomeScreen component. */
export const WelcomeScreen: WelcomeScreenComponent = function () {
  const textColor = useTextColor();
  const backgroundColor = useBackgroundColor();

  return (
    <VStack flex={1} direction="column-reverse" reversed>
      <VStack backgroundColor={backgroundColor} borderTopRadius="3xl" padding={4}>
        <Text color={textColor}>Welcome screen</Text>
      </VStack>
    </VStack>
  );
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
