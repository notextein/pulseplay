import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// screens
import HomeScreen from './src/modules/Home';
import PulseScreen from './src/modules/Pulse';
import FeedScreen from './src/modules/Feed';
import ContentScreen from './src/modules/Content';
import KolProfileScreen from './src/modules/KolProfile';
import ProfileScreen from './src/modules/Profile';
import PreferenceScreen from './src/modules/Preference';
import PostScreen from './src/modules/Post';
import LoginScreen from './src/modules/Login';

// components
import HomeIconWithBadge from './src/components/HomeIconWithBadge';

const FeedStack = createStackNavigator({
  // Login: {
  //   screen: LoginScreen,
  //   navigationOptions: {
  //     headerTitle: 'Login'
  //   }
  // },
  Feed: {
    screen: FeedScreen,
    navigationOptions: {
      headerTitle: 'Pulse Feed'
    }
  },

  Content: {
    screen: ContentScreen,
    navigationOptions: {
      headerTitle: 'Content'
    }
  },
  KolProfile: {
    screen: KolProfileScreen,
    navigationOptions: {
      headerTitle: 'Key Opinion Leader'
    }
  }
});

const ProfileStack = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      headerTitle: 'Your Profile'
    }
  },
  Preference: {
    screen: PreferenceScreen,
    navigationOptions: {
      headerTitle: 'Feed Preferences'
    }
  }
});

const PostStack = createStackNavigator({
  Post: {
    screen: PostScreen,
    navigationOptions: {
      headerTitle: 'Create Post'
    }
  }
});

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='home' color={tintColor} size={25} />
      )
    }
  },
  Pulse: {
    screen: PulseScreen,
    navigationOptions: {
      tabBarLabel: 'Pulse',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='heart' color={tintColor} size={25} />
      )
    }
  },
  Post: {
    screen: PostStack,
    navigationOptions: {
      tabBarLabel: 'Post',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='plus-square-o' color={tintColor} size={25} />
      )
    }
  },
  // Feed: {
  //   screen: FeedStack,
  //   navigationOptions: {
  //     tabBarLabel: 'Feed',
  //     tabBarIcon: ({ tintColor }) => (
  //       <MCIcon name='pulse' color={tintColor} size={25} />
  //     )
  //   }
  // },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='user' color={tintColor} size={25} />
      )
    }
  }
});

export default createAppContainer(TabNavigator);
