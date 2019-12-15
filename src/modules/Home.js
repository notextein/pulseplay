import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Viewport from './Viewport';
import globalStyles from '../styles';

import PulseWelcome from '../media/pulse-welcome.png';
import HeaderLogo from '../media/pulse.jpg';

import currentUser from '../data/user'; // from remote
import store from '../ducks/store';
import { setUser } from '../ducks/actions/user';
import { saveAuth } from '../ducks/actions/auth';

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

export default class Home extends React.Component {
  render() {
    const { navigation } = this.props;

    const unsubscribe = store.subscribe(() => console.log(store.getState()));
    store.dispatch(saveAuth(currentUser));
    store.dispatch(setUser(currentUser));

    return (
      <Viewport navigation={navigation}>
        <Image style={globalStyles.headerLogo} source={HeaderLogo} />
        <View style={styles.main}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Pulse')}
            underlayColor='gray'
            activeOpacity={0.1}
          >
            <Image style={styles.welcome} source={PulseWelcome} />
          </TouchableOpacity>
        </View>
      </Viewport>
    );
  }
}
