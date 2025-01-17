import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, Animated, TouchableOpacity } from 'react-native';
import Jampasir from '../../assets/Wait.png';

const Wait = ({ navigation }) => {
  const dot1 = useRef(new Animated.Value(1)).current;
  const dot2 = useRef(new Animated.Value(1)).current;
  const dot3 = useRef(new Animated.Value(1)).current;
  const timeoutRef = useRef(null); 

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      navigation.replace('Done');
    }, 3000);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [navigation]);

  useEffect(() => {
    const animateDots = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(dot1, {
            toValue: 0.3,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(dot1, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(dot2, {
            toValue: 0.3,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(dot2, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(dot3, {
            toValue: 0.3,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(dot3, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    animateDots();
  }, [dot1, dot2, dot3]);

  const handleCancel = () => {
    clearTimeout(timeoutRef.current); 
    navigation.navigate('Menu'); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.cancelButtonContainer} onPress={handleCancel}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
      <Text style={styles.title}>MenuKU</Text>
      <Image source={Jampasir} style={styles.image} />
      <Text style={styles.message}>Please wait until your order is confirmed</Text>
      <View style={styles.dotsContainer}>
        <Animated.View style={[styles.dot, { opacity: dot1 }]} />
        <Animated.View style={[styles.dot, { opacity: dot2 }]} />
        <Animated.View style={[styles.dot, { opacity: dot3 }]} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  cancelButtonContainer: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#008C54',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  cancelButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  title: {
    marginTop: 16,
    fontSize: 40,
    fontWeight: '800',
    color: '#008C54',
  },
  image: {
    width: 200,
    height: 400,
    marginTop: 20,
  },
  message: {
    marginTop: 32,
    fontSize: 24,
    fontWeight: '700',
    color: '#008C54',
    textAlign: 'center',
    paddingVertical: 13,
    paddingHorizontal: 20,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    borderWidth: 3,
    borderColor: '#008C54',
    borderRadius: 20,
    padding: 8,
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: '#008C54',
    borderRadius: 4,
    marginHorizontal: 6,
  },
});

export default Wait;
