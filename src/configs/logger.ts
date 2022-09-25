import { LoggerConfigs, LogLevel } from '../hooks/logger';

/** LOgger configs. */
export const loggerConfigs: LoggerConfigs = {
  logLevel: __DEV__ ? LogLevel.Debug : LogLevel.Error,
};
