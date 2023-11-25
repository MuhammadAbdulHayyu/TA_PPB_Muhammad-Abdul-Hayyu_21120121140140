import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = () => (
  <View style={styles.container}>
    <Image
      source={require('C:/Users/abdul/TAppb_Abdul/assets/waduh.jpeg')}
      style={styles.image}
      resizeMode="contain"
    />
    <Text style={styles.text}>Loading...</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
