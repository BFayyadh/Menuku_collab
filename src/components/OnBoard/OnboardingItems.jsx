import React from 'react';
import { Image, StyleSheet, Text, View, useWindowDimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function OnboardingItems({ item }) {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate('Signup'); // Navigate to Signup screen
  };

  return (
    <View style={[styles.container, { width }]}>
      {/* Text at the top */}
      <View style={styles.textContainer}>
        <Text style={styles.description}>{item.description}</Text>
      </View>

      {/* Image in the middle */}
      <View style={styles.imageContainer}>
        <Image
          source={item.image}
          style={[styles.image, { width: width * 0.8, height: height * 0.5 }]}
          resizeMode="contain"
        />
      </View>

      {/* Get Started button at the bottom */}
      {item.id === 3 && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.getStartedButton} onPress={() => navigation.navigate('Scan')}>
            <Text style={styles.getStartedButtonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#008C54',
  },
  textContainer: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    paddingHorizontal: 16,
  },
  imageContainer: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  image: {
    width: '90%',
    height: '90%',
  },
  description: {
    fontSize: 28,
    fontWeight: '800',
    color: '#ffffff',
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  getStartedButton: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100%',
    alignItems: 'center',
  },
  getStartedButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#008C54',
  },
});