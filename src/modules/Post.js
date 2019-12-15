import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from 'react-native';

import { Button } from 'react-native-paper';

import MiniProfileHeader from '../components/MiniProfileHeader';

// data
import store from '../ducks/store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20
  },
  default: {
    marginVertical: 5,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  buttonArea: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  button: {
    margin: 5
  }
});

export default class Post extends React.Component {
  state = {
    title: '',
    content: '',
    url: '',
    padding: 10
  };
  render() {
    const { title, content, url } = this.state;
    const { navigation } = this.props;
    return (
      <ScrollView>
        <View style={styles.container}>
          <MiniProfileHeader {...store.getState().user} />

          <TextInput
            placeholder='Your post title...'
            style={styles.default}
            onChangeText={text => this.setState({ title: text })}
            value={title}
          />
          <TextInput
            placeholder='Tell us more...'
            style={{
              height: 200,
              marginVertical: 5,
              borderColor: 'gray',
              borderWidth: 1
            }}
            multiline
            numberOfLines={4}
            onChangeText={text => this.setState({ content: text })}
            value={content}
          />
          <TextInput
            placeholder='Url...'
            style={styles.default}
            onChangeText={text => this.setState({ url: text })}
            value={url}
          />
        </View>
        <View style={styles.buttonArea}>
          <Button
            style={styles.button}
            icon='arrow-left'
            mode='contained'
            color='#e8e4c9'
            onPress={() => navigation.goBack()}
          >
            Cancel
          </Button>
          <Button
            style={styles.button}
            icon='content-save'
            mode='contained'
            color='#68737a'
            onPress={() => navigation.goBack()}
          >
            Save
          </Button>
        </View>
      </ScrollView>
    );
  }
}
