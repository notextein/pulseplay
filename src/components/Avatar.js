import * as React from 'react';
import { Avatar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';

const MyAvatar = ({ img }) => (
  <TouchableOpacity
    onPress={() => console.log('pressed')}
    underlayColor='gray'
    activeOpacity={0.1}
  >
    <Avatar.Image style={{ marginHorizontal: 5 }} size={100} source={img} />
  </TouchableOpacity>
);

export default MyAvatar;
