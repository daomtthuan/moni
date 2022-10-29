import { FunctionComponent, PropsWithoutRef } from 'react';
import { GuestRouter } from '~routers/Guest';

import { NavigationContainer } from '@react-navigation/native';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** Navigation props. */
export type NavigationProps = PropsWithoutRef<{}>;

/** Navigation component. */
export type NavigationComponent = FunctionComponent<NavigationProps>;

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Component
// --------------------------------------------------------------------------------

/**
 * Navigation component.
 *
 * @returns The App navigation container component.
 */
export const Navigation: NavigationComponent = function () {
  return (
    <NavigationContainer>
      <GuestRouter />
    </NavigationContainer>
  );
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
