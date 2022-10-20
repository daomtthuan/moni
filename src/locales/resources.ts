import type { LocaleCode } from './locales';
import enCommon from './en/common.json';
import viCommon from './vi/common.json';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** Locale resource namespace. */
export enum LocaleResourceNamespace {
  common = 'common',
}

/** Locale resource value. */
export type LocaleResourceValue = {
  [key: string]: string | LocaleResourceValue;
};

/** Locale resource. */
export type LocaleResource = {
  [key in LocaleResourceNamespace]: LocaleResourceValue;
};

/** Locale resources. */
export type LocaleResources = {
  [key in LocaleCode]: LocaleResource;
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Resources
// --------------------------------------------------------------------------------

/** Locale resources. */
export const localeResources: LocaleResources = {
  /** English locale resource. */
  en: { common: enCommon },
  /** Vietnamese locale resource. */
  vi: { common: viCommon },
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
