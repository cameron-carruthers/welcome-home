import React from 'react';
import { View, ImageBackground, StyleSheet, Text, Button } from 'react-native';
import { primaryFont } from './utils';

const HomeScreen = ({ request, promptAsync, useProxy }) => (
  <View style={styles.container}>
    <ImageBackground source={require('../assets/home.jpg')} style={styles.image}>
      <Text style={[styles.text, styles.textOne]}>Welcome</Text>
      <Text style={styles.text}>Home</Text>
      <Button
        disabled={!request}
        title="Login"
        onPress={() => {
          promptAsync({ useProxy });
          }}
      />
    </ImageBackground>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
  },
  text: {
    color: "black",
    fontSize: 38,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: primaryFont
  },
  textOne: {
    marginTop: 30
  }
});

export default HomeScreen;