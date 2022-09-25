import { DependencyList, useCallback, useEffect, useState } from 'react';
import { ConfigureOptions, FileLogger } from 'react-native-file-logger';

// --------------------------------------------------------------------------------
// #region Types and Interfaces
// --------------------------------------------------------------------------------
//
/** Logger configs. */
export type LoggerConfigs = ConfigureOptions;

/** Logger level. */
export enum LogLevel {
  /** Debug level. */
  Debug,
  /** Info level. */
  Info,
  /** Warn level. */
  Warning,
  /** Error level. */
  Error,
}

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region Hooks
// --------------------------------------------------------------------------------

/**
 * Create a logger.
 *
 * @param [configs={}] Logger configs. Default is `{}`
 * @param [dependencies=[]] The dependencies. Default is `[]`
 *
 * @returns The logger status. If `true`, the logger is ready to use. Otherwise `false`, the logger is not ready.
 */
export const useLogger = function (configs: LoggerConfigs = {}, dependencies: DependencyList = []) {
  const [status, setStatus] = useState(false);

  const configureLogger = useCallback(async () => {
    try {
      await FileLogger.configure(configs);
      console.log(`Log files path: ${await FileLogger.getLogFilePaths()}`);

      if (__DEV__) {
        await FileLogger.deleteLogFiles();
      }

      setStatus(true);
    } catch (error) {
      console.error("Couldn't configure the logger.", error);

      setStatus(false);
    }
  }, dependencies);

  useEffect(() => {
    configureLogger();
  }, dependencies);

  return status;
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
