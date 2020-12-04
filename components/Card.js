import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const Card = () => (
  <View style={styles.cardContainer}>
    <Image style={styles.image} source={require('../assets/sample-house.jpg')}/>
    <View style={styles.textContainer}>
      <View>
        <Text style={[styles.largeText, styles.text]}>$300,000</Text>
        <Text style={[styles.smallText, styles.text]}>Northglenn, CO</Text>
      </View>
      <View>
        <Text style={[styles.mediumText, styles.text]}>Townhome</Text>
        <Text style={[styles.smallText, styles.text]}>2 bed 2 bath</Text> 
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
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 16, 
    elevation: 10,
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
    flex: 1
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