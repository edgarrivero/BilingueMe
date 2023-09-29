import React from 'react';
import { StyleSheet, View, ImageBackground  } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  FadeIn,
  FadeInDown,
  FadeOutDown,
  FadeOut
} from 'react-native-reanimated';

export default function App() {
  const offset = useSharedValue(50);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      { scale: offset.value }
    ],
  }));

  React.useEffect(() => {
    offset.value = withRepeat(
      // highlight-next-line
      withTiming(-offset.value, { 
        duration: 3000,
        repeat: false, 
      })
    );
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground  source={require('./assets/background.jpg')} style={[styles.container]}>
        <Animated.Image entering={FadeIn.duration(3000)} source={require('./assets/logo.png')} style={[styles.logo]} />
        <Animated.Image entering={FadeInDown.duration(4000)} source={require('./assets/astronauta.png')} style={[styles.astronauta]} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: '#b58df1',
    borderRadius: 20,
  },
  logo: {
     maxWidth: 300,
     resizeMode: 'contain', // Esto asegura que la imagen se ajuste sin recortar
   },
   astronauta: {
    maxWidth: 300,
    resizeMode: 'contain', // Esto asegura que la imagen se ajuste sin recortar
  },
});



// import React from 'react';
// import { Button, StyleSheet, View } from 'react-native';
// import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';


// export default function App() {
//   const width = useSharedValue(50);

//   const handlePress = () => {
//     width.value = withSpring(width.value + 150);
//   };

//   React.useEffect(() => {
//     // highlight-next-line
//     handlePress();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Animated.Image source={require('./assets/background.jpg')} style={{ ...styles.backgroundApp }} />
//       <View style={styles.containLogo}>
//         <Animated.Image source={require('./assets/logo.png')} style={{ ...styles.logo, width }} />
//       </View>
      
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   box: {
//     height: 100,
//     backgroundColor: '#b58df1',
//     borderRadius: 20,
//     marginVertical: 64,
//     maxWidth: '100%'
//   },
//   backgroundApp: {
//     height: '100%',
//     width: '100%'
//   },
//   logo: {
//     position: 'absolute',
//     top: 20,
//     left: 20,
//     width: 100,
//     height: 200,
//     zIndex: 999, 
//   },
//   containLogo: {
//     height: '100%',
//     width: '100%'
//   }
// });
