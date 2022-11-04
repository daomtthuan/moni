import { FunctionComponent, PropsWithoutRef } from 'react';
import { EmptyObject } from 'type-fest';
import { useNavigationConfigurer } from '~hooks/navigation';
import { GuestRouter } from '~routers/Guest';

import { NavigationContainer } from '@react-navigation/native';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** Navigation props. */
export type NavigationProps = PropsWithoutRef<EmptyObject>;

/** Navigation component. */
export type NavigationComponent = FunctionComponent<NavigationProps>;

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Component
// --------------------------------------------------------------------------------

/** Navigation component. */
export const Navigation: NavigationComponent = function () {
  const { theme } = useNavigationConfigurer();

  return (
    <NavigationContainer theme={theme}>
      <GuestRouter />
    </NavigationContainer>
  );
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
