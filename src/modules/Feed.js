import * as React from 'react';
import { Searchbar } from 'react-native-paper';

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar
} from 'react-native';

import styles from '../styles';

// components
import Kol from '../components/Kol';
import Article from '../components/Article';
import HorizontalRule from '../components/HorizontalRule';

// media
import kol from '../data/kol';
import Banner from '../media/banner.jpg';

import articles from '../data/articles';

export default class Feed extends React.Component {
  state = {
    firstQuery: ''
  };

  render() {
    const { firstQuery } = this.state;
    const { navigation } = this.props;
    return (
      <>
        <StatusBar barStyle='dark-content' />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior='automatic'
            style={styles.scrollView}
          >
            <Searchbar
              placeholder='Search for the latest Pulse...'
              onChangeText={query => {
                this.setState({ firstQuery: query });
              }}
              value={firstQuery}
            />
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Image style={{ width: 420, height: 150 }} source={Banner} />
            </View>

            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Recommended for you:</Text>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row'
                  }}
                >
                  <Kol {...kol[4]} navigation={navigation} />
                  <Kol {...kol[1]} navigation={navigation} />
                  <Kol {...kol[8]} navigation={navigation} />
                </View>
              </View>
              <HorizontalRule />
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Trending right now:</Text>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row'
                  }}
                >
                  <Kol {...kol[9]} navigation={navigation} />
                  <Kol {...kol[10]} navigation={navigation} />
                  <Kol {...kol[7]} navigation={navigation} />
                </View>
              </View>
              <HorizontalRule />
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Your latest Pulse:</Text>
                {articles.map((el, idx) => (
                  <Article key={idx} navigation={navigation} {...el} />
                ))}
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
