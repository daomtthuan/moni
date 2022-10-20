import { ConfigureOptions, LogLevel } from 'react-native-file-logger';

// --------------------------------------------------------------------------------
// #region - Configs
// --------------------------------------------------------------------------------

/** Logger configs. */
export const loggerConfigs: ConfigureOptions = {
  logLevel: __DEV__ ? LogLevel.Debug : LogLevel.Error,
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
