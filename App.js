import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeScreen from './src/screens/HomeScreen';
import FavoritesStackNavigator from './src/navigation/FavoritesStackNavigator';
import SearchStackNavigator from './src/navigation/SearchStackNavigator';
import { backgroundColor } from './src/utils';

const Tab = createBottomTabNavigator();

const App = () => {

  const [favoriteIds, setFavoriteIds] = useState({});
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    //Populate state with favorite Ids in local storage
    AsyncStorage.getItem('@favoriteIds')
      .then((data) => {
        data ? setFavoriteIds(JSON.parse(data)) : null;
      })
     //Populate state with favorites in local storage
    AsyncStorage.getItem('@favorites')
      .then((data) => {
        data ? setFavorites(JSON.parse(data)) : null;
      })
  }, []);

  const addFavorite = (favorite) => {
    // Update favoriteIds in state
    const newFavoriteIds = favoriteIds;
    if (newFavoriteIds[favorite.id]) {
      return
    }
    newFavoriteIds[favorite.id] = true;
    setFavoriteIds(newFavoriteIds);
    // Update favoriteIds in AsyncStorage
    const jsonIds = JSON.stringify(newFavoriteIds)
    AsyncStorage.setItem('@favoriteIds', jsonIds);

    //Update favorites array in state
    const newFavorites = [...favorites, favorite]
    setFavorites(newFavorites);
    //Update favorites array in AsyncStorage
    const jsonFavorites = JSON.stringify(newFavorites);
    AsyncStorage.setItem('@favorites', jsonFavorites)
  };

  const removeFavorite = (id) => {
    //Remove from favoriteIds in state
    const newFavoriteIds = favoriteIds;
    delete newFavoriteIds[id];
    setFavoriteIds(newFavoriteIds);
    //Remove from favoriteIds in AsyncStorage
    const jsonIds = JSON.stringify(newFavoriteIds);
    AsyncStorage.setItem('@favoriteIds', jsonIds);

    //Remove from favorites in state
    const newFavorites = favorites;
    const filteredFavorites = newFavorites.filter(favorite => favorite.id !== id);
    setFavorites(filteredFavorites);

    //Remove from favorites in AsyncStorage
    const jsonFavorites = JSON.stringify(newFavorites);
    AsyncStorage.setItem('@favorites', jsonFavorites);
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
            <SearchStackNavigator 
              addFavorite={addFavorite} 
              removeFavorite={removeFavorite}
              favoriteIds={favoriteIds}
            />
          )}
        />
        <Tab.Screen 
          name="Favorites"
          children={() => <FavoritesStackNavigator 
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