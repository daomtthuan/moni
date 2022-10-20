import { NativeBaseProvider } from 'native-base';
import { FunctionComponent, PropsWithChildren, PropsWithoutRef } from 'react';

import { ThemeConfigurer } from '../hooks/theme';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** ThemeProvider props. */
export type ThemeProviderProps = PropsWithoutRef<
  PropsWithChildren<{
    /** Theme configurer. */
    configurer: ThemeConfigurer;
  }>
>;

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
 * @param props Theme provider props.
 *
 * @returns The Theme provider container component.
 */
export const ThemeProvider: ThemeProviderComponent = function (props) {
  return (
    <NativeBaseProvider config={props.configurer.configs} theme={props.configurer.variables} colorModeManager={props.configurer.modeManager} isSSR>
      {props.children}
    </NativeBaseProvider>
  );
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
