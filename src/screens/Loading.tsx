import { FunctionComponent, PropsWithoutRef } from 'react';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** LoadingScreen props. */
export type LoadingScreenProps = PropsWithoutRef<{}>;

/** LoadingScreen component. */
export type LoadingScreenComponent = FunctionComponent<LoadingScreenProps>;

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Component
// --------------------------------------------------------------------------------

/**
 * LoadingScreen component.
 *
 * @returns The Loading screen component.
 */
export const LoadingScreen: LoadingScreenComponent = function () {
  return <></>;
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
