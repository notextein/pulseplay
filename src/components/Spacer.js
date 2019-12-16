import React from 'react';
import { View } from 'react-native';

export default class Spacer extends React.Component {
  render() {
    const { px } = this.props;
    return <View style={{ marginBottom: px }}></View>;
  }
}
