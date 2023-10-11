import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Line, Circle } from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
} from 'react-native-reanimated';

const AnimatedLine = Animated.createAnimatedComponent(Line);

const App = () => {
  const x1 = useSharedValue(50); // posición inicial de la línea en el eje x
  const y1 = useSharedValue(50); // posición inicial de la línea en el eje y
  const x2 = useSharedValue(50); // posición final de la línea en el eje x
  const y2 = useSharedValue(50); // posición final de la línea en el eje y

  const animatedProps = useAnimatedProps(() => {
    return {
      x1: x1.value,
      y1: y1.value,
      x2: x2.value,
      y2: y2.value,
    };
  });

  const circleRef = useRef(); // referencia al círculo que se va a mover

  const moveCircle = () => {
    // función para mover el círculo a una posición aleatoria
    const randomX = Math.floor(Math.random() * 300) + 50; // generar un número aleatorio entre 50 y 350 para el eje x
    const randomY = Math.floor(Math.random() * 300) + 50; // generar un número aleatorio entre 50 y 350 para el eje y
    circleRef.current.setNativeProps({
      style: {
        left: randomX - 25, // restar el radio del círculo para centrarlo
        top: randomY - 25, // restar el radio del círculo para centrarlo
      },
    });
    x2.value = withTiming(randomX); // animar la posición final de la línea en el eje x
    y2.value = withTiming(randomY); // animar la posición final de la línea en el eje y
  };

  return (
    <View style={styles.container}>
      <Svg height="400" width="400" style={styles.svg}>
        <AnimatedLine
          animatedProps={animatedProps}
          stroke="black"
          strokeWidth="2"
        />
        <Circle
          ref={circleRef}
          cx="50"
          cy="50"
          r="25"
          fill="red"
          onPress={moveCircle}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  svg: {
    backgroundColor: 'lightgray',
  },
});

export default App;
