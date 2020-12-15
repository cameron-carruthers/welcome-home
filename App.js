import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from './components/HomeScreen';
import FavoritesScreen from './components/FavoritesScreen';
import SearchStackScreen from './components/SearchStackScreen';
import { backgroundColor } from './components/utils';

const Tab = createBottomTabNavigator();

const App = () => {

  const [favoriteIds, setFavoriteIds] = useState({});
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (favorite) => {
    const newFavoriteIds = favoriteIds;
    if (newFavoriteIds[favorite.id]) {
      return
    }
    newFavoriteIds[favorite.id] = true;
    setFavoriteIds(newFavoriteIds)
    setFavorites([...favorites, favorite])
  };

  const removeFavorite = (id) => {
    const newFavoriteIds = favoriteIds;
    delete newFavoriteIds[id];
    setFavoriteIds(newFavoriteIds)
    const newFavorites = favorites;
    const filteredFavorites = newFavorites.filter(favorite => favorite.id !== id);
    setFavorites(filteredFavorites)
  };

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
        <Tab.Screen 
          name="Search"
          children={() => ( 
            <SearchStackScreen 
              remove
              addFavorite={addFavorite} 
              removeFavorite={removeFavorite}
              favoriteIds={favoriteIds}
            />
          )}
        />
        <Tab.Screen 
          name="Favorites"
          children={() => <FavoritesScreen 
            favorites={favorites} 
            favoriteIds={favoriteIds} 
            addFavorite={addFavorite} 
            removeFavorite={removeFavorite}
          />}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 25
  }
});

export default App;