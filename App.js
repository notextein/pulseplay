import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import HomeIconWithBadge from './src/components/HomeIconWithBadge';
import HomeScreen from './src/modules/Home';
import PlayScreen from './src/modules/Play';


const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Play: PlayScreen
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Home') {
        // iconName = `home${focused ? '' : '-outline'}`;
        iconName = `ios-home`;
        // Sometimes we want to add badges to some icons.
        // You can check the implementation below.
      } else if (routeName === 'Play') {
        iconName = `ios-heart`;

        IconComponent = HomeIconWithBadge;
      }

      // You can return any component that you like here!
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
});

export default createAppContainer(TabNavigator);