import React from 'react';
import FormModalScreen from './FormModalScreen';
import DetailsModalScreen from './DetailsModalScreen';
import SearchScreen from './SearchScreen';
import {createStackNavigator} from '@react-navigation/stack';

const SearchStack = createStackNavigator();

function SearchStackScreen({addFavorite, removeFavorite, favoriteIds}) {
  return (
    <SearchStack.Navigator mode="modal">
      <SearchStack.Screen
        name="Search"
        children={() => <SearchScreen 
          addFavorite={addFavorite} 
          removeFavorite={removeFavorite} 
          favoriteIds={favoriteIds}
        />}
        options={{headerShown: false}}
      />
      <SearchStack.Screen name="Preferences" component={FormModalScreen} />
      <SearchStack.Screen name="Details" component={DetailsModalScreen} />
    </SearchStack.Navigator>
  );
}

export default SearchStackScreen;