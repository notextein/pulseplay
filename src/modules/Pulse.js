import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Viewport from './Viewport';
import globalStyles from '../styles';

import HeaderLogo from '../media/pulse.jpg';
import Feed from '../media/feed.png';
import Health from '../media/health-check.png';
import Symptom from '../media/symptom.png';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  firstHomeButton: {
    width: 300,
    height: 120,
    borderRadius: 10,
    marginTop: 100,
    marginBottom: 20
  },
  homeButtons: {
    width: 300,
    height: 120,
    borderRadius: 10,
    marginVertical: 20
  }
});

export default class Pulse extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Viewport navigation={navigation}>
        <Image style={globalStyles.headerLogo} source={HeaderLogo} />
        <View style={styles.main}>
          <TouchableOpacity
            onPress={() => console.log('pressed')}
            underlayColor='gray'
            activeOpacity={0.1}
          >
            <Image style={styles.firstHomeButton} source={Health} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Symptom')}
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
          <TouchableOpacity
            onPress={() => navigation.navigate('LandBot')}
            underlayColor='gray'
            activeOpacity={0.1}
          >
            <Image style={styles.homeButtons} source={Feed} />
          </TouchableOpacity>
        </View>
      </Viewport>
    );
  }
}
