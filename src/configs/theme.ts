import { ColorMode, INativebaseConfig, theme, Theme } from 'native-base';
import { ColorType } from 'native-base/lib/typescript/components/types';
import LinearGradient from 'react-native-linear-gradient';
import { PartialDeep } from 'type-fest';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** Theme color mode. */
export type ThemeColorMode = NonNullable<ColorMode>;

/** ThemeProvider variables. */
export type ThemeVariables = PartialDeep<Theme> | Record<string, unknown>;

/** Color config. */
export type ColorConfig = {
  light: ColorType;
  dark: ColorType;
};

/** Theme mode color configs. */
export type ThemeModeColorConfigs = {
  [key: string]: ColorConfig;
};

/** Color mode type. */
export enum ColorModeType {
  primary,
  secondary,
  success,
  warning,
  danger,
  info,
  light,
  dark,
  muted,
  white,
  default,
}

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

  fontConfig: {
    Nunito: {
      100: {
        normal: 'Nunito-ExtraLight',
        italic: 'Nunito-ExtraLightItalic',
      },
      200: {
        normal: 'Nunito-Light',
        italic: 'Nunito-LightItalic',
      },
      300: {
        normal: 'Nunito-Light',
        italic: 'Nunito-LightItalic',
      },
      400: {
        normal: 'Nunito-Regular',
        italic: 'Nunito-Italic',
      },
      500: {
        normal: 'Nunito-Medium',
        italic: 'Nunito-MediumItalic',
      },
      600: {
        normal: 'Nunito-SemiBold',
        italic: 'Nunito-SemiBoldItalic',
      },
      700: {
        normal: 'Nunito-Bold',
        italic: 'Nunito-BoldItalic',
      },
      800: {
        normal: 'Nunito-ExtraBold',
        italic: 'Nunito-ExtraBoldItalic',
      },
      900: {
        normal: 'Nunito-Black',
        italic: 'Nunito-BlackItalic',
      },
    },
  },
  fonts: {
    heading: 'Nunito',
    body: 'Nunito',
  },
};

/**
 * Get text color config.
 *
 * @param type The color mode type.
 *
 * @returns The text color config.
 */
export const getTextColorConfig = function (type: ColorModeType = ColorModeType.default): ColorConfig {
  switch (type) {
    case ColorModeType.default:
    default:
      return { light: 'dark.900', dark: 'light.900' };
  }
};

/**
 * Get background color config.
 *
 * @param type The color mode type.
 *
 * @returns The background color config.
 */
export const getBackgroundColorConfig = function (type: ColorModeType = ColorModeType.default): ColorConfig {
  switch (type) {
    case ColorModeType.primary:
      return { light: 'primary.400', dark: 'primary.600' };

    case ColorModeType.default:
    default:
      return { light: 'light.900', dark: 'dark.900' };
  }
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
