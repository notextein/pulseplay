import React from 'react';
import { View, Text } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import HorizontalRule from '../components/HorizontalRule';

export default class UserProfileItem extends React.Component {
  render() {
    const { name, red } = this.props;
    const styles = {};

    if (red) {
      styles.color = '#ed1b2c';
    }

    return (
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
    );
  }
}
