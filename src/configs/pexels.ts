import { PEXELS_API_KEY, PEXELS_BACKGROUND_COLLECTION_ID } from '@env';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** Pexels configs. */
export type PexelsConfigs = {
  /** API key. */
  apiKey: string;
  /** Max number of items per page. */
  perPage: number;
};

/** Pexels collections. */
export type PexelsCollections = {
  /** Background image collection id. */
  background: string;
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Configs
// --------------------------------------------------------------------------------

/** Pexels configs. */
export const pexelsConfigs: PexelsConfigs = {
  apiKey: PEXELS_API_KEY,
  perPage: 50,
};

/** Pexels collections. */
export const pexelsCollections: PexelsCollections = {
  background: PEXELS_BACKGROUND_COLLECTION_ID,
};

// --------------------------------------------------------------------------------
// #region - Configs
// --------------------------------------------------------------------------------
