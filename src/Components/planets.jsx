import React, { useEffect, useState } from 'react';
import { View, Text,Image,StyleSheet, FlatList, Dimensions, TouchableOpacity  } from 'react-native'; // Asegúrate de importar las dependencias necesarias.
import planetas from '../../src/assets/data/planetas';
import Animated from 'react-native-reanimated';


const PlanetList = ({ navigation }) => {

  return (
    <View>
      <Text>Planetas</Text>
      <FlatList
      data={planetas}
      style={styles.container}
      renderItem={({ item: planeta }) => (
        <TouchableOpacity onPress={() => navigation.navigate(planeta.navigateTo)}>
          <View style={[styles.planetaContainer, { alignItems: planeta.alignItems, justifyContent: planeta.justifyContent, height: planeta.height }]}>
            <Image
              source={{ uri: planeta.imagen }}
              style={[styles.planetaImagen, { width: planeta.with }]}
              accessibilityLabel={planeta.nombre}
            />
            <Text style={styles.text}>{planeta.nombre}</Text>
          </View>      
        </TouchableOpacity>
        
      )}
      keyExtractor={(item, index) => index.toString()}
    />
      
    </View>
  );
};

export default PlanetList;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40

  },
  planetaContainer: {
    width: Dimensions.get('window').width - 80,
    height: 150,
    padding: 10,
  },
  planetaImagen: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
    
  },
  text: {
    // Estilos de texto
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  },
})






