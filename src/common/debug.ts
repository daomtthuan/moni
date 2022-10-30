/** Debugging utilities. */
export const debug = {
  /**
   * Log object to console.
   *
   * @param obj Object to log.
   */
  log: (obj?: any) => {
    switch (typeof obj) {
      case 'object':
        console.log(JSON.stringify(obj, null, 2));
        break;

      default:
        console.log(obj);
        break;
    }
  },
};
