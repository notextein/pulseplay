
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import HomeScreen from "./Home";

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen
});

export default createAppContainer(TabNavigator);
