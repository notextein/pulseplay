import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import Viewport from './Viewport';
import globalStyles from '../styles';

import HeaderLogo from '../media/pulse.jpg';
import SymptomResult from '../media/symptom-result.png';

import articles from '../data/articles';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  firstHomeButton: {
    width: 300,
    height: 120,
    borderRadius: 10,
    marginTop: 100,
    marginBottom: 20
  },
  homeButtons: {
    width: 300,
    height: 120,
    borderRadius: 10,
    marginVertical: 20
  }
});

export default class Symptom extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.main}>
        <Image style={globalStyles.headerLogo} source={HeaderLogo} />
        <ScrollView style={{ marginTop: 100 }}>
          <Image source={SymptomResult} />
        </ScrollView>
      </View>
    );
  }
}
