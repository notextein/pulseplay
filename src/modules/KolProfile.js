import React from 'react';
import { ScrollView, Text } from 'react-native';
import ProfileHeader from '../components/ProfileHeader';

export default class KolProfile extends React.Component {
  render() {
    const {
      id,
      img,
      firstname,
      lastname,
      fullname
    } = this.props.navigation.state.params; // so we know what obj looks like
    return (
      <ScrollView>
        <ProfileHeader {...this.props.navigation.state.params} />
        <View style={{ marginLeft: 20, marginTop: 20 }}>
          <Text>Articles published here...</Text>
        </View>
      </ScrollView>
    );
  }
}
