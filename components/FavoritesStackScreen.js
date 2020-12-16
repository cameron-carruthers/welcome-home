import React from 'react';
import FavoritesScreen from './FavoritesScreen';
import DetailsModalScreen from './DetailsModalScreen';
import {createStackNavigator} from '@react-navigation/stack';

const FavoritesStack = createStackNavigator();

function FavoritesStackScreen({favorites, favoriteIds, addFavorite, removeFavorite}) {
  return (
    <FavoritesStack.Navigator mode="modal">
      <FavoritesStack.Screen name="Favorites" options={{headerShown: false}}>
        {props => <FavoritesScreen {...props} addFavorite={addFavorite} removeFavorite={removeFavorite} favoriteIds={favoriteIds} favorites={favorites}/>}
      </FavoritesStack.Screen>
      <FavoritesStack.Screen name="Details" component={DetailsModalScreen} />
    </FavoritesStack.Navigator>
  );
}

export default FavoritesStackScreen;