/** Hook status. */
export enum HookStatus {
  /** Ready. */
  Ready,
  /** Ready. */
  NotReady,
  /** Failed. */
  Failed,
}

/** Hook status checker. */
export const hookStatusChecker = {
  /**
   * Check all statuses are ready.
   *
   * @param statuses The statuses list to check.
   *
   * @returns Is all the statuses ready.
   */
  isReady: (...statuses: HookStatus[]) => statuses.every((status) => status !== HookStatus.NotReady),

  /**
   * Check if any status failed.
   *
   * @param statuses The statuses list to check.
   *
   * @returns Is any status failed.
   */
  isFailed: (...statuses: HookStatus[]) => statuses.some((status) => status === HookStatus.Failed),
};
