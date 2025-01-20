import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SignupAdmin = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [restoName, setRestoName] = useState('');
  const [address, setAddress] = useState('');

  const handleNext = () => {
    if (!email || !password || !restoName || !address) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    navigation.navigate('Addmenu');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>BACK</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.title}>MenuKU</Text>
        <Text style={styles.subtitle}>Make your own digital menu in here</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Icon name="mail-outline" size={25} color="#000" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Icon name="lock-closed-outline" size={25} color="#000" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#aaa"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Icon name="home-outline" size={25} color="#000" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Name of your Resto"
            placeholderTextColor="#aaa"
            value={restoName}
            onChangeText={setRestoName}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Icon name="location-outline" size={25} color="#000" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Address"
            placeholderTextColor="#aaa"
            value={address}
            onChangeText={setAddress}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
  },
  backButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#008C54',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: '800',
    color: '#008C54',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    fontWeight: '700',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#000',
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  nextButton: {
    backgroundColor: '#008C54',
    paddingVertical: 15,
    borderRadius: 50,
    width: '100%',
    alignItems: 'center',
    marginTop: 250,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  nextButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default SignupAdmin;