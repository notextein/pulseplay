/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import PulseWelcome from '../media/pulse-welcome.png';
import HeaderLogo from '../media/pulse.jpg';
import PulseLogo from '../media/pulse-logo.png';
import Health from '../media/health.jpg';
import Invest from '../media/invest.jpg';

import styles from '../styles';

export default class Home extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image style={styles.headerLogo} source={HeaderLogo} />
        <TouchableOpacity
          onPress={() => navigation.navigate('Pulse')}
          underlayColor='gray'
          activeOpacity={0.1}
        >
          <Image style={styles.homeButtons} source={PulseWelcome} />
        </TouchableOpacity>
      </View>
    );
  }
}
