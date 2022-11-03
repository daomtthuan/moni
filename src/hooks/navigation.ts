import _ from 'lodash';
import { useMemo } from 'react';
import { navigationConfigs } from '~configs/navigation';

import { DefaultTheme, Theme } from '@react-navigation/native';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

export type NavigationConfigurer = {
  theme: Theme;
};

/** Navigation hook. */
export type NavigationHook = () => NavigationConfigurer;

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Hooks
// --------------------------------------------------------------------------------

/**
 * Create a Navigation configurer.
 *
 * @returns The Navigation configurer.
 */
export const useNavigationConfigurer: NavigationHook = function () {
  const theme = useMemo(() => _.merge(DefaultTheme, navigationConfigs.theme), []);

  return { theme };
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
