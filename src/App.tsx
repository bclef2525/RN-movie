/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar} from 'react-native';
import Navigator from '~/Screens/Navigator';
interface Props {}
const App = ({}: Props) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Navigator />
    </>
  );
};

export default App;
