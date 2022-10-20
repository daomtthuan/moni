// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** Locale code. */
export enum LocaleCode {
  en = 'en',
  vi = 'vi',
}

/** Locale name. */
export enum LocaleName {
  en = 'English',
  vi = 'Tiếng Việt',
}

/** Locale. */
export type Locale = {
  code: LocaleCode;
  name: LocaleName;
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region -  Locales
// --------------------------------------------------------------------------------

/** Locales. */
export const locales: Locale[] = [
  {
    code: LocaleCode.en,
    name: LocaleName.en,
  },
  {
    code: LocaleCode.vi,
    name: LocaleName.vi,
  },
];

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------