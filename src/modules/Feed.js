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
import Avatar from '../components/Avatar';
import Article from '../components/Article';
import HorizontalRule from '../components/HorizontalRule';

// media
import Banner from '../media/banner.jpg';
import Drew from '../media/drew.jpg';
import Erwan from '../media/erwan.jpg';
import Gretchen from '../media/gretchen-ho.jpg';
import Catriona from '../media/catriona.jpg';
import MissU from '../media/miss-u.jpg';
import Mimiyuuh from '../media/mimiyuuh.jpg';

import articles from '../data/articles';

export default class Feed extends React.Component {
  state = {
    firstQuery: ''
  };

  render() {
    const { firstQuery } = this.state;
    const { contentClickHandler } = this.props;
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
                  <Avatar img={Erwan} />
                  <Avatar img={Gretchen} />
                  <Avatar img={Drew} />
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
                  <Avatar img={Catriona} />
                  <Avatar img={MissU} />
                  <Avatar img={Mimiyuuh} />
                </View>
              </View>
              <HorizontalRule />
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Your latest Pulse:</Text>
                {articles.map((el, idx) => (
                  <Article
                    key={idx}
                    {...el}
                    contentClickHandler={contentClickHandler}
                  />
                ))}
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
