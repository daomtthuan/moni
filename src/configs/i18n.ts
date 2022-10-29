import { InitOptions } from 'i18next';
import { LocaleCode } from '~locales/locales';
import { LocaleResourceNamespace, LocaleResources, localeResources } from '~locales/resources';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** I18n configs. */
export type I18nConfigs = {
  /** Default language. */
  defaultLanguage: LocaleCode;
  /** Locale resource json version. */
  jsonVersion: InitOptions['compatibilityJSON'];
  /** Namespaces. */
  namespaces: LocaleResourceNamespace[];
  /** Default locale resource namespace. */
  defaultNamespace: LocaleResourceNamespace;
  /** Resources. */
  resources: LocaleResources;
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Configs
// --------------------------------------------------------------------------------

/** I18n configs. */
export const i18nConfigs: I18nConfigs = {
  defaultLanguage: LocaleCode.en,
  jsonVersion: 'v3',
  defaultNamespace: LocaleResourceNamespace.common,
  namespaces: Object.values(LocaleResourceNamespace),
  resources: localeResources,
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
