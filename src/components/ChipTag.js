import React from 'react';
import { Chip } from 'react-native-paper';

import store from '../ducks/store';
import { addPreference, removePreference } from '../ducks/actions/user';

export default class ChipTag extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }
  render() {
    const { tag, isPreferred } = this.state;

    return (
      <Chip style={{ margin: 2 }} selected={isPreferred}>
        #{tag}
      </Chip>
    );
  }
}
