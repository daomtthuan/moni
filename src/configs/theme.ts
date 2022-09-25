import { theme } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

import { ThemeConfigs, ThemeMode, ThemeVariables } from '../hooks/theme';

/** Default theme mode. */
export const defaultThemeMode: ThemeMode = ThemeMode.Light;

/** Theme Configs. */
export const themeConfigs: ThemeConfigs = {
  dependencies: {
    'linear-gradient': LinearGradient,
  },
};

/** Theme variables. */
export const themeVariables: ThemeVariables = {
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
  config: {
    initialColorMode: ThemeMode.Light,
  },

  components: {
    Text: {
      baseStyle: (props: any) => {
        return {
          _light: { color: 'dark.900' },
          _dark: { color: 'light.900' },
        };
      },
    },
    VStack: {
      baseStyle: (props: any) => {
        return {
          _light: { bgColor: 'light.900' },
          _dark: { bgColor: 'dark.900' },
        };
      },
    },
  },
};
