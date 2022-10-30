import I18next, { LanguageDetectorAsyncModule } from 'i18next';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { initReactI18next } from 'react-i18next';
import { HookStatus } from '~common/status';
import { I18nAsyncStorageKey } from '~configs/async-storage';
import { i18nConfigs } from '~configs/i18n';

import { useAsyncStorage } from '@react-native-async-storage/async-storage';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** I18n hook. */
export type I18nHook = () => HookStatus;

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Hooks
// --------------------------------------------------------------------------------

/**
 * Create a I18n.
 *
 * @returns The I18n status.
 */
export const useI18n: I18nHook = function () {
  const [status, setStatus] = useState(HookStatus.NotReady);

  const languageStorage = useAsyncStorage(I18nAsyncStorageKey.Language);

  const languageDetector = useMemo<LanguageDetectorAsyncModule>(() => {
    return {
      type: 'languageDetector',
      async: true,

      init: () => {},

      detect: async (setLanguage) => {
        try {
          let language = (await languageStorage.getItem()) ?? i18nConfigs.defaultLanguage;

          setLanguage(language);
        } catch (error) {
          console.error("Couldn't get locale from the async storage.", error);

          setLanguage(i18nConfigs.defaultLanguage);
        }
      },
      cacheUserLanguage: async (language) => {
        try {
          await languageStorage.setItem(language);
        } catch (error) {
          console.error("Couldn't set locale to the async storage.", error, JSON.stringify({ language }, null, 2));
        }
      },
    };
  }, [languageStorage]);

  const configureI18n = useCallback(async () => {
    try {
      await I18next.use(languageDetector).use(initReactI18next).init({
        compatibilityJSON: i18nConfigs.jsonVersion,
        ns: i18nConfigs.defaultLanguage,
        defaultNS: i18nConfigs.defaultNamespace,
        resources: i18nConfigs.resources,
      });

      setStatus(HookStatus.Ready);
    } catch (error) {
      console.error("Couldn't configure i18n.", error, JSON.stringify(i18nConfigs, null, 2));

      setStatus(HookStatus.Failed);
    }
  }, [languageDetector]);

  useEffect(() => {
    configureI18n();
  }, [configureI18n]);

  return status;
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
