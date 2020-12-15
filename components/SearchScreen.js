import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet, SectionList, Text, TouchableOpacity} from 'react-native';
import axios from 'axios';
import Card from './Card';
import {backgroundColor, primaryFont} from './utils';
import {apiKey} from '../config/config';

const SearchScreen = ({navigation, route, addFavorite, removeFavorite, favoriteIds}) => {

  const [houses, setHouses] = useState([])
  const [city, setCity] = useState('Northglenn');
  const [stateCode, setStateCode] = useState('CO');

  const searchCriteria = route ? route.params.searchCriteria: null;
  
  useEffect(() => {

    const propTypes = [];

    if (searchCriteria) {
      setCity(searchCriteria.city);
      setStateCode(searchCriteria.stateCode);

      const { singleFamily, multiFamily, condo, mobile, land, farm, other } = searchCriteria.propTypes;

      if (singleFamily) {
        propTypes.push('single_family');
      }
      if (multiFamily) {
        propTypes.push('multi-family');
      }
      if (condo) {
        propTypes.push('condo');
      }
      if (mobile) {
        propTypes.push('mobile');
      }
      if (land) {
        propTypes.push('land');
      }
      if (farm) {
        propTypes.push('farm');
      }
      if (other) {
        propTypes.push('other')
      }
    }
 
    const options = {
      method: 'GET',
      url: 'https://realtor.p.rapidapi.com/properties/v2/list-for-sale',
      params: {
        city: searchCriteria ? searchCriteria.city : 'Northglenn',
        limit: '20',
        offset: '0',
        state_code: searchCriteria ? searchCriteria.stateCode : 'CO',
        sort: 'relevance',
        price_min: searchCriteria ? searchCriteria.minPrice : null,
        price_max: searchCriteria ? searchCriteria.maxPrice : null,
        beds_min: searchCriteria ? searchCriteria.bedrooms : null,
        baths_min: searchCriteria ? searchCriteria.bathrooms : null,
        prop_type: searchCriteria ? propTypes.join(', ') : null
      },
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'realtor.p.rapidapi.com'
      }
    };

    axios.request(options)
      .then((response) => {
        const newHouses = response.data.properties.map((property) => ({
          id: property.property_id,
          price: property.price,
          city: property.address.city,
          state: property.address.state_code,
          beds: property.beds,
          baths: property.baths,
          propType: property.prop_type,
          thumbnail: property.thumbnail
        }))
        setHouses(newHouses);
    }).catch((error) => {
      console.error(error);
    });
  }, [searchCriteria]);

  const Houses = [
    { title: 'Houses', data: houses},
  ];

  return (
    <SafeAreaView style={styles.container}>
      {houses ? <SectionList
        stickySectionHeadersEnabled={false}
        style={styles.list}
        sections={Houses}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Details', {id: item.id})}>
            <Card 
              id={item.id}
              price={item.price} 
              city={item.city} 
              state={item.state}
              beds = {item.beds}
              baths={item.baths}
              propType={item.propType}
              thumbnail={item.thumbnail}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
              favoriteIds={favoriteIds}
            />
          </TouchableOpacity>
        )}
        renderSectionHeader={() => (
          <View style={styles.textContainer}>
            <Text style={styles.subText}>My next home in</Text>
            <Text style={styles.text}>{city}, {stateCode}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Preferences', {city, stateCode})}
            >
              <Text style={styles.buttonText}>Change Preferences</Text>
            </TouchableOpacity>
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

export default SearchScreen;