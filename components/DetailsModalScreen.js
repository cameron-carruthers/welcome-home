import React, { useEffect, useState } from 'react';
import { ScrollView, View, Image, StyleSheet, Text, SectionList } from 'react-native';
import axios from 'axios';
import { backgroundColor, primaryFont, formatPropertyType, insertCommas } from './utils';
import CellRow from './CellRow';
import { apiKey } from '../config/config';

const DetailsModalScreen = ({ route }) => {

  const [details, setDetails] = useState(null);
  const id = route.params ? route.params.id : null;

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://realtor.p.rapidapi.com/properties/v2/detail',
      params: { 
        property_id: route.params.id
      },
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'realtor.p.rapidapi.com'
      }
    };

    axios.request(options)
      .then((response) => {
      setDetails(response.data.properties[0]);
    }).catch((error) => {
      console.error(error);
    });
  }, [id]);

  const Photos = details ? [
    { title: 'Photos', data: details.photos},
  ] : null;

  return (
    <View style={styles.background}>
      {details ? details.photos ? <SectionList
        stickySectionHeadersEnabled={false}
        sections={Photos}
        keyExtractor={item => Math.random() }
        renderItem={({ item }) => (
          <Image style={styles.image} source={{
            uri: item.href,
          }}/>
        )}
        renderSectionHeader={() => (
          <View>
            {details.photos ? <Image style={styles.image} source={{
              uri: details.photos[0].href,
            }}/> : <View style={[styles.image, styles.imagePlaceholder]}/>}
            <View style={styles.textContainer}>
              <View style={styles.containerRow}>
                <Text style={[styles.text,styles.largeText]}>
                  ${insertCommas(details.price)}
                </Text>
                <Text style={[styles.text, styles.mediumText]}>
                  {formatPropertyType(details.prop_type)}
                </Text>
              </View>
              {details.address.city
              ? <Text style={[styles.text, styles.smallText, styles.marginBottom]}>
                {details.address.line} {details.address.city}, {details.address.state_code} {details.address.zip_code}
              </Text>
              : <Text style={[styles.text, styles.smallText, styles.marginBottom]}>
                {details.address.state_code} {details.address.zip_code}
              </Text>}
              <View style={styles.marginBottom}>
                <CellRow beds={details.beds} baths={details.baths} sqft={details.building_size ? details.building_size.size : null} lot={details.lot_size ? details.lot_size.size : null}/>
              </View>
              <Text style={[styles.text, styles.mediumText, styles.marginBottom]}>Overview</Text>
              <Text style={[styles.text, styles.smallText, styles.marginBottom]}>{details.description}</Text>
            </View>
          </View>
        )}
      /> 
      : 
      <ScrollView>
        {details.photos ? <Image style={styles.image} source={{
          uri: details.photos[0].href,
        }}/> : <View style={[styles.image, styles.imagePlaceholder]}/>}
        <View style={styles.textContainer}>
          <View style={styles.containerRow}>
            <Text style={[styles.text,styles.largeText]}>
              ${insertCommas(details.price)}
            </Text>
            <Text style={[styles.text, styles.mediumText]}>
              {formatPropertyType(details.prop_type)}
            </Text>
          </View>
          {details.address.city
          ? <Text style={[styles.text, styles.smallText, styles.marginBottom]}>
            {details.address.line} {details.address.city}, {details.address.state_code} {details.address.zip_code}
          </Text>
          : <Text style={[styles.text, styles.smallText, styles.marginBottom]}>
            {details.address.state_code} {details.address.zip_code}
          </Text>}
          <View style={styles.marginBottom}>
            <CellRow beds={details.beds} baths={details.baths} sqft={details.building_size ? details.building_size.size : null} lot={details.lot_size ? details.lot_size.size : null}/>
          </View>
          <Text style={[styles.text, styles.mediumText, styles.marginBottom]}>Overview</Text>
          <Text style={[styles.text, styles.smallText, styles.marginBottom]}>{details.description}</Text>
        </View>
      </ScrollView>
      :
      <Text style={[styles.text, styles.loading]}>Loading...</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: backgroundColor,
    flex: 1
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 20
  },
  imagePlaceholder: {
    backgroundColor: 'grey'
  },
  textContainer: {
    marginLeft: 20,
    marginRight: 20
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  text: {
    fontFamily: primaryFont
  },
  largeText: {
    fontSize: 30,
    fontWeight: '700'
  },
  mediumText: {
    fontSize: 20,
    fontWeight: '700'
  },
  smallText: {
    fontSize: 14
  },
  marginBottom: {
    marginBottom: 20
  },
  loading: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '700',
    margin: 20
  }
})

export default DetailsModalScreen;