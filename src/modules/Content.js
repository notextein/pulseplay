import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking
} from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';

import ProfileHeader from '../components/ProfileHeader';
import ChipTag from '../components/ChipTag';
import ContentIcons from '../components/ContentIcons';

import Share from 'react-native-share';

// data
import kol from '../data/kol';
import api from '../api';
import host from '../api/host';

import globalStyles from '../styles';

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4D4E4F'
  },
  subtitle: {
    fontSize: 12,
    opacity: 0.8,
    color: '#4D4E4F'
  },
  content: {
    fontSize: 14,
    marginTop: 25
  },
  related: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4D4E4F'
  },
  tags: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  },
  link: {
    fontSize: 14,
    color: 'blue'
  },
  iconContainer: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
});

export default class Content extends React.Component {
  openLink = url => {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  };

  shareHandler(social) {
    const options = {
      title: 'Share via Facebook',
      message: 'No one knows you like your Pulse',
      url: 'https://wedopulse.com/ph/',
      social: social
    };

    Share.shareSingle(options)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  }
  render() {
    const {
      id,
      authorId,
      title,
      content,
      author,
      postDate,
      media,
      preview,
      tags,
      link,
      navigation
    } = this.props.navigation.state.params;

    let tagsArr = [];
    if (tags) {
      tagsArr = tags.split(' ');
    }

    const imageCmp = preview ? (
      <Image
        style={{ width: 320, height: 160 }}
        resizeMode='cover'
        source={{
          uri: host + '/bean/media/' + preview
        }}
      />
    ) : (
      <View />
    );

    const linkCmp = link ? (
      <View>
        <Text style={styles.related}>Related link:</Text>
        <TouchableOpacity
          onPress={() => this.openLink(link)}
          underlayColor='gray'
          activeOpacity={0.1}
        >
          <Text style={styles.link}>{link}</Text>
        </TouchableOpacity>
      </View>
    ) : (
      <View />
    );

    const displayAuthor = author ? author : 'Pulse Author';

    return (
      <ScrollView>
        {/* <ProfileHeader
          {...this.props.navigation.state.params}
          {...authorDetails}
        />
        */}
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>
            By {displayAuthor} on {postDate}
          </Text>
          <View style={styles.tags}>
            {tagsArr.map((el, idx) => (
              <ChipTag key={'art-tag-' + idx} tag={el} />
            ))}
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity
              style={{ margin: 3 }}
              underlayColor='gray'
              activeOpacity={0.1}
            >
              <Icon
                name='bookmark'
                color={globalStyles.accent.color}
                size={25}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ margin: 3 }}
              underlayColor='gray'
              activeOpacity={0.1}
              onPress={() => this.shareHandler(Share.Social.FACEBOOK)}
            >
              <Icon name='facebook-square' color='#3b5998' size={25} />
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={{ margin: 3 }}
              underlayColor='gray'
              activeOpacity={0.1}
              onPress={() => this.shareHandler(Share.Social.EMAIL)}
            >
              <Icon5 name='facebook-messenger' color='#00acee' size={25} />
            </TouchableOpacity> */}
          </View>

          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          ></View>
          {imageCmp}
          <Text style={styles.content}>{content}</Text>
          {linkCmp}
        </View>
      </ScrollView>
    );
  }
}
