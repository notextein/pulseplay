import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';

export default class ToggledIcon extends React.Component {
  render() {
    const { size, icon, defaultColor, toggledColor, isToggled } = this.props;
    return (
      <TouchableOpacity
        style={{ margin: 3 }}
        underlayColor='gray'
        activeOpacity={0.1}
        //   onPress={() => this.shareHandler(Share.Social.FACEBOOK)}
      >
        <Icon name={icon} color={defaultColor} size={size} />
      </TouchableOpacity>
    );
  }
}
