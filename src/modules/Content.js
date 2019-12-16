import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfileHeader from '../components/ProfileHeader';
import ChipTag from '../components/ChipTag';

// data
import kol from '../data/kol';
import api from '../api';

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
  }
});

export default class Content extends React.Component {
  render() {
    const {
      id,
      authorId,
      title,
      content,
      author,
      postDate,
      img,
      tags,
      navigation
    } = this.props.navigation.state.params;

    console.log('content.props!!!!', this.props.navigation.state.params);

    let tagsArr = [];
    if (tags) {
      tagsArr = tags.split(' ');
    }

    return (
      <ScrollView>
        {/* <ProfileHeader
          {...this.props.navigation.state.params}
          {...authorDetails}
        />
        */}
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>By test author on {postDate}</Text>
          <View style={styles.tags}>
            {tagsArr.map((el, idx) => (
              <ChipTag key={'art-tag-' + idx} tag={el} />
            ))}
          </View>
          <View style={{ marginTop: 20, alignItems: 'flex-start' }}>
            <Button
              icon='bookmark'
              mode='contained'
              color='#68737a'
              onPress={() => console.log('Pressed')}
            >
              Bookmark
            </Button>
          </View>
          <Text style={styles.content}>{content}</Text>
          <Text style={styles.related}>Related articles here...</Text>
        </View>
      </ScrollView>
    );
  }
}
