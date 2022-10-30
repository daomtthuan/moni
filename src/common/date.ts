/**
 * Get the current day in year.
 *
 * @returns The current day in year.
 */
export const getDayInYear = function daysInYear() {
  const now = new Date();
  const time = now.getTime() - new Date(now.getFullYear(), 0, 1).getTime();

  return Math.ceil(time / (1000 * 60 * 60 * 24));
};
