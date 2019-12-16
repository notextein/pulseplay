import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';

import ChipTag from './ChipTag';

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
    padding: 10,
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
  }
});

export default class Article extends React.Component {
  handlePress = details => {
    details.navigation.navigate('Content', { ...details });
  };

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

    let tagsArr = [];
    if (tags) {
      tagsArr = tags.split(' ');
    }

    return (
      <TouchableOpacity
        onPress={() => this.handlePress({ ...this.props })}
        underlayColor='gray'
        activeOpacity={0.1}
      >
        <View style={styles.articleSnippet}>
          <Text style={styles.articleSnippetTitle}>{title}</Text>
          <Text style={styles.articleSnippetAuthor}>
            By test author on {postDate}
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
          {/* 
          <Avatar.Image
            style={styles.articleSnippetAvatar}
            size={40}
            source={img}
          /> */}
        </View>
      </TouchableOpacity>
    );
  }
}
