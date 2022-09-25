import { extendTheme, INativebaseConfig, StorageManager, Theme } from 'native-base';
import { DependencyList, useMemo } from 'react';

import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { AsyncStorageKey } from '../configs/async-storage';

// --------------------------------------------------------------------------------
// #region Types and Interfaces
// --------------------------------------------------------------------------------

/** Theme configs. */
export type ThemeConfigs = INativebaseConfig;

/** Theme mode. */
export enum ThemeMode {
  /** Light mode. */
  Light = 'light',
  /** Dark mode. */
  Dark = 'dark',
}

/** Theme mode manager. */
export type ThemeModeManager = StorageManager;

/** ThemeProvider variables. */
export type ThemeVariables = Theme | (Record<string, any> & {});

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region Hooks
// --------------------------------------------------------------------------------

/**
 * Create a storage manager for the theme mode.
 *
 * @param [defaultMode=ThemeMode.Light] The default theme mode. Default is `ThemeMode.Light`
 * @param [dependencies=[]] The dependencies. Default is `[]`
 *
 * @returns Them mode storage manager.
 */
export const useThemeModeManager = function (defaultMode: ThemeMode = ThemeMode.Light, dependencies: DependencyList = []): ThemeModeManager {
  const { getItem, setItem } = useAsyncStorage(AsyncStorageKey.ThemeMode);

  const storageManager = useMemo<ThemeModeManager>(
    () => ({
      /**
       * Get the theme mode from the async storage.
       *
       * @returns The theme mode.
       */
      get: async () => {
        try {
          let mode = (await getItem()) ?? defaultMode;

          return mode as ThemeMode;
        } catch (error) {
          console.error("Couldn't get the theme mode from the async storage.", error);

          return defaultMode;
        }
      },

      /**
       * Set the theme mode to the async storage.
       *
       * @param [mode] The theme mode.
       */
      set: async (mode) => {
        try {
          await setItem(mode ?? defaultMode);
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
export const useThemeConfigurer = function (configs: ThemeConfigs = {}, dependencies: DependencyList = []): ThemeConfigs {
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
