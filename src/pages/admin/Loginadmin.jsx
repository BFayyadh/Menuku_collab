import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginAdmin = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter your email and password');
      return;
    }
    navigation.navigate('Signupadmin');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Choose')}>
        <Text style={styles.backButtonText}>BACK</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.title}>MenuKU</Text>
        <Text style={styles.subtitle}>Make your digital menu</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Icon
            name="mail-outline"
            size={25}
            color="#000"
            style={styles.icon}
          />
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
          <Icon
            name="lock-closed-outline"
            size={25}
            color="#000"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#aaa"
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>Don't have an account?</Text>
      <Text
        style={styles.signUpText}
        onPress={() => navigation.navigate('Signupadmin')}>
        Make your own digital menu
      </Text>
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
    marginBottom: 20,
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
  loginButton: {
    backgroundColor: '#008C54',
    paddingVertical: 15,
    borderRadius: 50,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  footerText: {
    marginTop: 20,
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
  signUpText: {
    color: '#008C54',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 5,
  },
});

export default LoginAdmin;