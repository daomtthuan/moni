import { FunctionComponent, PropsWithoutRef, useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

import { Content } from '../components/Content';
import { loggerConfigs } from '../configs/logger';
import { useLogger } from '../hooks/logger';
import { ThemeProvider } from './ThemeProvider';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** AppRoot props. */
export type AppRootProps = PropsWithoutRef<{}>;

/** AppRoot component. */
export type AppRootComponent = FunctionComponent<AppRootProps>;

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Component
// --------------------------------------------------------------------------------

export const AppRoot: AppRootComponent = function () {
  const loggerStatus = useLogger(loggerConfigs);

  useEffect(() => {
    if (loggerStatus) {
      SplashScreen.hide();
    }
  }, [loggerStatus]);

  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
