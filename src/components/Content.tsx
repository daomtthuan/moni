import { Button, Text, useColorMode, VStack } from 'native-base';
import { FunctionComponent, PropsWithoutRef } from 'react';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** AppRoot props. */
export type ContentProps = PropsWithoutRef<{}>;

/** AppRoot component. */
export type ContentComponent = FunctionComponent<ContentProps>;

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Component
// --------------------------------------------------------------------------------

export const Content: ContentComponent = function () {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack flex={1} alignItems={'center'} justifyContent={'center'}>
      <Text>Theme Mode: {colorMode}</Text>
      <Button onPress={() => toggleColorMode()}>Toggle Theme</Button>
    </VStack>
  );
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
