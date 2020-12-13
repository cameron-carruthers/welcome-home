import React, { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest, useAutoDiscovery } from 'expo-auth-session';
import { StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from './components/HomeScreen';
import FavoritesScreen from './components/FavoritesScreen';
import RootSearchStackScreen from './components/SearchStackScreen';
import { backgroundColor } from './components/utils';
import { oktaDomain, clientID, oktaRedirectURI } from './config/config';

const Tab = createBottomTabNavigator();
WebBrowser.maybeCompleteAuthSession();
const useProxy = Platform.select({ web: false, default: true });

const App = () => {

  // Endpoint
  const discovery = useAutoDiscovery(`https://${oktaDomain}.okta.com/oauth2/default`);
  // Request
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: clientID,
      scopes: ['openid', 'profile'],
      // For usage in managed apps using the proxy
      redirectUri: makeRedirectUri({
        // For usage in bare and standalone
        native: 'https://auth.expo.io/@clcarruthers/welcomeHome',
        useProxy
      }),
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
      console.log('response', response)
      console.log('code', code)
      }
  }, [response]);

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
        <Tab.Screen 
          name="Home"
          children={() => <HomeScreen 
            request={request} 
            promptAsync={promptAsync}
            useProxy={useProxy}
          />}
        />
        <Tab.Screen name="Search" component={RootSearchStackScreen} />
        <Tab.Screen 
          name="Favorites"
          children={() => <FavoritesScreen request={request} promptAsync={promptAsync}/>}
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