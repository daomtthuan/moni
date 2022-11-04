import { NativeBaseProvider } from 'native-base';
import { FunctionComponent, PropsWithChildren, PropsWithoutRef } from 'react';
import { EmptyObject } from 'type-fest';
import { useTheme } from '~hooks/theme';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** ThemeProvider props. */
export type ThemeProviderProps = PropsWithoutRef<PropsWithChildren<EmptyObject>>;

/** ThemeProvider component. */
export type ThemeProviderComponent = FunctionComponent<ThemeProviderProps>;

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Component
// --------------------------------------------------------------------------------

/** ThemeProvider component. */
export const ThemeProvider: ThemeProviderComponent = function (props) {
  const { configs, variables, modeManager } = useTheme();

  return (
    <NativeBaseProvider config={configs} theme={variables} colorModeManager={modeManager} isSSR>
      {props.children}
    </NativeBaseProvider>
  );
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
