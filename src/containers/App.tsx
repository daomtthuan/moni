import { FunctionComponent, PropsWithoutRef, useEffect, useMemo } from 'react';
import SplashScreen from 'react-native-splash-screen';

import { i18nConfigs } from '../configs/i18n';
import { loggerConfigs } from '../configs/logger';
import { defaultThemeMode, themeConfigs, themeVariables } from '../configs/theme';
import { I18nStatus, useI18n } from '../hooks/i18n';
import { LoggerStatus, useLogger } from '../hooks/logger';
import { useThemeConfigurer } from '../hooks/theme';
import { Navigation } from './Navigation';
import { ThemeProvider } from './Theme';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** App props. */
export type AppProps = PropsWithoutRef<{}>;

/** App component. */
export type AppComponent = FunctionComponent<AppProps>;

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Component
// --------------------------------------------------------------------------------

/**
 * App component.
 *
 * @returns The App root container component.
 */
export const App: AppComponent = function () {
  const loggerStatus = useLogger(loggerConfigs);
  const i18nStatus = useI18n(i18nConfigs);
  const themeConfigurer = useThemeConfigurer(themeConfigs, defaultThemeMode, themeVariables);

  const isReady = useMemo(() => {
    if (loggerStatus === LoggerStatus.NotReady) return false;
    if (i18nStatus === I18nStatus.NotReady) return false;

    return true;
  }, [loggerStatus, i18nStatus]);

  const isFailed = useMemo(() => {
    if (loggerStatus === LoggerStatus.Failed) return true;
    if (i18nStatus === I18nStatus.Failed) return true;

    return false;
  }, [loggerStatus, i18nStatus]);

  useEffect(() => {
    if (isReady) {
      SplashScreen.hide();
    }
  }, [isReady]);

  return (
    <ThemeProvider configurer={themeConfigurer}>
      <Navigation />
    </ThemeProvider>
  );
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
