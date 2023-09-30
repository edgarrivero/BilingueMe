import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Text  } from 'react-native';
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

const ANGLE = 10;
const TIME = 100;
const EASING = Easing.elastic(1.5);

export default function App() {
  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${rotation.value}deg` }],
  }));

  React.useEffect(() => {
    rotation.value = withSequence(
      // deviate left to start from -ANGLE
      withTiming(-ANGLE, { duration: TIME / 2, easing: EASING }),
      // wobble between -ANGLE and ANGLE 7 times
      withRepeat(
        withTiming(ANGLE, {
          duration: TIME,
          easing: EASING,
        }),
        7,
        true
      ),
      // go back to 0 at the end
      withTiming(0, { duration: TIME / 2, easing: EASING })
    );
  }, []);

  const handleButtonPress = () => {
    // Esta función se ejecutará cuando se presione el botón
    console.log('Botón presionado');
  };

  return (
    <View style={styles.container}>
      <ImageBackground  source={require('./assets/background.jpg')} style={[styles.container]}>
        <Animated.Image entering={BounceIn.duration(1000)} source={require('./assets/logo.png')} style={[styles.logo]} />
        <Animated.Image entering={FadeIn.duration(2000)} source={require('./assets/planetas.png')} style={[styles.planetas]} />
        <Animated.Image entering={BounceIn.duration(3000)} source={require('./assets/astronauta.png')} style={[styles.astronauta]} />
        <Animated.View entering={FadeIn.duration(2000)} style={styles.containerBtn}>
          <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
            <Text style={styles.buttonText}>Iniciar</Text>
          </TouchableOpacity>
        </Animated.View>
        
      </ImageBackground>
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
    top: 210,
    zIndex: 10,
    maxWidth: 280,
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
});
