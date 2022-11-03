import { FunctionComponent, PropsWithoutRef, useEffect, useMemo } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { hookStatusChecker } from '~common/status';
import { Navigation } from '~containers/Navigation';
import { ThemeProvider } from '~containers/Theme';
import { useI18n } from '~hooks/i18n';
import { useLogger } from '~hooks/logger';
import { ErrorScreen } from '~screens/Error';
import { LoadingScreen } from '~screens/Loading';

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

/** App component. */
export const App: AppComponent = function () {
  const loggerStatus = useLogger();
  const i18nStatus = useI18n();

  const isReady = useMemo(() => hookStatusChecker.isReady(loggerStatus, i18nStatus), [loggerStatus, i18nStatus]);

  const isFailed = useMemo(() => hookStatusChecker.isFailed(loggerStatus, i18nStatus), [loggerStatus, i18nStatus]);

  useEffect(() => {
    if (isReady) {
      SplashScreen.hide();
    }
  }, [isReady]);

  if (!isReady) {
    return <LoadingScreen />;
  }

  if (isFailed) {
    return <ErrorScreen />;
  }

  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
