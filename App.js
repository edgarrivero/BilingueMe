 import React, { useRef, useEffect } from 'react';
 import { StyleSheet, View, Image, ImageBackground, TouchableOpacity, Text,  handleButtonPress,Button, navigation  } from 'react-native';
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
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import Planets from './src/Components/planets';
 import Tabs from './src/Components/tabs';
 import HomeScreen from './src/screens/HomeScreen';
 import SettingsScreen from './src/screens/SettingsScreen';
 import SparklesScreen from './src/screens/SparklesScreen';
 import BooksScreen from './src/screens/BooksScreen';
 import level1Screen from './src/screens/Level1';

 //Icons
import homeSolidIcon from './src/assets/icons/home-solid.png';
import homeLineIcon from './src/assets/icons/home-line.png';
import sparklesSolidIcon from './src/assets/icons/sparkles-solid.png';
import sparklesLineIcon from './src/assets/icons/sparkles-line.png';
import booksSolidIcon from './src/assets/icons/books-solid.png';
import booksLineIcon from './src/assets/icons/books-line.png';
import settingsSolidIcon from './src/assets/icons/setting-solid.png';
import settingsLineIcon from './src/assets/icons/setting-line.png';


 const ANGLE = 10;
 const TIME = 100;
 const EASING = Easing.elastic(1.5);
 const HomeStack = createNativeStackNavigator();
 function HomeStackScreen() {
   return (
     <HomeStack.Navigator>
       <HomeStack.Screen 
         name="HomeStack" 
         component={HomeScreen} 
         options={{
           headerShown: false,
           
         }}
       />
     </HomeStack.Navigator>
   );
 }
 const SparklesStack = createNativeStackNavigator();
 function SparklesStackScreen() {
   return (
     <SparklesStack.Navigator>
       <SparklesStack.Screen 
         name="SparklesStack" 
         component={SparklesScreen} 
         options={{
           headerShown: false,
         }}
       />
       <SparklesStack.Screen 
         name="level1" 
         component={level1Screen} 
         options={{
           headerShown: false,
         }}
       />
     </SparklesStack.Navigator>
   );
 }
 const BooksStack = createNativeStackNavigator();
 function BooksStackScreen() {
   return (
     <BooksStack.Navigator>
       <BooksStack.Screen 
         name="Books" 
         component={BooksScreen} 
         options={{
           headerShown: false,
         }}
       />
     </BooksStack.Navigator>
   );
 }
 const SettingsStack = createNativeStackNavigator();
 function SettingsStackScreen() {
   return (
     <SettingsStack.Navigator>
       <SettingsStack.Screen 
         name="Settings" 
         component={SettingsScreen} 
         options={{
           headerShown: false,
         }}
       />
     </SettingsStack.Navigator>
   );
 }
//  function DetailsScreen({ navigation }) {
//    return (
//      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//        <View style={styles.container}>
//        <ImageBackground  source={require('./src/assets/images/background.jpg')} style={[styles.container]}>
//            <Planets></Planets>
//            <Animated.View entering={FadeIn.duration(2000)} style={styles.containerBtn}>
//              <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
//                <Text style={styles.buttonText}>Iniciar</Text>
//              </TouchableOpacity>
//            </Animated.View>
//          <Tabs></Tabs>
//        </ImageBackground>
//        </View>
//      </View>
//    );
//  }
 const Stack = createNativeStackNavigator();
 const Tab = createBottomTabNavigator();

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
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarVisible: false,
            tabBarStyle: {
                height: 60,
                position: 'absolute',
                bottom: 16,
                right: 16,
                left: 16,
                borderRadius: 25,
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
            },
            tabBarActiveTintColor: 'white'
          })}
         >
          <Tab.Screen 
            name="Home" 
            component={HomeStackScreen} 
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({focused,color,size}) => {
                let iconName = focused ? homeSolidIcon : homeLineIcon;
                return <Image source={iconName} style={styles.icon} />;
              },
              tabBarVisible: false,
            }}
          />
          <Tab.Screen 
            name="Sparkles" 
            component={SparklesStackScreen} 
            options={{
              tabBarLabel: "Sparkles",
              tabBarIcon: ({focused,color,size}) => {
                let iconName = focused ? sparklesSolidIcon : sparklesLineIcon;
                return <Image source={iconName} style={styles.icon} />;
              },
              headerShown: false,
            }}
          />
          <Tab.Screen 
            name="Books" 
            component={BooksStackScreen} 
            options={{
              tabBarLabel: "Books",
              tabBarIcon: ({focused,color,size}) => {
                let iconName = focused ? booksSolidIcon : booksLineIcon;
                return <Image source={iconName} style={styles.icon} />;
              },
              headerShown: false,
            }}
          />
          <Tab.Screen 
            name="Settings" 
            component={SettingsStackScreen} 
            options={{
              tabBarLabel: "Settings",
              tabBarIcon: ({focused,color,size}) => {
                let iconName = focused ? settingsSolidIcon : settingsLineIcon;
                return <Image source={iconName} style={styles.icon} />;
              },
              headerShown: false,
            }}
          />
        </Tab.Navigator>
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
  icon: { width: 30, height: 30 }
});

