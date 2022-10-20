import { ColorMode, extendTheme, INativebaseConfig, StorageManager, Theme } from 'native-base';
import { useMemo } from 'react';

import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { ThemeAsyncStorageKey } from '../configs/async-storage';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** Theme color mode. */
export type ThemeColorMode = NonNullable<ColorMode>;

/** ThemeProvider variables. */
export type ThemeVariables = Theme | (Record<string, any> & {});

/** Theme configurer. */
export type ThemeConfigurer = {
  /** Theme Configs. */
  configs: INativebaseConfig;
  /** Theme color mode manager. */
  modeManager: StorageManager;
  /** Theme variables. */
  variables: Theme;
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Hooks
// --------------------------------------------------------------------------------

/**
 * Create a theme configurer.
 *
 * @param themeConfigs Theme configs.
 * @param defaultThemeMode Default theme color mode.
 * @param themeVariables Theme variables.
 *
 * @returns The theme configurer.
 */
export const useThemeConfigurer = function (themeConfigs: INativebaseConfig, defaultThemeMode: ThemeColorMode, themeVariables: ThemeVariables) {
  const modeStorage = useAsyncStorage(ThemeAsyncStorageKey.Mode);

  const modeManager = useMemo<StorageManager>(() => {
    return {
      /**
       * Get the theme mode from the async storage.
       *
       * @returns The theme color mode.
       */
      get: async () => {
        try {
          let mode = (await modeStorage.getItem()) ?? defaultThemeMode;

          return mode as ThemeColorMode;
        } catch (error) {
          console.error("Couldn't get the theme mode from the async storage.", error);

          return defaultThemeMode;
        }
      },

      /**
       * Set the theme mode to the async storage.
       *
       * @param mode The theme mode.
       */
      set: async (mode) => {
        try {
          await modeStorage.setItem(mode as ThemeColorMode);
        } catch (error) {
          console.error("Couldn't set the theme mode to the async storage.", error);
        }
      },
    };
  }, [modeStorage, defaultThemeMode]);

  const themeConfigurer = useMemo<ThemeConfigurer>(() => {
    return {
      configs: themeConfigs,
      modeManager: modeManager,
      variables: extendTheme(themeVariables),
    };
  }, [themeConfigs, modeManager, themeVariables]);

  return themeConfigurer;
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
