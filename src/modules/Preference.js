import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Chip } from 'react-native-paper';

import ProfileHeader from '../components/ProfileHeader';
import ChipPreference from '../components/ChipPreference';

import store from '../ducks/store';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  }
});

class Preference extends React.Component {
  render() {
    const { user, tags, preference } = this.props;
    let prefMasterList = []; // holder

    preference.map(el => {
      prefMasterList.push({ tag: el, isPreferred: true });
    });
    tags.map(el => {
      if (prefMasterList.find(foo => foo.tag === el)) {
        // if element exists, skip
      } else {
        prefMasterList.push({ tag: el, isPreferred: false });
      }
    });

    return (
      <ScrollView>
        <ProfileHeader {...user} />
        <View style={styles.container}>
          {prefMasterList.map((el, idx) => {
            return <ChipPreference key={'chippref-' + idx} {...el} />;
          })}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    user: state.auth,
    tags: state.refs.tags,
    preference: state.user.preference
  };
};

export default connect(mapStateToProps)(Preference);
