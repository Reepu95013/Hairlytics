import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, StatusBar } from 'react-native';

const SplashScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/splashbg.png')} // Replace with your image path
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar hidden={true} />
      {/* Overlay */}
      <View style={styles.overlay}>
        <View style={{ width: 300, height: 300, borderRadius: 150, overflow: 'hidden', }}>
          <Image source={require('../../assets/images/splashlogo.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain', borderRadius: 150 }} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
