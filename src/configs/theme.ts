import { ColorMode, INativebaseConfig, theme, Theme } from 'native-base';
import { ColorType } from 'native-base/lib/typescript/components/types';
import LinearGradient from 'react-native-linear-gradient';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** Theme color mode. */
export type ThemeColorMode = NonNullable<ColorMode>;

/** ThemeProvider variables. */
export type ThemeVariables = Theme | (Record<string, any> & {});

/** Color config. */
export type ColorConfig = {
  light: ColorType;
  dark: ColorType;
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Configs
// --------------------------------------------------------------------------------

/** Default theme mode. */
export const defaultThemeMode: ThemeColorMode = 'light';

/** Theme Configs. */
export const themeConfigs: INativebaseConfig = {
  dependencies: {
    'linear-gradient': LinearGradient,
  },
};

/** Theme variables. */
export const themeVariables: ThemeVariables = {
  config: {
    initialColorMode: defaultThemeMode,
  },
  colors: {
    primary: theme.colors.violet,
    danger: theme.colors.rose,
    success: theme.colors.emerald,
    warning: theme.colors.amber,
    secondary: theme.colors.yellow,
    light: {
      50: '#1d1126',
      100: '#2d1f38',
      200: '#463752',
      300: '#594c63',
      400: '#776b80',
      500: '#a89db0',
      600: '#d7d0db',
      700: '#ebe4e4',
      800: '#f4f2f5',
      900: '#f9f7fa',
    },
    dark: {
      50: '#f9f7fa',
      100: '#f4f2f5',
      200: '#ebe4e4',
      300: '#d7d0db',
      400: '#a89db0',
      500: '#776b80',
      600: '#594c63',
      700: '#463752',
      800: '#2d1f38',
      900: '#1d1126',
    },
  },
};

/** Text color. */
export const textColor: ColorConfig = {
  light: 'dark.900',
  dark: 'light.900',
};

/** Background color. */
export const backgroundColor: ColorConfig = {
  light: 'light.900',
  dark: 'dark.900',
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
