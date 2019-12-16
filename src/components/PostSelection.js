import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import HorizontalRule from './HorizontalRule';

export default class PostSelection extends React.Component {
  handlePress = onPress => {
    onPress(); // from parent
  };
  render() {
    const { icon, name, red, onPress } = this.props;
    if (red) styles.color = '#ed1b2c'; // gray
    return (
      <TouchableOpacity
        onPress={() => this.handlePress(onPress)}
        underlayColor='gray'
        activeOpacity={0.1}
      >
        <View style={{ marginTop: 20 }}>
          <View flexDirection='row'>
            <Text style={{ marginLeft: 60 }}>{name}</Text>
            <Icon
              style={{ position: 'absolute', left: 10, bottom: -5 }}
              name={icon}
              size={30}
            />
          </View>
          <HorizontalRule color='gray' />
        </View>
      </TouchableOpacity>
    );
  }
}
