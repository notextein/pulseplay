import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import ProfileHeader from '../components/ProfileHeader';

// data
import kol from '../data/kol';

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4D4E4F'
  },
  subtitle: {
    fontSize: 12,
    opacity: 0.8,
    color: '#4D4E4F'
  },
  content: {
    fontSize: 16,
    marginTop: 25
  }
});

export default class Content extends React.Component {
  render() {
    const {
      authorId,
      title,
      content,
      author,
      datePublished,
      img,
      navigation
    } = this.props.navigation.state.params;

    console.log('authorId', authorId);
    const authorDetails = { ...kol.find(el => el.id === authorId) };
    return (
      <ScrollView>
        <ProfileHeader
          {...this.props.navigation.state.params}
          {...authorDetails}
        />
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>
            By {author} on {datePublished}
          </Text>
          <Text style={styles.content}>{content}</Text>
        </View>
      </ScrollView>
    );
  }
}
