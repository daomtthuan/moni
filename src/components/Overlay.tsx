import { FunctionComponent, PropsWithoutRef } from 'react';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** Overlay props. */
export type OverlayProps = PropsWithoutRef<{}>;

/** Overlay component. */
export type OverlayComponent = FunctionComponent<OverlayProps>;

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Component
// --------------------------------------------------------------------------------

/**
 * Overlay component.
 *
 * @returns The Overlay component.
 */
export const Overlay: OverlayComponent = function () {
  return <></>;
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
