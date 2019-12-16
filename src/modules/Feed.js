import * as React from 'react';
import { connect } from 'react-redux';
import { Searchbar } from 'react-native-paper';
import {
  TouchableOpacity,
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
import Banner from '../media/banner.jpg';
import Health from '../media/health-check.png';

// data
import kol from '../data/kol';
import articles from '../data/articles';

import currentUser from '../data/user'; // from remote
import store from '../ducks/store';
import { setUser } from '../ducks/actions/user';
import { saveAuth, saveSearchQuery } from '../ducks/actions/auth';

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
      // ...this.props // to overwrite base prop
    };
  }

  updateQuery = query => {
    // store.dispatch(saveSearchQuery(query));
  };
  render() {
    const unsubscribe = store.subscribe(() => console.log(store.getState()));
    store.dispatch(saveAuth(currentUser));
    store.dispatch(setUser(currentUser));

    const { query } = this.state;
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
              onChangeText={text => {
                this.setState({ query: text });
              }}
              value={query}
            />
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <TouchableOpacity
                onPress={() => console.log('pressed')}
                underlayColor='gray'
                activeOpacity={0.1}
              >
                {/* <Image style={{ width: 420, height: 150 }} source={Banner} /> */}
                <Image
                  style={{ width: 420, height: 150, resizeMode: 'contain' }}
                  source={Health}
                />
              </TouchableOpacity>
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

// const mapStateToProps = (state /*, ownProps*/) => {
//   return {
//     user: state.auth,
//     tags: state.refs.tags,
//     preference: state.user.preference,
//     query: state.user.searchQuery
//   };
// };

// export default connect(mapStateToProps)(Feed);
