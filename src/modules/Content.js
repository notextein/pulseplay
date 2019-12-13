import * as React from 'react';

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar
} from 'react-native';

import styles from '../styles';

export default class Play extends React.Component {
  render() {
    const { profileAvatar, author, datePublished, title, content } = this.props;
    return (
      <>
        <StatusBar barStyle='dark-content' />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior='automatic'
            style={styles.scrollView}
          ></ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
