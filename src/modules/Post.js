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
import ImagePicker from 'react-native-image-picker';

import MiniProfileHeader from '../components/MiniProfileHeader';
import PostSelection from '../components/PostSelection';

// data
import store from '../ducks/store';
import cat from '../media/catriona.jpg';

import api from '../api';

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

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      url: '',
      imageSource: null,
      ...this.props // to overwrite base state
    };
  }

  savePost = () => {
    let data = { ...this.state };
    // api.upload('/bean/create/post', data, p => {});
  };

  showImagePicker = () => {
    // Open Image Library:
    ImagePicker.launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // const source = { uri: response.uri };
        // You can also display the image using data:
        const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          imageSource: source
        });

        const data = new FormData();
        const myData = {
          title: 'Test post title 1!!!',
          content: 'Test content here 1!!!',
          owner: 'Eira Borja',
          postDate: '2019-12-16'
        };
        data.append('data', JSON.stringify(myData));
        // data.append('media_file', {
        //   uri: response.uri,
        //   type: response.type,
        //   name: response.fileName
        // });
        const config = {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data'
          },
          body: data
        };

        // "id": "",
        // "mediaType": "",
        // "media": "",
        // "thumbnail": "",
        // "preview": "",
        // "caption": "",
        // "title": "",
        // "content": "",
        // "source": "",
        // "link": "",
        // "owner": "",
        // "postDate": "",
        // "updateDate": "",
        // "approved": false,
        // "approvedBy": "",
        // "approvedDate": "",
        // "tags": "",
        // "likes": "",
        // "views": ""

        fetch('http://64.225.6.174:10001/bean/create/post', config)
          .then(checkStatusAndGetJSONResponse => {
            console.table('here please!');
            console.log(checkStatusAndGetJSONResponse);
          })
          .catch(err => {
            console.log(err);
          });
      }
    });
  };

  render() {
    const { title, content, url } = this.state;
    const { navigation } = this.props;

    // if (!this.state.imageSource) this.showImagePicker();
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
              height: 180,
              marginVertical: 5,
              borderColor: 'gray',
              borderWidth: 1
            }}
            multiline
            numberOfLines={4}
            onChangeText={text => this.setState({ content: text })}
            value={content}
          />
          {/* <View style={{ alignItems: 'flex-start' }}>
            <Image
              style={{ height: 200, width: 400 }}
              source={cat}
              resizeMode='contain'
            />
          </View> */}

          {/* {this.state.imageSource && (
            <Image
              source={this.state.imageSource}
              // style={styles.uploadAvatar}
            />
          )} */}
          <TextInput
            placeholder='Url...'
            style={styles.default}
            onChangeText={text => this.setState({ url: text })}
            value={url}
          />
          <PostSelection
            onPress={this.showImagePicker}
            icon={'photo'}
            name='Photo'
          />
        </View>
        <View style={styles.buttonArea}>
          <Button
            style={styles.button}
            icon='arrow-left'
            mode='contained'
            color='#e8e4c9'
            width={120}
            onPress={() => navigation.goBack()}
          >
            Cancel
          </Button>
          <Button
            style={styles.button}
            icon='content-save'
            mode='contained'
            color='#68737a'
            width={120}
            // color='#ed1b2c'
            onPress={() => navigation.goBack()}
          >
            Save
          </Button>
        </View>
      </ScrollView>
    );
  }
}
