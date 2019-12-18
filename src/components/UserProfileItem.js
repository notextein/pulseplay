import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import HorizontalRule from '../components/HorizontalRule';
import storage from '../storage';

export default class UserProfileItem extends React.Component {
  handlePress = details => {
    // handle others here as well
    if (details.isLogout && details.navigation) {
      storage.removeKey('@auth');
      details.navigation.navigate('Login');
    } else if (details.type === 'preference') {
      details.navigation.navigate('Preference', { ...details });
    } else if (details.type === 'like') {
      details.navigation.navigate('MyArticles', { title: 'My Liked Posts:' });
    } else if (details.type === 'read') {
      details.navigation.navigate('MyArticles', {
        title: 'My Reading List:',
        showReadList: true
      });
    }
  };

  render() {
    const { name, red, isLogout } = this.props;
    const styles = {};

    if (red) {
      styles.color = '#ed1b2c';
    }

    return (
      <TouchableOpacity
        onPress={() => this.handlePress({ ...this.props })}
        underlayColor='gray'
        activeOpacity={0.1}
      >
        <View style={{ marginHorizontal: 40, marginTop: 20 }}>
          <View flexDirection='row'>
            <Text style={styles}>{name}</Text>
            <FeatherIcon
              style={{ position: 'absolute', right: 10, bottom: -5 }}
              name='chevron-right'
              size={30}
            />
          </View>
          <HorizontalRule color='gray' />
        </View>
      </TouchableOpacity>
    );
  }
}
