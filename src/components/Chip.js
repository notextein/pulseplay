import * as React from 'react';
import { Chip } from 'react-native-paper';

const MyChip = () => (
  <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
);

export default MyChip;