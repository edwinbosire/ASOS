/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {AppRegistry} from 'react-native';
import {setup} from './src/setup';
import TabBarView from './src/Tabbar';
import Homepage from './src/containers/Homepage';

AppRegistry.registerComponent('Asos', () => TabBarView);
