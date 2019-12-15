import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { Provider } from 'react-redux';
import store from './src/ducks/store';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ed1b2c', // rgb: 237 27 46, hex: #ed1b2c
    accent: '#68737a' // rgb: 104 115 122, hex: #68737a
  }
};

export default function Main() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
