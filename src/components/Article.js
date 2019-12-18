import * as React from 'react';
import { Image, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';
import Share from 'react-native-share';

import ChipTag from './ChipTag';
import ToggledIcon from './ToggledIcon';

import api from '../api';
import host from '../api/host';

const styles = StyleSheet.create({
  articleSnippet: {
    borderRadius: 4,
    borderWidth: 0.5,
    padding: 10,
    marginVertical: 5,
    height: 240,
    borderColor: '#d6d7da'
  },
  articleSnippetTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4D4E4F'
  },
  articleSnippetAuthor: {
    fontSize: 12,
    opacity: 0.8,
    color: '#4D4E4F'
  },
  articleSnippetContent: {
    fontSize: 12,
    alignItems: 'center'
  },
  articleSnippetAvatar: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 10
  },
  articleSnippetReadMore: {
    fontSize: 11,
    opacity: 0.8,
    color: '#4D4E4F',
    position: 'absolute',
    bottom: 10,
    left: 10
  },
  iconContainer: {
    maxHeight: 30,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});

export default class Article extends React.Component {
  state = {
    thumbnail: this.props.thumbnail
  };
  handlePress = details => {
    const { id } = details;
    api.get('/bean/find/post/' + id, p => {
      if (p.success) {
        details.navigation.navigate('Content', { ...p.result[0] });
      }
    });
  };

  shareHandler() {
    const options = {
      title: 'Share content via',
      message: 'No one knows you like your Pulse',
      url: 'https://wedopulse.com/ph/'
    };

    Share.open(options)
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
      caption,
      author,
      postDate,
      img,
      tags,
      navigation
    } = this.props;

    const { thumbnail } = this.state;

    let tagsArr = [];
    if (tags) {
      let tempArr = [];
      tempArr = tags.split(' ');
      for (let i = 0; i < 3 && i < tempArr.length; i++) {
        tagsArr[i] = tempArr[i];
      }
    }

    let authorDisplay = author ? author : 'Pulse Author';

    const avatarCmp = thumbnail ? (
      <Avatar.Image
        style={styles.articleSnippetAvatar}
        size={40}
        source={{
          uri: host + '/bean/media/' + thumbnail
        }}
      />
    ) : (
      <View />
    );

    return (
      <TouchableOpacity
        onPress={() => this.handlePress({ ...this.props })}
        underlayColor='gray'
        activeOpacity={0.1}
      >
        <View style={styles.articleSnippet}>
          <Text style={styles.articleSnippetTitle}>{title}</Text>
          <Text style={styles.articleSnippetAuthor}>
            By {authorDisplay} on {postDate}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              flexWrap: 'wrap'
            }}
          >
            {tagsArr.map((el, idx) => (
              <ChipTag key={'art-tag-' + idx} tag={el} />
            ))}
          </View>
          <View style={styles.iconContainer}>
            <ToggledIcon
              size={25}
              icon='heart-o'
              pressedIcon='heart'
              defaultColor='#a83f39'
            />
            <ToggledIcon size={25} icon='book' defaultColor='#a0522d' />
            <ToggledIcon
              size={25}
              icon='share-square-o'
              defaultColor='#3b5998'
              handlePress={this.shareHandler}
            />
          </View>

          <Text
            style={styles.articleSnippetContent}
            ellipsizeMode='tail'
            numberOfLines={4}
          >
            {caption}
          </Text>
          <View style={styles.articleSnippetReadMore}>
            <Text>Continue reading...</Text>
          </View>
          {avatarCmp}
        </View>
      </TouchableOpacity>
    );
  }
}
