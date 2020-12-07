import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, StyleSheet, SectionList, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Card from './Card';
import { backgroundColor, primaryFont } from './utils';

const FavoritesScreen = ({ navigation }) => {

  const [houses, setHouses] = useState([]);
  
  useEffect(() => {

    axios.get()
    .then((response) => {
      setHouses(response.data)
    }).catch((error) => {
      console.error(error);
    })
  }, []);

  const Houses = [
    { title: 'Houses', data: houses},
  ];

  return (
    <SafeAreaView style={styles.container}>
      {houses ? <SectionList
        stickySectionHeadersEnabled={false}
        style={styles.list}
        sections={Houses}
        keyExtractor={item => item.property_id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Details', { propertyID: item.property_id })}>
            <Card 
              price={item.price} 
              city={item.address.city} 
              state={item.address.state_code}
              beds = {item.beds}
              baths={item.baths}
              propType={item.prop_type}
              thumbnail={item.thumbnail}
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