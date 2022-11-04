import { extendTheme, INativebaseConfig, StorageManager, Theme, useColorModeValue } from 'native-base';
import { useMemo } from 'react';
import { ThemeAsyncStorageKey } from '~configs/async-storage';
import { ColorModeType, defaultThemeMode, getBackgroundColorConfig, getTextColorConfig, ThemeColorMode, themeConfigs, themeVariables } from '~configs/theme';

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
// #region - Theme hooks
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
          const mode = (await modeStorage.getItem()) ?? defaultThemeMode;

          return mode as ThemeColorMode;
        } catch (error) {
          console.error('Could NOT get the theme mode from the async storage.', error);

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
          console.error('Could NOT set the theme mode to the async storage.', error);
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

/**
 * Get the text color.
 *
 * @param type The color mode type.
 *
 * @returns The text color value.
 */
export const useTextColor = function (type: ColorModeType = ColorModeType.default) {
  const { light, dark } = getTextColorConfig(type);

  return useColorModeValue(light, dark);
};

/**
 * Get the background color.
 *
 * @param type The color mode type.
 *
 * @returns The background color value.
 */
export const useBackgroundColor = function (type: ColorModeType = ColorModeType.default) {
  const { light, dark } = getBackgroundColorConfig(type);

  return useColorModeValue(light, dark);
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
