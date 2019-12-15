import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image } from 'react-native';
import { Avatar } from 'react-native-paper';

import Viewport from './Viewport';
import HorizontalRule from '../components/HorizontalRule';

import styles from '../styles';
import currentUser from '../data/user'; // should be from store

import FeatherIcon from 'react-native-vector-icons/Feather';

import UserProfileItem from '../components/UserProfileItem';

export default class Profile extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <>
        <Viewport navigation={navigation}>
          <View style={{ marginLeft: 30 }}>
            <View flexDirection='row' style={{ marginTop: 50 }}>
              <Avatar.Image size={120} source={currentUser.img} />
              <View style={{ marginLeft: 20 }}>
                <Text style={styles.userDisplayName}>
                  {currentUser.firstname}
                </Text>
                <Text style={styles.userDisplayName}>
                  {currentUser.lastname}
                </Text>
              </View>
            </View>
          </View>
          <HorizontalRule />
          <UserProfileItem name='Customise' />
          <UserProfileItem name='Feed Preferences' red={true} />
          <UserProfileItem name='Security' />
          <UserProfileItem name='Language' />
          <UserProfileItem name='Provide Feedback' />
          <UserProfileItem name='Legal and Privacy' />
        </Viewport>
      </>
    );
  }
}
