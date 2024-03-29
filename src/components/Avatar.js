import React from 'react';
import { Avatar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';

export default class Kol extends React.Component {
  handlePress = details => {
    details.navigation.navigate('KolProfile');
  };

  render() {
    const { img } = this.props;
    return (
      <TouchableOpacity
        onPress={() => this.handlePress({ ...this.props })}
        underlayColor='gray'
        activeOpacity={0.1}
      >
        <Avatar.Image style={{ marginHorizontal: 5 }} size={100} source={img} />
      </TouchableOpacity>
    );
  }
}
