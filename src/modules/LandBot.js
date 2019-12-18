import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class LandBot extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://infinite.red' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}
