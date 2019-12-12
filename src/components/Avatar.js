import * as React from 'react';
import { Avatar } from 'react-native-paper';


const MyAvatar = ({img}) => (
  <Avatar.Image style={{ marginHorizontal: 5 }} size={120} source={img} />
);

export default MyAvatar;