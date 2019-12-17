import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import ProfileHeader from '../components/ProfileHeader';
import Article from '../components/Article';

import articles from '../data/articles';

export default class KolProfile extends React.Component {
  render() {
    const {
      id,
      img,
      firstname,
      lastname,
      fullname
    } = this.props.navigation.state.params; // so we know what obj looks like
    const displayName = firstname ? firstname : fullname;

    let posts = [];
    articles.map(el => {
      if (el.authorId === id) {
        posts.push(el);
      }
    });

    return (
      <ScrollView>
        <ProfileHeader {...this.props.navigation.state.params} />
        <View style={{ marginLeft: 20 }}>
          <Text style={{ marginVertical: 20 }}>{displayName}'s posts...</Text>
          {/* {posts.map((el, idx) => (
            <Article key={idx} navigation={this.props.navigation} {...el} />
          ))} */}
        </View>
      </ScrollView>
    );
  }
}
