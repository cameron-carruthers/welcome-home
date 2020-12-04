import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import Card from './Card';
import { backgroundColor } from './utils';

const SearchScreen = () => {
  
  useEffect(() => {

  });
  return (
    <View style={styles.container}>
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default SearchScreen;