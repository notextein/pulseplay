import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

import ProfileHeader from '../components/ProfileHeader';
import ChipPreference from '../components/ChipPreference';
import Spacer from '../components/Spacer';

import store from '../ducks/store';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  },
  header: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4D4E4F'
  }
});

class Preference extends React.Component {
  state = {
    query: ''
  };

  render() {
    const { user, tags, preference } = this.props;
    const { query } = this.state;
    let prefMasterList = [],
      filtered = []; // holder

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

    if (query) {
      prefMasterList.map(el => {
        let tag = el.tag.toLowerCase();
        if (tag.search(query) === -1) {
          // not found. ignore or handle if you want
        } else {
          filtered.push({ ...el });
        }
      });
    } else {
      filtered = [...prefMasterList];
    }

    console.table(filtered);

    return (
      <ScrollView>
        <ProfileHeader {...user} />
        <View>
          <Text style={styles.header}>What interests you?</Text>
        </View>
        <View style={styles.container}>
          <Searchbar
            placeholder='Search for tags...'
            onChangeText={text => {
              this.setState({ query: text.toLowerCase() });
            }}
            value={query}
          />
          <Spacer px={60} />
          {filtered.map((el, idx) => {
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
