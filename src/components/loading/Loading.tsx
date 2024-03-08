import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import LottieView from 'lottie-react-native';

// Obtiene las dimensiones de la pantalla para el estilo de pantalla completa
const {width, height} = Dimensions.get('window');
const LOTTIE_FILE = require('../../assets/lottie/loading.json');

interface LoadingProps {
  active?: boolean;
}

const Loading: React.FC<LoadingProps> = ({active = false}) => {
  if (!active) return null; // No renderiza nada si active es false

  return (
    <View style={styles.overlay}>
      <LottieView
        style={{width: 100, height: 100}}
        source={LOTTIE_FILE}
        autoPlay
        loop
      />

      <Text style={styles.text}>Cargando</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    width: width,
    height: height,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: -20,
  },
});

export default Loading;
