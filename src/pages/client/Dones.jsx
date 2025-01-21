import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import TakeAway from '../../assets/TakeAway.png';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MenuKU</Text>
      <Text style={styles.subtitle}>
        Thank you for shopping{'\n'}Please wait until your queue number is
        called
      </Text>
      <Text style={styles.queueLabel}>No Antrian</Text>
      <View style={styles.queueContainer}>
        <Text style={styles.queueNumber}>30</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => navigation.navigate('Menu')}>
          Done
        </Text>
      </TouchableOpacity>
      <Image source={TakeAway} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    color: '#008C54',
    fontSize: 40,
    fontWeight: 900,
    marginBottom: 35,
    marginTop: 70,
  },
  subtitle: {
    color: '#008C54',
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 30,
    fontWeight: 600,
    marginBottom: 35,
  },
  queueLabel: {
    color: '#008C54',
    fontSize: 18,
    alignSelf: 'flex-start',
    marginBottom: 8,
    marginLeft: 50,
    fontWeight: 600,
  },
  queueContainer: {
    backgroundColor: '#008C54',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 32,
    marginBottom: 10,
    alignItems: 'center',
    width: '75%',
  },
  queueNumber: {
    color: '#fff',
    fontSize: 64,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#008C54',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 32,
    marginBottom: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
    padding: 200,
    marginTop: 5,
    marginBottom: 20,
  },
});
