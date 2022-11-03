import { PartialDeep } from 'type-fest';

import { Theme } from '@react-navigation/native';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** Navigation configs. */
export type NavigationConfigs = {
  /** Navigation theme. */
  theme: PartialDeep<Theme>;
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Configs
// --------------------------------------------------------------------------------

/** Navigation configs. */
export const navigationConfigs: NavigationConfigs = {
  theme: {
    colors: {
      background: 'transparent',
    },
  },
};

// --------------------------------------------------------------------------------
// #region - Configs
// --------------------------------------------------------------------------------