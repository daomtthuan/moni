import { Text, VStack } from 'native-base';
import { FunctionComponent, PropsWithoutRef } from 'react';

import { loggerConfigs } from '../configs/logger';
import { useLogger } from '../hooks/logger';
import { ThemeProvider } from './ThemeProvider';

// --------------------------------------------------------------------------------
// #region Types and Interfaces
// --------------------------------------------------------------------------------

/** AppRoot props. */
export type AppRootProps = PropsWithoutRef<{}>;

/** AppRoot component. */
export type AppRootComponent = FunctionComponent<AppRootProps>;

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region Component
// --------------------------------------------------------------------------------

export const AppRoot: AppRootComponent = function () {
  useLogger(loggerConfigs);

  return (
    <ThemeProvider>
      <VStack flex={1} alignItems={'center'} justifyContent={'center'}>
        <Text>Hello World</Text>
      </VStack>
    </ThemeProvider>
  );
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
