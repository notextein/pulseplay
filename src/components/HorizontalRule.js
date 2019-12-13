import React from 'react';
import { View } from 'react-native';

export default class HorizontalRule extends React.Component {
  render() {
    const { color } = this.props;
    let myColor = color ? color : 'black';

    return (
      <View
        style={{
          borderBottomColor: myColor,
          borderBottomWidth: 1,
          marginVertical: 15
        }}
      />
    );
  }
}
