import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';

const styles = StyleSheet.create({
  articleSnippet: {
    borderRadius: 4,
    borderWidth: 0.5,
    padding: 10,
    marginVertical: 5,
    height: 175,
    borderColor: '#d6d7da'
  },
  articleSnippetTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#4D4E4F'
  },
  articleSnippetAuthor: {
    fontSize: 11,
    opacity: 0.8,
    color: '#4D4E4F'
  },
  articleSnippetContent: {
    padding: 10,
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
  }
});

export default class Article extends React.Component {
  handlePress = details => {
    details.navigation.navigate('Content', { ...details });
  };

  render() {
    const {
      authorId,
      title,
      content,
      author,
      datePublished,
      img,
      navigation
    } = this.props;
    return (
      <TouchableOpacity
        onPress={() => this.handlePress({ ...this.props })}
        underlayColor='gray'
        activeOpacity={0.1}
      >
        <View style={styles.articleSnippet}>
          <Text style={styles.articleSnippetTitle}>{title}</Text>
          <Text style={styles.articleSnippetAuthor}>
            By {author} on {datePublished}
          </Text>
          <Text
            style={styles.articleSnippetContent}
            ellipsizeMode='tail'
            numberOfLines={4}
          >
            {content}
          </Text>
          <View style={styles.articleSnippetReadMore}>
            <Text>Continue reading...</Text>
          </View>

          <Avatar.Image
            style={styles.articleSnippetAvatar}
            size={40}
            source={img}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
