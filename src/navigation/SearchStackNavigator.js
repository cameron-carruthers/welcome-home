import React from 'react';
import FormModalScreen from '../screens/FormModalScreen';
import DetailsModalScreen from '../screens/DetailsModalScreen';
import SearchScreen from '../screens/SearchScreen';
import { createStackNavigator } from '@react-navigation/stack';

const SearchStack = createStackNavigator();

function SearchStackNavigator({ addFavorite, removeFavorite, favoriteIds }) {
  return (
    <SearchStack.Navigator mode='modal'>
      <SearchStack.Screen name='Search' options={{headerShown: false}}>
        {props => <SearchScreen {...props} addFavorite={addFavorite} removeFavorite={removeFavorite} favoriteIds={favoriteIds}/>}
      </SearchStack.Screen>
      <SearchStack.Screen name='Preferences' component={FormModalScreen} />
      <SearchStack.Screen name='Details' component={DetailsModalScreen} />
    </SearchStack.Navigator>
  );
}

export default SearchStackNavigator;