import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cell = ({ lineOne, lineTwo, finalCell}) => (
  finalCell ? (
    <View style={styles.container}>
      <Text style={styles.text}>{lineOne}</Text>
      <Text style={styles.text}>{lineTwo}</Text>
    </View>
  ) : (
    <View style={[styles.container, styles.border]}>
      <Text style={styles.text}>{lineOne}</Text>
      <Text style={styles.text}>{lineTwo}</Text>
    </View>
  )
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: 70
  },
  border: {
    borderRightColor: 'black',
    borderRightWidth: 1,
  },
  text: {
    textAlign: 'center'
  }
});

export default Cell;