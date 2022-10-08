import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';
import { AppRoot } from './src/app/AppRoot';

AppRegistry.registerComponent(appName, () => AppRoot);

console.log('App started');
