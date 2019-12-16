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
      ...this.props // to overwrite base prop
    };
  }

  updateQuery = query => {
    let local = [];

    // store.dispatch(saveSearchQuery(query));
  };

  render() {
    // const unsubscribe = store.subscribe(() => console.log(store.getState()));
    if (!store.getState().user.id) {
      store.dispatch(saveAuth(currentUser));
      store.dispatch(setUser(currentUser));
    }

    const { query, articles } = this.state;
    const { navigation } = this.props;

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

    // fetch feeds
    if (this.state.articles.length == 0) {
      api.post('/bean/query/searchPost', { q: '%' + query + '%' }, p => {
        if (p.success) {
          console.log('searchPost query');
          // store.dispatch(saveFeeds(p.result));
          this.setState({ articles: p.result });
          // this.setState({ articles: [{ title: 'ito na po', owner: 'ako' }] });
        }
      });
    }

    const shouldRender = articles.length > 0;
    console.log('this.state!!!', this.state);
    console.log('shouldRender!!!', shouldRender);

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
                this.setState({ query: text.toLowerCase() });
              }}
              value={query}
            />

            {/* {
              query && (
                
              )
            } */}
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
