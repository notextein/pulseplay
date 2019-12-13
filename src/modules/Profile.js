/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image } from 'react-native';
import { Avatar } from 'react-native-paper';

import HorizontalRule from '../components/HorizontalRule';

import styles from '../styles';
import currentUser from '../data/user'; // should be from store

import FeatherIcon from 'react-native-vector-icons/Feather';

import UserProfileItem from '../components/UserProfileItem';

export default class Profile extends React.Component {
  render() {
    return (
      <>
        <SafeAreaView>
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
        </SafeAreaView>
      </>
    );
  }
}
