import * as React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Avatar } from 'react-native-paper';

import styles from '../styles';

export default class Article extends React.Component {
  handlePress = details => {
    details.navigation.navigate('Content', { ...details });
  };

  render() {
    const {
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
