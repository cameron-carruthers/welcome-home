import React from 'react';
import { View, SafeAreaView, StyleSheet, SectionList, Text, TouchableOpacity } from 'react-native';
import Card from './Card';
import { backgroundColor, primaryFont } from './utils';

const FavoritesScreen = ({ navigation, favorites, favoriteIds, addFavorite, removeFavorite }) => {

  const Favorites = [
    { title: 'Favorites', data: favorites},
  ];

  return (
    <SafeAreaView style={styles.container}>
      {favorites ? <SectionList
        stickySectionHeadersEnabled={false}
        style={styles.list}
        sections={Favorites}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('Details', {id: item.id})}>
            <Card 
              id={item.id}
              price={item.price} 
              city={item.city} 
              state={item.state}
              beds={item.beds}
              baths={item.baths}
              propType={item.propType}
              thumbnail={item.thumbnail}
              favoriteIds={favoriteIds}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
            />
          </TouchableOpacity>
        )}
        renderSectionHeader={() => (
          <View style={styles.textContainer}>
            <Text style={styles.text}>My Favorites</Text>
          </View>
        )}
      /> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: primaryFont
  },
  subText: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: primaryFont
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: primaryFont
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 5,
    padding: 10,
    fontSize: 20
  },
  pickerInput: {
    flex: 1,
    color: 'white'
  },
  button: {
    backgroundColor: 'white',
    height: 40,
    width: 200,
    justifyContent: 'center',
    borderRadius: 100,
    margin: 10
  },
  list: {
    flex: 1
  }
});

export default FavoritesScreen;