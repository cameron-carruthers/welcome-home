import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { primaryFont, backgroundColor, insertCommas } from '../utils';

const Card = ({ id, price, city, state, beds, baths, propType, thumbnail, addFavorite, removeFavorite, favoriteIds }) => (
  <View style={styles.cardContainer}>
  {favoriteIds[id]
  ? <TouchableOpacity style={styles.iconButton} onPress={() => {removeFavorite(id)}}>
      <FontAwesomeIcon style={styles.favorite} icon={faHeart} size={60} />
    </TouchableOpacity>
  : <TouchableOpacity style={styles.iconButton} onPress={() => {
      addFavorite({
        id,
        price,
        city,
        state,
        beds,
        baths,
        propType,
        thumbnail
      })
    }}>
      <FontAwesomeIcon style={styles.notFavorite} icon={faHeartOutline} size={60} />
    </TouchableOpacity>}
  <Image style={styles.image} source={{
    uri: thumbnail,
  }}/>
  <View style={styles.textContainer}>
    <View>
      <Text style={[styles.largeText, styles.text]}>${insertCommas(price)}</Text>
      {city 
      ? <Text style={[styles.smallText, styles.text]}>{city}, {state}</Text> 
      : <Text style={[styles.smallText, styles.text]}>{state}</Text>}
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
  },
  iconButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 16,
    zIndex: 10,
  },
  notFavorite: {
    color: backgroundColor
  },
  favorite: {
    color: 'maroon'
  }
});

export default Card;