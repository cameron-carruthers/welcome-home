import React from 'react';
import { ScrollView, View, Image, StyleSheet, Text } from 'react-native';
import { backgroundColor, primaryFont } from './utils';

const DetailsModalScreen = () => {
  return (
    <ScrollView style={styles.background}>
      <Image style={styles.image} source={require('../assets/sample-house.jpg')}/>
      <View style={styles.textContainer}>
        <View style={styles.containerRow}>
          <Text style={[styles.text,styles.largeText]}>$200,000</Text>
          <Text style={[styles.text, styles.mediumText]}>Townhome</Text>
        </View>
        <Text style={[styles.text, styles.smallText, styles.marginBottom]}>12122 Huron St. Apt. 204 Westminster, CO 80234</Text>
        <Text style={[styles.text, styles.mediumText, styles.marginBottom]}>Overview</Text>
        <Text style={[styles.text, styles.smallText, styles.marginBottom]}>GREAT CONDO IN NORTHGENN 2 BEDROOM AND 2 BATHROOM CLOSE TO RESTAURANTS UNDER GROUND PARKING WITH 2 SPACES AND SKIP THE STAIRS HAS ELEVATOR FOR EASY ACCESS LARGE MASTER SUITE HAS NATURAL LIGHT OPEN CONCEPT TWO SPACES IN THE GARAGE FRESHLY PAINTED CUSTOM PLANTATION SHUTTERS GRANITE COUNTER TOPS HUGE PATIO/ DECK FOR A BEAUTIFUL EVENING CUSTOM BATHROOM WITH MOSAIC TILE AND REAL WOOD APPLICATION ON THE WALLS</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: backgroundColor,
    flex: 1
  },
  image: {
    width: '100%',
    height: 300
  },
  textContainer: {
    margin: 20
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
  }
})

export default DetailsModalScreen;