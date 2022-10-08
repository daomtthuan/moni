import { NativeBaseProvider } from 'native-base';
import { FunctionComponent, PropsWithChildren, PropsWithoutRef } from 'react';

import { defaultThemeMode, themeConfigs, themeVariables } from '../configs/theme';
import { useThemeConfigurer, useThemeModeManager, useThemeVariables } from '../hooks/theme';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** ThemeProvider props. */
export type ThemeProviderProps = PropsWithoutRef<PropsWithChildren<{}>>;

/** ThemeProvider component. */
export type ThemeProviderComponent = FunctionComponent<ThemeProviderProps>;

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Component
// --------------------------------------------------------------------------------

/**
 * ThemeProvider component.
 *
 * @param [props] ThemeProvider props.
 *
 * @returns ThemeProvider component JSX.
 */
export const ThemeProvider: ThemeProviderComponent = function (props) {
  const configs = useThemeConfigurer(themeConfigs);
  const variables = useThemeVariables(themeVariables);
  const themeModeManager = useThemeModeManager(defaultThemeMode);

  return (
    <NativeBaseProvider config={configs} theme={variables} colorModeManager={themeModeManager} isSSR>
      {props.children}
    </NativeBaseProvider>
  );
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
