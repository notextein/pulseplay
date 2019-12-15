import * as React from 'react';
import { Searchbar } from 'react-native-paper';

import Feed from './Feed';
import Profile from './Profile';
import Viewport from './Viewport';

export default class Play extends React.Component {
  state = {
    currentContent: null
  };

  contentClickHandler = content => {
    console.log('content', content);
  };

  render() {
    const { currentContent } = this.state;
    const { navigation } = this.props;

    return (
      <Viewport navigation={navigation}>
        <Feed contentClickHandler={this.contentClickHandler} />
      </Viewport>
    );
  }
}
