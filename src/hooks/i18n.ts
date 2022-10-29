import I18next, { LanguageDetectorAsyncModule } from 'i18next';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { initReactI18next } from 'react-i18next';
import { I18nAsyncStorageKey } from '~configs/async-storage';
import { I18nConfigs } from '~configs/i18n';

import { useAsyncStorage } from '@react-native-async-storage/async-storage';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** Logger status. */
export enum I18nStatus {
  /** Ready. */
  Ready,
  /** Ready. */
  NotReady,
  /** Failed. */
  Failed,
}

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Hooks
// --------------------------------------------------------------------------------

/**
 * Create a i18n.
 *
 * @param i18nConfigs I18n configs.
 *
 * @returns I18n status.
 */
export const useI18n = (i18nConfigs: I18nConfigs) => {
  const [status, setStatus] = useState(I18nStatus.NotReady);

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
          console.error("Couldn't set locale to the async storage.", error);
        }
      },
    };
  }, [languageStorage, i18nConfigs.defaultLanguage]);

  const configureI18n = useCallback(async () => {
    try {
      await I18next.use(languageDetector).use(initReactI18next).init({
        compatibilityJSON: i18nConfigs.jsonVersion,
        ns: i18nConfigs.defaultLanguage,
        defaultNS: i18nConfigs.defaultNamespace,
        resources: i18nConfigs.resources,
      });

      setStatus(I18nStatus.Ready);
    } catch (error) {
      console.error("Couldn't configure i18n.", error);

      setStatus(I18nStatus.Failed);
    }
  }, [languageDetector, i18nConfigs]);

  useEffect(() => {
    configureI18n();
  }, [configureI18n]);

  return status;
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
