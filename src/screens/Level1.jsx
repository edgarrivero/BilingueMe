import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
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


function level1Screen() {
  return (
    <View style={{ flex: 1 }}>
        <ImageBackground  source={require('../assets/images/fondo-questions.jpg')} style={[styles.container]}>
            <Animated.Image entering={BounceIn.duration(1000)} source={require('../assets/images/level1-astronaut.png')} style={[styles.astronaut]} />
            <Animated.Image entering={BounceIn.duration(1000)} source={require('../assets/images/soil.png')} style={[styles.soil]} />
            <Text style={styles.title}>Completa el espacio en blanco</Text>
            <Text style={styles.subTitle}>No, I do _____ have a wife.</Text>
            <View style={styles.question}>
                <Text style={styles.title}>Level1</Text>
            </View>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
    },
    title: {
        color: "white",
        fontSize: 24,
        marginTop: 90,
    },
    subTitle: {
        color: "white",
        fontSize: 18,
        paddingTop: 40,
        marginLeft: 100
    },
    soil: {
        position: 'absolute',
        top: 100,
        resizeMode: 'contain',
        justifyContent: 'center',
        width: '100%',
        padding: 0,
        margin: 0,
        zIndex: 130
    },
    question: {
        backgroundColor: '#754c29',
        width: '100%',
        height: '100%',
        padding: 40,
        marginTop: 130
    },
    planetas: {
        position: 'absolute',
        top: -10,
        zIndex: 0,
        maxWidth: 350,
        resizeMode: 'contain',
    },
    astronaut: {
        position: 'absolute',
        top: -190,
        left: 25,
        resizeMode: 'contain',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: 100,
        padding: 0,
        margin: 0,
        zIndex: 132
    },
});

export default level1Screen;