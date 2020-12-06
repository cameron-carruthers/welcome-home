import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from './components/HomeScreen';
import FavoritesScreen from './components/FavoritesScreen';
import RootSearchStackScreen from './components/SearchStackScreen';
import { backgroundColor } from './components/utils';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home';
            } else if (route.name === 'Search') {
              iconName = focused ? 'ios-search' : 'ios-search';
            } else {
              iconName = focused ? 'ios-heart' : 'ios-heart-empty'
            }

            // You can return any component that you like here!
            return <Ionicons style={styles.icon} name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'green',
          inactiveTintColor: 'black',
          activeBackgroundColor: 'white',
          inactiveBackgroundColor: backgroundColor,
          tabStyle: { paddingBottom: 5, paddingTop: 5},
          labelStyle: { fontSize: 12, fontFamily: 'Helvetica' }
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={RootSearchStackScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 25
  }
});
