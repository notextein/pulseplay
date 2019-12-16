import React from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

import Viewport from './Viewport';
import globalStyles from '../styles';

import HeaderLogo from '../media/pulse.jpg';

import api from '../api';
import store from '../ducks/store';
import { saveAuth } from '../ducks/actions/auth';

const styles = StyleSheet.create({
  default: {
    marginVertical: 5,
    height: 40,
    width: 200,
    color: 'black',
    borderColor: 'gray',
    borderWidth: 1
  },
  button: {
    margin: 5
  }
});

export default class Login extends React.Component {
  state = {
    username: '',
    password: ''
  };

  doLogin = nav => {
    const data = {
      email: this.state.username,
      password: this.state.password
    };

    api.post('/bean/token', data, p => {
      if (p.success) {
        nav.navigate('Feed');
      }
    });
  };

  getAuth = async () => {
    try {
      const auth = await AsyncStorage.getItem('@auth');
      store.dispatch(saveAuth(auth));
      return auth;
    } catch (e) {
      // error reading value
      console.log('Error on Auth', e);
      return null;
    }
  };

  storeAuth = async auth => {
    try {
      await AsyncStorage.setItem('@auth', auth);
    } catch (e) {
      // saving error
    }
  };

  render() {
    const { username, password } = this.state;
    const { navigation } = this.props;

    if (this.getAuth()) {
      navigation.navigate('Feed');
    }

    return (
      <View>
        <Image style={globalStyles.headerLogo} source={HeaderLogo} />
        <View
          style={{
            marginTop: 300,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <TextInput
            placeholder='email...'
            style={styles.default}
            onChangeText={text =>
              this.setState({ username: text.toLowerCase() })
            }
            value={username}
            textAlign={'center'}
          />
          <TextInput
            placeholder='password...'
            style={styles.default}
            onChangeText={text => this.setState({ password: text })}
            value={password}
            secureTextEntry={true}
            textAlign={'center'}
          />
          <Button
            style={styles.button}
            mode='contained'
            color='#68737a'
            width={120}
            height={35}
            // color='#ed1b2c'
            onPress={() => this.doLogin(navigation)}
          >
            Login
          </Button>
        </View>
      </View>
    );
  }
}
