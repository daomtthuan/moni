import { useCallback, useEffect, useState } from 'react';
import { ConfigureOptions, FileLogger } from 'react-native-file-logger';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** Logger status. */
export enum LoggerStatus {
  /** Ready. */
  Ready,
  /** Ready. */
  NotReady,
  /** Failed. */
  Failed,
}

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Hooks
// --------------------------------------------------------------------------------

/**
 * Create a logger.
 *
 * @param loggerConfigs Logger configs.
 *
 * @returns The logger status.
 */
export const useLogger = function (loggerConfigs: ConfigureOptions) {
  const [status, setStatus] = useState(LoggerStatus.NotReady);

  const configureLogger = useCallback(async () => {
    try {
      await FileLogger.configure(loggerConfigs);

      if (__DEV__) {
        await FileLogger.deleteLogFiles();
      }

      setStatus(LoggerStatus.Ready);
    } catch (error) {
      console.error("Couldn't configure logger.", error);

      setStatus(LoggerStatus.Failed);
    }
  }, [loggerConfigs]);

  useEffect(() => {
    configureLogger();
  }, [configureLogger]);

  return status;
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
