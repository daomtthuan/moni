import { useCallback, useEffect, useState } from 'react';
import { FileLogger } from 'react-native-file-logger';
import { HookStatus } from '~common/status';
import { loggerConfigs } from '~configs/logger';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** Logger hook. */
export type LoggerHook = () => HookStatus;

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Hooks
// --------------------------------------------------------------------------------

/**
 * Create a Logger.
 *
 * @returns The Logger status.
 */
export const useLogger: LoggerHook = function () {
  const [status, setStatus] = useState(HookStatus.NotReady);

  const configureLogger = useCallback(async () => {
    try {
      await FileLogger.configure(loggerConfigs);

      if (__DEV__) {
        await FileLogger.deleteLogFiles();
      }

      setStatus(HookStatus.Ready);
    } catch (error) {
      console.error("Couldn't configure logger.", error, JSON.stringify(loggerConfigs, null, 2));

      setStatus(HookStatus.Failed);
    }
  }, []);

  useEffect(() => {
    configureLogger();
  }, [configureLogger]);

  return status;
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
