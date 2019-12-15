import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import GestureRecognizer, {
  swipeDirections
} from 'react-native-swipe-gestures';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const screens = ['Home', 'Pulse', 'Feed', 'Profile'];

export default class Viewport extends React.Component {
  render() {
    const { children, navigation } = this.props;
    return (
      <ScrollView>
        <View style={styles.main}>{children}</View>
      </ScrollView>
    );
  }
}
