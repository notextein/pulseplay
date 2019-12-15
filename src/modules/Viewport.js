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
  constructor(props) {
    super(props);
    this.state = {
      currentScreenIdx: 0
    };
  }

  onSwipeLeft(nav) {
    console.log('You swiped left!');
    let newIdx =
      currentScreenIdx + 1 >= screens.length - 1
        ? screens.length - 1
        : currentScreenIdx + 1;
    this.setState({ currentScreenIdx: newIdx });
    nav.navigate(screens[currentScreenIdx]);
  }

  onSwipeRight(nav) {
    console.log('You swiped right!');
    let newIdx = currentScreenIdx - 1 <= 0 ? 0 : currentScreenIdx - 1;
    this.setState({ currentScreenIdx: newIdx });
    nav.navigate(screens[currentScreenIdx]);
  }

  onSwipe(gestureName, gestureState) {
    const { SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
    // this.setState({ gestureName: gestureName });
    switch (gestureName) {
      case SWIPE_LEFT:
        // this.setState({ backgroundColor: 'blue' });
        break;
      case SWIPE_RIGHT:
        // this.setState({ backgroundColor: 'yellow' });
        break;
    }
  }
  render() {
    const { children, navigation } = this.props;

    console.log('navigation', navigation);
    console.log('state', this.state);

    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
    return (
      <GestureRecognizer
        onSwipe={() => this.onSwipe()}
        onSwipeLeft={() => this.onSwipeLeft(navigation)}
        onSwipeRight={() => this.onSwipeRight(navigation)}
        config={config}
      >
        <ScrollView>
          <View style={styles.main}>{children}</View>
        </ScrollView>
      </GestureRecognizer>
    );
  }
}
