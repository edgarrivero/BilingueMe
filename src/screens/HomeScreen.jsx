import React from 'react';
import { View, ImageBackground, TouchableOpacity, Text, StyleSheet,  handleButtonPress,Button, navigation  } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    FadeIn,
    FadeInDown,
    FadeOutDown,
    FadeOut,
    BounceIn,
    BounceOut,
    Easing,
    withTiming,
    withSequence,
  } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';

function HomeScreen({ navigation }) {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.container}>
        <ImageBackground  source={require('../assets/images/background.jpg')} style={[styles.container]}>
          <Animated.Image entering={BounceIn.duration(1000)} source={require('../assets/images/logo.png')} style={[styles.logo]} />
          <Animated.Image entering={FadeIn.duration(2000)} source={require('../assets/images/planetas.png')} style={[styles.planetas]} />
          {/* <Animated.Image entering={BounceIn.duration(3000)} source={require('./assets/astronauta.png')} style={[styles.astronauta]} />  */}
          <View style={styles.astronauta}>
        <LottieView
          autoPlay
          style={{
            width: 500,
            height: 500,
          }}
          // Find more Lottie files at https://lottiefiles.com/featured
          source={require('../assets/jsons/animation_astronauta.json')}
        />
        
      </View>
          <Animated.View entering={FadeIn.duration(2000)} style={styles.containerBtn}>
            <TouchableOpacity onPress={() => navigation.navigate('Details')} style={styles.button}>
              <Text style={styles.buttonText}>Iniciar</Text>
            </TouchableOpacity>
          </Animated.View>
  
        </ImageBackground>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      height: '100%',
      width: '100%'
    },
    logo: {
      maxWidth: 300,
      resizeMode: 'contain', // Esto asegura que la imagen se ajuste sin recortar
      justifyContent: 'center',
      alignItems: 'flex-end',
      marginTop: 30,
      zIndex: 30,
    },
    planetas: {
     position: 'absolute',
     top: -10,
     zIndex: 0,
     maxWidth: 350,
     resizeMode: 'contain',
   },
    astronauta: {
     position: 'absolute',
     top: 150,
     left: -50,
     zIndex: 10,
     maxWidth: 350,
     resizeMode: 'contain', // Esto asegura que la imagen se ajuste sin recortar
     marginBottom: 200
   },
    containerBtn: {
      justifyContent: 'flex-end',
    },
    button: {
      backgroundColor: '#fbae17',
      paddingVertical: 10,
      paddingHorizontal: 80,
      borderRadius: 50,
      marginTop: 370,
      shadowOpacity: 0.5,
      shadowRadius: 10,
      elevation: 5
    },
    buttonText: {
      color: 'white',
      fontSize: 32,
      fontWeight: 'bold',
  
    },
  })

  export default HomeScreen;