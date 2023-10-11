import React from 'react';
import { View, StyleSheet, Text,Dimensions,Image, TouchableOpacity  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Tabs = () => {
    const windowHeight = Dimensions.get('window').height;
  const bottomViewHeight = 80; 

  const navigation = useNavigation();

  // Función para navegar a la pantalla correspondiente al tocar una imagen
  const handleImagePress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
      <View style={[styles.bottomView, { top: windowHeight - bottomViewHeight }]}>
        {/* Contenido del elemento View en la parte inferior */}
        <View style={styles.tabs}>
            <View style={styles.tabs2}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../../assets/icons/home.png')} style={styles.image} />
                </TouchableOpacity>
                <Image source={require('../../assets/icons/section2.png')} style={styles.image} />
                <Image source={require('../../assets/icons/section3.png')} style={styles.image} />
                <Image source={require('../../assets/icons/section4.png')} style={styles.image} />
            </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  bottomView: {
    position: 'absolute',
    left: 30
    // Otros estilos para el elemento en la parte inferior
  },
  tabs: {
    width: Dimensions.get('window').width - 60,
    height: 80,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 35,
  },
  tabs2: {
    alignContent: '',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width - 70,
    height: 70,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 30,
    margin: 5,
    flexDirection: 'row',
  },
  image: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15, // Añade un margen para separar los elementos
  }
});

export default Tabs;
  
  
  
  
  
  
  