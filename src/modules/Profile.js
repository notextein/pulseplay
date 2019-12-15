import React from 'react';
import { ScrollView } from 'react-native';

import ProfileHeader from '../components/ProfileHeader';
import UserProfileItem from '../components/UserProfileItem';

import currentUser from '../data/user'; // should be from store

export default class Profile extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <ProfileHeader {...currentUser} />
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
