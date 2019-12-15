import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Viewport from './Viewport';
import globalStyles from '../styles';

import PulseWelcome from '../media/pulse-welcome.png';
import HeaderLogo from '../media/pulse.jpg';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center'
  },
  welcome: {
    width: 300,
    height: 120,
    borderRadius: 10,
    marginVertical: 20,
    marginTop: 240
  }
});

export default class Preference extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Viewport navigation={navigation}>
        <Text>Preference Screen</Text>
      </Viewport>
    );
  }
}
