import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';

import Viewport from './Viewport';
import HorizontalRule from '../components/HorizontalRule';

import currentUser from '../data/user'; // should be from store

import FeatherIcon from 'react-native-vector-icons/Feather';

import UserProfileItem from '../components/UserProfileItem';

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  userDisplayName: {
    color: '#4D4E4F',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 10
  }
});

export default class Profile extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <View style={styles.header}>
          <Avatar.Image size={120} source={currentUser.img} />
          <View style={{ marginLeft: 20 }}>
            <Text style={styles.userDisplayName}>{currentUser.firstname}</Text>
            <Text style={styles.userDisplayName}>{currentUser.lastname}</Text>
          </View>
        </View>
        <HorizontalRule />
        <UserProfileItem name='Customise' />
        <UserProfileItem
          name='Feed Preferences'
          navigation={navigation}
          red={true}
        />
        <UserProfileItem name='Security' />
        <UserProfileItem name='Language' />
        <UserProfileItem name='Provide Feedback' />
        <UserProfileItem name='Legal and Privacy' />
      </ScrollView>
    );
  }
}
