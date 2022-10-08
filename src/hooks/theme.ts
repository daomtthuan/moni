import { ColorMode, extendTheme, INativebaseConfig, StorageManager, Theme } from 'native-base';
import { DependencyList, useMemo } from 'react';

import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { AsyncStorageKey } from '../configs/async-storage';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** Theme color mode. */
export type ThemeColorMode = NonNullable<ColorMode>;

/** ThemeProvider variables. */
export type ThemeVariables = Theme | (Record<string, any> & {});

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Hooks
// --------------------------------------------------------------------------------

/**
 * Create a storage manager for the theme mode.
 *
 * @param [defaultMode=ThemeMode.Light] The default theme mode. Default is `ThemeMode.Light`
 * @param [dependencies=[]] The dependencies. Default is `[]`
 *
 * @returns Theme mode storage manager.
 */
export const useThemeModeManager = function (defaultMode: ThemeColorMode = 'light', dependencies: DependencyList = []): StorageManager {
  const { getItem, setItem } = useAsyncStorage(AsyncStorageKey.ThemeMode);

  const storageManager = useMemo<StorageManager>(
    () => ({
      /**
       * Get the theme mode from the async storage.
       *
       * @returns The theme color mode.
       */
      get: async (): Promise<ThemeColorMode> => {
        try {
          let mode = (await getItem()) ?? defaultMode;

          return mode as ThemeColorMode;
        } catch (error) {
          console.error("Couldn't get the theme mode from the async storage.", error);

          return defaultMode;
        }
      },

      /**
       * Set the theme mode to the async storage.
       *
       * @param [mode=defaultMode] The theme mode. Default is `defaultMode`
       */
      set: async (mode: ThemeColorMode = defaultMode) => {
        try {
          await setItem(mode);
        } catch (error) {
          console.error("Couldn't set the theme mode to the async storage.", error);
        }
      },
    }),
    dependencies,
  );

  return storageManager;
};

/**
 * Create theme Configurer.
 *
 * @param [configs={}] The theme configs. Default is `{}`
 * @param [dependencies=[]] The dependencies. Default is `[]`
 *
 * @returns Theme Configurer.
 */
export const useThemeConfigurer = function (configs: INativebaseConfig = {}, dependencies: DependencyList = []): INativebaseConfig {
  const themeConfigurator = useMemo<INativebaseConfig>(() => configs, dependencies);

  return themeConfigurator;
};

/**
 * Create theme variables.
 *
 * @param [variables={}] The theme variables. Default is `{}`
 * @param [dependencies=[]] The dependencies. Default is `[]`
 *
 * @returns Theme provider.
 */
export const useThemeVariables = function (variables: ThemeVariables = {}, dependencies: DependencyList = []): Theme {
  const themeProvider = useMemo<Theme>(() => extendTheme(variables), dependencies);

  return themeProvider;
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
