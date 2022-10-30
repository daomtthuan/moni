import { extendTheme, INativebaseConfig, StorageManager, Theme } from 'native-base';
import { useMemo } from 'react';
import { ThemeAsyncStorageKey } from '~configs/async-storage';
import { defaultThemeMode, ThemeColorMode, themeConfigs, themeVariables } from '~configs/theme';

import { useAsyncStorage } from '@react-native-async-storage/async-storage';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** Theme configurer. */
export type ThemeConfigurer = {
  /** Theme Configs. */
  configs: INativebaseConfig;
  /** Theme color mode manager. */
  modeManager: StorageManager;
  /** Theme variables. */
  variables: Theme;
};

/** Theme hook. */
export type ThemeHook = () => ThemeConfigurer;

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Hooks
// --------------------------------------------------------------------------------

/**
 * Create a Theme configurer.
 *
 * @returns The Theme configurer.
 */
export const useTheme: ThemeHook = function () {
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
          console.error("Couldn't set the theme mode to the async storage.", error, JSON.stringify({ mode }, null, 2));
        }
      },
    };
  }, [modeStorage]);

  return {
    configs: themeConfigs,
    modeManager: modeManager,
    variables: extendTheme(themeVariables),
  };
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
