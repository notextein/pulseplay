import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';

import HorizontalRule from '../components/HorizontalRule';

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

export default class ProfileHeader extends React.Component {
  render() {
    const { img, firstname, lastname, fullname } = this.props;
    return (
      <>
        <View style={styles.header}>
          <Avatar.Image size={120} source={img} />
          <View style={{ marginLeft: 20 }}>
            <Text style={styles.userDisplayName}>
              {firstname ? firstname : fullname}
            </Text>
            <Text style={styles.userDisplayName}>{lastname}</Text>
          </View>
        </View>
        <HorizontalRule />
      </>
    );
  }
}
