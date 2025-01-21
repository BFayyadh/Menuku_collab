import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const App = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const isFormValid = () => {
    return (
      username.trim() !== '' &&
      email.trim() !== '' &&
      password.trim() !== '' &&
      confirmPassword.trim() !== '' &&
      password === confirmPassword
    );
  };

  const handleSignUp = () => {
    if (isFormValid()) {
      navigation.navigate('Login');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.loginBadge}>
          <Text style={styles.loginText}>Sign up</Text>
        </View>
        <Text style={styles.title}>MenuKU</Text>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Icon name="person-outline" size={25} color="#000" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#aaa"
            value={username}
            onChangeText={setUsername}
          />
        </View>
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
          <Icon name="lock-closed-outline" size={25} color="#000" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
            placeholderTextColor="#aaa"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>
      </View>

      <TouchableOpacity
        style={[
          styles.signupButton,
          { backgroundColor: isFormValid() ? '#008f4c' : '#ccc' },
        ]}
        disabled={!isFormValid()}
        onPress={handleSignUp}
      >
        <Text style={styles.signupButtonText}>Sign up</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Have an account?{' '}
        <Text
          style={styles.loginTextFooter}
          onPress={() => navigation.navigate('Login')}
        >
          Login
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  loginBadge: {
    backgroundColor: '#008f4c',
    paddingHorizontal: 15,
    paddingVertical: 3,
    height: 43,
    width: 115,
    borderRadius: 15,
    marginRight: 145,
    transform: [{ rotate: '-15deg' }],
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 23,
    textAlign: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '800',
    color: '#008f4c',
  },
  inputContainer: {
    width: '80%',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  signupButton: {
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  footerText: {
    marginTop: 20,
    fontSize: 14,
    color: '#000',
  },
  loginTextFooter: {
    color: '#008f4c',
    fontWeight: 'bold',
  },
});

export default App;
