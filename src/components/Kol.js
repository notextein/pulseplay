import React from 'react';
import { Avatar } from 'react-native-paper';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Kol extends React.Component {
  handlePress = details => {
    const { id, img, firstname, lastname, fullname } = details;
    details.navigation.navigate('KolProfile', {
      id,
      img,
      firstname,
      lastname,
      fullname
    });
  };

  render() {
    const { id, img, firstname, lastname, fullname } = this.props;
    let displayName = firstname ? firstname + ' ' + lastname : fullname;
    return (
      <TouchableOpacity
        onPress={() => this.handlePress({ ...this.props })}
        underlayColor='gray'
        activeOpacity={0.1}
      >
        <Avatar.Image style={{ marginHorizontal: 5 }} size={100} source={img} />
        <View style={{ flex: 1, alignItems: 'center', marginTop: 5 }}>
          <Text>{displayName}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
