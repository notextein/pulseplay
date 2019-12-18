import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import Article from '../components/Article';
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
  sectionContainer: {
    marginTop: 10,
    paddingHorizontal: 24
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
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Related articles:</Text>
            {articles.map((el, idx) => (
              <Article key={idx} navigation={navigation} {...el} />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}
