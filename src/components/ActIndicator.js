import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import styles from '../styles';

export default class ActIndicator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }
  render() {
    const { animating } = this.state;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <ActivityIndicator
          animating={animating}
          size='large'
          color={styles.accent.color}
        />
      </View>
    );
  }
}
