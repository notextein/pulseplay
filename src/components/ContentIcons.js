import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Share from 'react-native-share';

export default class ContentIcons extends React.Component {
  pressHandler() {
    const options = {
      title: 'Share via',
      message: 'some message',
      url: 'some share url',
      social: Share.Social.FACEBOOK
    };
    Share.open(options)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  }

  render() {
    const { pressHandler, color, icon, size } = this.props;
    const mySize = size ? size : 25;
    const myColor = color ? color : 'gray';
    return (
      <TouchableOpacity
        onPress={() => pressHandler()}
        underlayColor='gray'
        activeOpacity={0.1}
      >
        <Icon name={icon} color={myColor} size={mySize} />
      </TouchableOpacity>
    );
  }
}
