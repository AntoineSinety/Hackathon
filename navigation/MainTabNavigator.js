import React from 'react';
import { Platform, Image, StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MenuScreen from '../screens/MenuScreen';
import DenreeScreen from '../screens/DenreeScreen';
import PassageScreen from '../screens/PassageScreen';

// Home
const HomeStack = createStackNavigator({
  Home: HomeScreen,
});
HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
};

//Map
const LinksStack = createStackNavigator({
  Links: LinksScreen,
});
LinksStack.navigationOptions = {
  tabBarLabel: 'Map',
};

// Settings
const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});
SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
};

//Menu
const MenuStack = createStackNavigator({
  Menu: MenuScreen,
});
MenuStack.navigationOptions = {
  tabBarLabel: 'Menu',
};


//Declarer denree
const DenreeStack = createStackNavigator({
  Menu: DenreeScreen,
});
MenuStack.navigationOptions = {
  tabBarLabel: 'Menu',
};

//Passage denree
const PassageStack = createStackNavigator({
  Menu: PassageScreen,
});
MenuStack.navigationOptions = {
  tabBarLabel: 'Passage',
};

export default createBottomTabNavigator(
  {
    HomeStack,
    MenuStack,
    SettingsStack,
    LinksStack,
    DenreeStack,
    PassageStack
  },
);


const styles = StyleSheet.create({
  compte: {
    flex: 1,
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginTop: 10
  },
  commande: {
    width: 130,
    height: 90,
    resizeMode: 'contain',
    marginTop: 10
  },
  notif: {
    flex: 1,
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginTop: 10
  }
});