import React from 'react';
import { View, StyleSheet } from 'react-native';
import Cell from './Cell';
import { insertCommas } from './utils';

const CellRow = ({ beds, baths, sqft, lot }) => {
  return (
    <View style={styles.container}>
      <Cell lineOne={beds} lineTwo='beds' finalCell={false}/>
      <Cell lineOne={baths} lineTwo='baths' finalCell={false}/>
      <Cell lineOne={insertCommas(sqft)} lineTwo='Sq ft' finalCell={false}/>
      <Cell lineOne={insertCommas(lot)} lineTwo='Sqft lot' finalCell={true}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

export default CellRow;