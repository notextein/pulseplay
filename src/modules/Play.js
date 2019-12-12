import * as React from 'react';
import { Searchbar } from 'react-native-paper';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import Chip from '../components/Chip';
import Card from '../components/Card';
import Avatar from '../components/Avatar';

import Banner from '../media/banner.jpg';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  engine: {
    position: 'absolute',
    right: 0
  },
  body: {
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark
  },
  highlight: {
    fontWeight: '700'
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right'
  }
});

import Drew from '../media/drew.jpg';
import Erwan from '../media/erwan.jpg';
import Gretchen from '../media/gretchen-ho.jpg';
import Catriona from '../media/catriona.jpg';
import MissU from '../media/miss-u.jpg';
import Mimiyuuh from '../media/mimiyuuh.jpg';




export default class Play extends React.Component {
  state = {
    firstQuery: ''
  };

  render() {
    const { firstQuery } = this.state;
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
                  <Avatar img={Drew}/>
                </View>
              </View>
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
                  <Avatar img={Mimiyuuh}/>
                </View>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Your latest Pulse:</Text>
                <Text style={styles.sectionDescription}>
                  Edit <Text style={styles.highlight}>App.js</Text> to change
                  this screen and then come back to see your edits.
                </Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
