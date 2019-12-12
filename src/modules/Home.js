/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text, Image } from 'react-native';
import PulseLogo from '../media/pulse-logo.png';

export default class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={{width: 300, height: 300}}
          source={PulseLogo}
        />
      </View>
    );
  }
}
