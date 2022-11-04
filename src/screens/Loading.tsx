import { FunctionComponent, PropsWithoutRef } from 'react';
import { EmptyObject } from 'type-fest';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** LoadingScreen props. */
export type LoadingScreenProps = PropsWithoutRef<EmptyObject>;

/** LoadingScreen component. */
export type LoadingScreenComponent = FunctionComponent<LoadingScreenProps>;

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Component
// --------------------------------------------------------------------------------

/** LoadingScreen component. */
export const LoadingScreen: LoadingScreenComponent = function () {
  return <></>;
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
