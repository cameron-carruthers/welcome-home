import React from 'react';
import FormModalScreen from './FormModalScreen';
import SearchScreen from './SearchScreen';
import { createStackNavigator } from '@react-navigation/stack';

const SearchStack = createStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator mode="modal">
      <SearchStack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <SearchStack.Screen name="Preferences" component={FormModalScreen} />
    </SearchStack.Navigator>
  );
}

export default SearchStackScreen;