import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import Card from './Card';
import { backgroundColor } from './utils';
import { apiKey } from '../config/apiKey';

const SearchScreen = () => {

  const [houses, setHouses] = useState([]);
  const [city, setCity] = useState('Northglenn');
  const [stateCode, setStateCode] = useState('CO')
  
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://realtor.p.rapidapi.com/properties/v2/list-for-sale',
      params: {
        city: location[0],
        limit: '10',
        offset: '0',
        state_code: location[1],
        sort: 'relevance',
        postal_code: '80234',
        prop_type: '7203845692'
      },
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'realtor.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data.properties);
      setHouses(response.data.properties);
    }).catch(function (error) {
      console.error(error);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.subText}>My next home in</Text>
        <Text style={styles.text}>{city}, {stateCode}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {}}
        >
          <Text style={styles.buttonText}>Change Preferences</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <FlatList
          data={houses}
          keyExtractor={item => item.property_id}
          renderItem={({ item }) => <Card 
            price={item.price} 
            city={item.address.city} 
            state={item.address.state_code}
            beds = {item.beds}
            baths={item.baths}
            propType={item.prop_type}
            thumbnail={item.thumbnail}
            />}
        />
      </View>
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
    textAlign: 'center'
  },
  subText: {
    fontSize: 30,
    textAlign: 'center'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700'
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
  }
});

export default SearchScreen;