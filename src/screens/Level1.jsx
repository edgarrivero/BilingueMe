import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image, StyleSheet } from 'react-native';
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

import Svg, { Path } from 'react-native-svg';
import { BackSvg } from '../assets/data/svgs';
import { Canvas, Line, vec } from "@shopify/react-native-skia";

function Level1Screen({navigation}) {
  return (
    <View style={{ flex: 1 }}>
        <ImageBackground  source={require('../assets/images/fondo-questions.jpg')} style={[styles.container]}>
            <View style={styles.header}>
                <View style={styles.btnBack}>
                    <TouchableOpacity onPress={() => navigation.navigate('Sparkles')}  style={styles.back} >
                        <BackSvg  style={styles.backSvg} />
                    </TouchableOpacity>
                </View>
                
                <Text style={styles.title}>Completa el espacio en blanco</Text>
                <View>
                    <View  style={styles.headerQuestion}>
                        <Animated.Image entering={BounceIn.duration(1000)} source={require('../assets/images/level1-astronaut.png')} style={[styles.astronaut]} />
                        <Text style={styles.subTitle}>What's your favorite movie or book? pero que es esta huevada</Text>
                    </View>
                    <Animated.Image entering={BounceIn.duration(1000)} source={require('../assets/images/soil.png')} style={[styles.soil]} />
                    <View style={styles.question}>
                        <Text>edgar</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        width: '100%',
    },
    questionSection:{
        flexDirection: 'row',
        position: 'relative'
    },
    headerQuestion: {
        flexDirection: 'row',
        marginHorizontal: 30
    },
    header:{
       marginTop: 40,
    },
    btnBack: {
        paddingHorizontal: 20,
    },
    back:{
        paddingTop: 10,
        paddingStart: 4,
        alignItems: 'center',
        width: 40,
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 50,
        color: 'white',
    },
    title: {
        color: "white",
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 30,
        marginHorizontal: 30
    },
    subTitle: {
        color: "white",
        fontSize: 20,
        marginHorizontal: 30,
        zIndex: 5,
        maxWidth: 220
    },
    soil: {
        position: 'absolute',
        top: -70,
        resizeMode: 'contain',
        width: '100%',
        padding: 0,
        margin: 0,
        zIndex: 1
    },
    question: {
        backgroundColor: '#754c29',
        width: '100%',
        height: '100%',
    },
    astronaut: {
        width: 90,
        height: 120,
        marginTop: 40,
        resizeMode: 'contain',
        zIndex: 2
    },
});

export default Level1Screen;