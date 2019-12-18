import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';

import styles from '../styles';

export default class ToggledIcon extends React.Component {
  handlePress = () => {
    this.props.handlePress();
  };
  render() {
    const {
      size,
      icon,
      defaultColor,
      pressedIcon,
      isToggled,
      handlePress
    } = this.props;

    const myDefaultColor = defaultColor ? defaultColor : styles.accent.color;
    return (
      <TouchableOpacity
        style={{ margin: 3 }}
        underlayColor='gray'
        activeOpacity={0.1}
        onPress={handlePress}
      >
        <Icon name={icon} color={myDefaultColor} size={size} />
      </TouchableOpacity>
    );
  }
}
