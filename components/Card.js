import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import primaryFont from './utils';

const Card = ({price, city, state, beds, baths, propType, thumbnail}) => (
  <View style={styles.cardContainer}>
    <Image style={styles.image} source={{
          uri: thumbnail,
        }}/>
    <View style={styles.textContainer}>
      <View>
        <Text style={[styles.largeText, styles.text]}>
          ${price.toString().slice(0, 3)},{price.toString().slice(3)}</Text>
        <Text style={[styles.smallText, styles.text]}>{city}, {state}</Text>
      </View>
      <View>
        <Text style={[styles.mediumText, styles.text]}>{propType === 'single_family' ? 'House' : propType.slice(0, 1).toUpperCase() + propType.slice(1)}</Text>
        <Text style={[styles.smallText, styles.text]}>{beds} bed {baths} bath</Text> 
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  cardContainer: {
    width: 335,
    height: 272,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5, 
    elevation: 10,
    marginBottom: 25
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 5
  },
  image: {
    width: 335,
    height: 217,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  text: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    fontFamily: primaryFont
  },
  largeText: {
    fontSize: 20,
    fontWeight: '700',
  },
  mediumText: {
    fontSize: 18,
    fontWeight: '600'
  },
  smallText: {
    fontSize: 16
  }
});

export default Card;