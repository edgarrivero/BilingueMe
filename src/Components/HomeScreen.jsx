import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={require('../../assets/background.jpg')} // Ruta de tu imagen de fondo
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.Text}>Tu contenido aquí</Text>
      </View>
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  test: {
    color: '#fff',
  },
  backgroundImage: {
    flex: 1,
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  Text: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
  }
});

export default HomeScreen;