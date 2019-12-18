import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

import Article from '../components/Article';
import ProfileHeader from '../components/ProfileHeader';
import ChipPreference from '../components/ChipPreference';
import Spacer from '../components/Spacer';

import store from '../ducks/store';
import articles from '../data/articles';
import readinglist from '../data/readinglist';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  },
  header: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4D4E4F'
  }
});

class MyArticles extends React.Component {
  state = {
    query: ''
  };

  render() {
    const { user } = this.props;
    const { query } = this.state;

    const { title, showReadList } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <ProfileHeader {...user} />
        <View>
          <Text style={styles.header}>{title}</Text>
        </View>
        <View style={styles.container}>
          <Spacer px={60} />
          {showReadList &&
            readinglist.map((el, idx) => (
              <Article key={idx} navigation={this.props.navigation} {...el} />
            ))}
          {!showReadList &&
            articles.map((el, idx) => (
              <Article key={idx} navigation={this.props.navigation} {...el} />
            ))}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(MyArticles);
