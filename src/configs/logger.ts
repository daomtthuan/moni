import { ConfigureOptions, LogLevel } from 'react-native-file-logger';

/** LOgger configs. */
export const loggerConfigs: ConfigureOptions = {
  logLevel: __DEV__ ? LogLevel.Debug : LogLevel.Error,
};
