/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import HeaderLogo from '../media/pulse.jpg';
import Feed from '../media/feed.png';
import Health from '../media/health-check.png';
import Symptom from '../media/symptom.png';

import styles from '../styles';

export default class Pulse extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image style={styles.headerLogo} source={HeaderLogo} />
        <TouchableOpacity
          onPress={() => console.log('pressed')}
          underlayColor='gray'
          activeOpacity={0.1}
        >
          <Image style={styles.firstHomeButton} source={Health} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('pressed')}
          underlayColor='gray'
          activeOpacity={0.1}
        >
          <Image style={styles.homeButtons} source={Symptom} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Feed')}
          underlayColor='gray'
          activeOpacity={0.1}
        >
          <Image style={styles.homeButtons} source={Feed} />
        </TouchableOpacity>
      </View>
    );
  }
}
