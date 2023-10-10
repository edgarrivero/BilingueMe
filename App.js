import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Text,  handleButtonPress,Button, navigation  } from 'react-native';
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
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Planets from './src/Components/planets';

const ANGLE = 10;
const TIME = 100;
const EASING = Easing.elastic(1.5);


function HomeScreen({ navigation }) {

  const animation = useRef(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);

  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.container}>
      <ImageBackground  source={require('./assets/background.jpg')} style={[styles.container]}>
        <Animated.Image entering={BounceIn.duration(1000)} source={require('./assets/logo.png')} style={[styles.logo]} />
        <Animated.Image entering={FadeIn.duration(2000)} source={require('./assets/planetas.png')} style={[styles.planetas]} />
        {/* <Animated.Image entering={BounceIn.duration(3000)} source={require('./assets/astronauta.png')} style={[styles.astronauta]} />  */}
        <View style={styles.astronauta}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 500,
          height: 500,
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('./assets/animation_astronauta.json')}
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

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.container}>
      <ImageBackground  source={require('./assets/background.jpg')} style={[styles.container]}>

        <Planets></Planets>
        <Animated.View entering={FadeIn.duration(2000)} style={styles.containerBtn}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
            <Text style={styles.buttonText}>Iniciar</Text>
          </TouchableOpacity>
        </Animated.View>
      </ImageBackground>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();


export default function App({ navigation }) {
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
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            headerTransparent: true,
          }}
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
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
});
