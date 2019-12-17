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
  StatusBar,
  ActivityIndicator
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
// import articles from '../data/articles';

import currentUser from '../data/user'; // from remote
import store from '../ducks/store';
import { setUser } from '../ducks/actions/user';
import { saveAuth, saveSearchQuery } from '../ducks/actions/auth';
import { fetchTags } from '../ducks/actions/refs';
import { saveFeeds } from '../ducks/actions/feed';

import api from '../api';

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      filtered: [],
      articles: [],
      cachedArticles: [],
      ...this.props // to overwrite base prop
    };
  }
  fetchTimer = null;
  updateQuery = query => {
    clearTimeout(this.fetchTimer);
    const myArticles = [...this.state.articles];
    this.setState({ cachedArticles: myArticles, articles: [] }); // cache old results, empty current one
    this.fetchTimer = setTimeout(() => {
      console.log('timer done');
      api.post('/bean/query/searchPost', { q: '%' + query + '%' }, p => {
        if (p.success) {
          console.log('response done');
          this.setState({ articles: p.result });
        }
      });
    }, 2000);
    this.setState({
      query: query
    });

    // store.dispatch(saveSearchQuery(query));
  };

  render() {
    const { query, articles } = this.state;
    const { navigation } = this.props;

    // const unsubscribe = store.subscribe(() => console.log(store.getState()));
    if (!store.getState().user.id) {
      store.dispatch(saveAuth(currentUser));
      store.dispatch(setUser(currentUser));
    }

    // fetch tags
    api.get('/bean/query/getTags', p => {
      if (p.success) {
        let tagsArr = [];
        let serverTags = p.result;
        serverTags.map(el => {
          tagsArr.push(el.code);
        });
        store.dispatch(fetchTags(tagsArr));
      }
    });

    const isSearching = query ? true : false;
    const shouldRender = articles.length > 0;

    // fetch feeds
    if (!isSearching) {
      // to load once
      api.post('/bean/query/searchPost', { q: '%' + query + '%' }, p => {
        if (p.success) {
          this.setState({ articles: p.result });
        }
      });
    }

    console.log('query', query);
    console.log('isSearching', isSearching);

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
                this.updateQuery(text.toLowerCase());
              }}
              value={query}
            />
            {!isSearching && (
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
            )}

            <View style={styles.body}>
              {!isSearching && (
                <>
                  <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>
                      Recommended for you:
                    </Text>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row'
                      }}
                    >
                      <Kol {...kol[1]} navigation={navigation} />
                      <Kol {...kol[3]} navigation={navigation} />
                      <Kol {...kol[11]} navigation={navigation} />
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
                      <Kol {...kol[12]} navigation={navigation} />
                      <Kol {...kol[5]} navigation={navigation} />
                      <Kol {...kol[13]} navigation={navigation} />
                    </View>
                  </View>
                  <HorizontalRule />
                </>
              )}

              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Your latest Pulse:</Text>
                {shouldRender &&
                  articles.map((el, idx) => (
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
//     articles: state.feed
//   };
// };

// export default connect(mapStateToProps)(Feed);
