import React from 'react';
import { Chip } from 'react-native-paper';

import store from '../ducks/store';
import { addPreference, removePreference } from '../ducks/actions/user';

export default class ChipPreference extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }
  togglePreference = (tag, isPreferred) => {
    let newPref = !isPreferred;
    if (newPref) {
      store.dispatch(addPreference(tag));
    } else {
      store.dispatch(removePreference(tag));
    }
    this.setState({ tag, isPreferred: newPref });
  };

  render() {
    const { tag, isPreferred } = this.state;

    return (
      <Chip
        style={{ margin: 5 }}
        selected={isPreferred}
        onPress={() => this.togglePreference(tag, isPreferred)}
      >
        {tag}
      </Chip>
    );
  }
}
