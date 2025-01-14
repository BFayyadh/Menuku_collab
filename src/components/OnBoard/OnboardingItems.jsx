import React from 'react';
import {Image, StyleSheet, Text, View, useWindowDimensions, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function OnboardingItems({item}) {
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();

  const handleSignUp = () => {
    navigation.navigate('Signup'); // Navigate to Signup screen
  };

  const handleLogin = () => {
    navigation.navigate('Login'); // Navigate to Login screen
  };

  return (
    <View style={[styles.container, {width}]}>
      {/* Teks di bagian atas */}
      <View style={styles.textContainer}>
        <Text style={styles.description}>{item.description}</Text>
      </View>

      {/* Gambar di tengah */}
      <View style={styles.imageContainer}>
        <Image
          source={item.image}
          style={[styles.image, {width: width * 0.8, height: height * 0.5}]}
          resizeMode="contain"
        />
      </View>

      {/* Tombol di bagian bawah */}
      {item.id === 3 && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  image: {
    width: '100%',
    height: '100%',
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
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '65%',
  },
  signUpButton: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 24,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  signUpButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#008C54',
  },
  loginButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#ffffff',
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 24,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
